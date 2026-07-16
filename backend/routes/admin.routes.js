import express from "express";
import jwt from "jsonwebtoken";
import productModel from "../models/product.model.js";
import multer from "multer";
import uploadFile from "../servises/product.servises.js";

const adminRouter = express.Router();

const upload = multer({storage:multer.memoryStorage()})

adminRouter.post("/add-product",upload.single("image"),async(req,res)=>{

    const token =req.cookies.token;
    if(!token){
        return res.status(401).json({
            message:"Unauthorized"
        })
    }
    

  try{
     const decoded= jwt.verify(token,process.env.JWT_SECRET_KEY)
     
     if(decoded.role !== "admin"){
        return res.status(401).json({
            message:"You don't have access to create this product"
        })
     }


const result = await uploadFile(req.file.buffer);
const {title, price,description,category, brand, delivery}= req.body;
const product = await productModel.create({
    image:result.url,
    title:title,
    price:price,
    description:description,
    category:category,
    brand: brand,
    delivery:delivery,
    admin:decoded.id
})
return res.status(200).json({
    message:"Product created successfully",
    data:product
})

  }catch(err){
      return res.status(401).json({
          message:err.message
      })
  }

})
       
adminRouter.get("/product-list",async(req,res)=>{
     console.log("Cookies:", req.cookies);
    const token =req.cookies.token;
    if(!token){
        return res.status(401).json({
            message:"Unauthorized"
        })
    }

    try{
        const decoded= jwt.verify(token,process.env.JWT_SECRET_KEY)
        const products = await productModel.find({admin:decoded.id})
        if(products.length> 0){
             return res.status(200).json({
            message:"Products fetched successfully",
            data:products
        })
        }else{
            return res.status(200).json({
                message:"No products found",
                data:[]
            })
        }
       
    }catch(err){
        return res.status(401).json({
            message:err.message
        })
    }
})

export default adminRouter;