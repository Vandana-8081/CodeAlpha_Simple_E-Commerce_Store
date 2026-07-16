import orderModel from "../models/order.model.js"
import express from "express";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import bcrypt from "bcryptjs";
dotenv.config();


const orderRoute = express.Router();

orderRoute.post("/order", async (req, res) => {
  try {

     const token = req.cookies.token;
     if(!token){
       return res.status(401).json({
        success: false,
        message: "Please login first"});
     }
  const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);

    const userId = decoded.id;

   
    const { products, totalPrice } = req.body;

    if (!userId) {
      return res.status(400).json({
        success: false,
        message: "User ID is required",
      });
    }

    if (!products || products.length === 0) {
      return res.status(400).json({
        success: false,
        message: "Please add at least one product",
      });
    }

    if (!totalPrice) {
      return res.status(400).json({
        success: false,
        message: "Total price is required",
      });
    }

  

    const order = new  orderModel({
      userId,
      products,
      totalPrice,
    });

    const result = await order.save();

    res.status(201).json({
      success: true,
      message: "Order placed successfully",
      data: result,
    });
  } catch (err) {
    console.error(err);

    res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
});

orderRoute.get("/my-orders", async (req, res) => {
  try {
    const token = req.cookies.token;

    if (!token) {
      return res.status(401).json({
        success: false,
        message: "Please login first",
      });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);

    const orders = await orderModel
      .find({ userId: decoded.id })
      .populate("products.productId");

    res.status(200).json({
      success: true,
      data: orders,
    });

  } catch (err) {
    console.error(err);

    res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
});

orderRoute.get("/admin/orders", async (req, res) => {
  try {
    const token = req.cookies.token;

    if (!token) {
      return res.status(401).json({
        success: false,
        message: "Please login first",
      });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);

    if (decoded.role !== "admin") {
      return res.status(403).json({
        success: false,
        message: "Access denied",
      });
    }

    const orders = await orderModel
      .find()
      .populate("userId", "name email")
      .populate("products.productId");

    res.status(200).json({
      success: true,
      data: orders,
    });

  } catch (err) {
    console.error(err);

    res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
});


export default orderRoute;