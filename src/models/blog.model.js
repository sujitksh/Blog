import mongoose from "mongoose";

const blogSchema = mongoose.Schema({

    title:{
        type:String,
        required:true
    },
    content:{
        type:String,
        required:true
    },
    coverImageURL:{
        type:String
       
    },
    createdBy:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    }
},{timestamps:true})

export const Blog = mongoose.model("Blog",blogSchema);