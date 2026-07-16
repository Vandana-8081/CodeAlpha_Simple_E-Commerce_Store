import dotenv from "dotenv";
import express from "express";
import connectDB from "./db/db.js";
import router from "./routes/user.routes.js";
import adminRouter from "./routes/admin.routes.js";
import orderRoute from "./routes/order.routes.js";
import productRoute from "./routes/productdetail.routes.js"

import cookieParser from "cookie-parser";
import cors from "cors";

dotenv.config();

const app=express();
app.use(express.json());
app.use(cookieParser());
app.use(cors(
    {
  origin: "http://localhost:5173",
  credentials: true,
}
));

connectDB();
app.use("/admin",adminRouter);

app.use("/api",router);

app.use("/user",orderRoute);

app.use("/detail",productRoute)


app.listen(3000,()=>{
    console.log("Server is running on port 3000");
})