import { Router } from "express";
import { addBlog,addComment } from "../controllers/blog.controller.js";
import { fileUpload } from "../utils/fileUpload.js";
import { Blog } from "../models/blog.model.js";
import { Comment } from "../models/comment.model.js";

const router = Router();
router.route("/").get((req,res)=>{
  return res.render("addBlog",{user:req.user});
});
router.route("/:id").get(async(req,res)=>{
    const blogData = await Blog.findById(req.params.id).populate("createdBy");
    const commentData = await Comment.find({blogId:req.params.id}).populate("createdBy");
    return res.render("viewBlog",{user:req.user,blog:blogData,comment:commentData});
  });
router.route("/addBlog").post(fileUpload('blogs').single('coverImageURL'),addBlog);
router.route("/comment/:blogId").post(addComment);

export {router}