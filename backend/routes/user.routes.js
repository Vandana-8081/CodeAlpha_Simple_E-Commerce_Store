import userModel from "../models/user.model.js";
import ProductModel from "../models/product.model.js";
import orderModel from "../models/order.model.js"
import express from "express";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import bcrypt from "bcryptjs";
dotenv.config();

const router = express.Router();

router.post("/register", async (req, res) => {
  const {
    username,
    lastname,
    phone,
    email,
    password,
    role = "user",
  } = req.body;

  const isUserExist = await userModel.findOne({
    email,
  });
  if (isUserExist) {
    return res.status(400).json({
      message: "User already exists",
    });
  }

  const hash = await bcrypt.hash(password, 10);

  const newUser = await userModel.create({
    username,
    lastname,
    phone,
    email,
    password: hash,
    role,
  });

  const token = jwt.sign(
    {
      id: newUser._id,
      role: newUser.role,
    },
    process.env.JWT_SECRET_KEY,
  );

  res.cookie("token", token, {
    httpOnly: true,
    sameSite: "lax",
    secure: false, // localhost ke liye
    maxAge: 24 * 60 * 60 * 1000, // 1 day
  });
  return res.status(201).json({
    message: "User created successfully",
    token: token,
    user: newUser,
  });
});

router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const user = await userModel.findOne({
    email,
  });
  if (!user) {
    return res.status(400).json({
      message: "invalid credentials",
    });
  }
  const ispasswordMatch = await bcrypt.compare(password, user.password);
  if (!ispasswordMatch) {
    return res.status(400).json({
      message: "invalid credentials",
    });
  }

  const token = jwt.sign(
    {
      id: user._id,
      role: user.role,
    },
    process.env.JWT_SECRET_KEY,
  );

  res.cookie("token", token, {
    httpOnly: true,
    sameSite: "lax",
  });
  return res.status(200).json({
    message: "user find  successfully",
    token: token,
    user: {
      id: user._id,
      username: user.username,
      role: user.role,
    },
  });
});

router.post("/logout", (req, res) => {
  res.clearCookie("token", {
    httpOnly: true,
    sameSite: "lax",
    secure: false, // localhost ke liye
  });

  return res.status(200).json({
    message: "Logout successful",
  });
});

//   const token = req.cookies.token;
//   if (!token) {
//     return res.status(401).json({
//       message: "Unauthorized",
//     });
//   }
//   try {
//     const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
//     const user = await userModel.findById(decoded.id);
//     if (!user) {
//       return res.status(404).json({
//         message: "User not found",
//       });
//     }
//     return res.status(200).json({
//       message: "User fetched successfully",
//       user: user,
//     });
//   } catch (err) {
//     return res.status(401).json({
//       message: err.message,
//     });
//   }
// });

router.get("/products", async (req, res) => {
  try {
    const products = await ProductModel.find();

    res.json({
      success: true,
      products,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
});

//   try {
//     const userId = req.user.id; // JWT se user id
//     const { products, totalPrice } = req.body;

//     // Validation
//     if (!products || products.length === 0) {
//       return res.status(400).json({
//         message: "Please add at least one product.",
//       });
//     }

//     if (!totalPrice) {
//       return res.status(400).json({
//         message: "Total price is required.",
//       });
//     }

//     // Create Order
//     const order = new orderModel({
//       userId,
//       products,
//       totalPrice,
//     });

//     const result = await order.save();

//     res.status(201).json({
//       success: true,
//       message: "Order placed successfully.",
//       data: result,
//     });
//   } catch (err) {
//     console.error(err);

//     res.status(500).json({
//       success: false,
//       message: "Internal Server Error",
//     });
//   }
// });



export default router;
