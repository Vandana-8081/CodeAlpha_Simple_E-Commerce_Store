import express from "express";
import ProductModel from "../models/product.model.js";

const productRoute = express.Router();

productRoute.get("/product/:id", async (req, res) => {
  try {

    const id = req.params.id;

    const product = await ProductModel.findById(id);

    if (!product) {
      return res.status(404).json({
        success: false,
        message: "Product not found",
      });
    }

    res.status(200).json({
      success: true,
      product,
    });

  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
});

export default productRoute;