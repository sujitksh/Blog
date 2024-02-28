import mongoose from "mongoose";

const commentSchema = mongoose.Schema({

    content:{
        type:String,
        required:true
    },
    blogId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Blog"
    },
    createdBy:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    }
},{timestamps:true});

export const Comment = mongoose.model("Comment",commentSchema)