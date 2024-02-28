import { DB_NAME } from "../constants.js";
import mongoose from "mongoose";

export const connectDB = async()=>{
  try { 
    const db = await mongoose.connect(`${process.env.MONGO_URI}/${DB_NAME}`);
    console.log("MongoDB connect successfuly!!");
  } catch (error) {
      console.log("MongoDB not connecting",error)
      process.exit(1);
  }
}