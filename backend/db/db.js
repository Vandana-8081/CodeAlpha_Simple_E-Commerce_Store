import mongoose from "mongoose"
import dotenv from "dotenv";
dotenv.config();
const connectDB =async ()=>{
try{
    await  mongoose.connect(process.env.DATABASE_URL);
  console.log("database connect successfully....")

}catch(err){
    console.log(`database is not connect ${err}`);
    
}
}
export default connectDB;