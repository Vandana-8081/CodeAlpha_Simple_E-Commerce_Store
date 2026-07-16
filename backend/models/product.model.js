import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
       image:{
        type:String,
        required:true
    },
    title:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    description: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  brand: {
    type: String,
    required: true,
  },
 
  delivery: {
    type: String,
    default: "Free Delivery",
  },
    admin:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user",
        required:true
    },

})

const ProductModel = mongoose.model("product", productSchema);
export default ProductModel;