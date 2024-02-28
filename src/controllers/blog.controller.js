import { Blog } from "../models/blog.model.js"
import { Comment } from "../models/comment.model.js";


const addBlog = async(req,res)=>{
   const {title,content} = req.body;
   const coverImg = req.file?req.file?.filename:"";
   
  const blog = await Blog.create({
    title,
    content,
    coverImageURL:`blogs/${coverImg}`,
    createdBy:req.user._id
  });
  return res.redirect(`/`);
}
const addComment = async(req,res)=>{
      const comment = await Comment.create({
          content:req.body.content,
          blogId:req.params.blogId,
          createdBy:req.user._id
      })
     
      return res.redirect(`/api/blogs/${req.params.blogId}`)
}

export {addBlog,addComment}