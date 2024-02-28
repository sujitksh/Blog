import { User } from "../models/user.model.js"
import { createTokenForUser } from "../utils/authentication.js";

const userSignup = async(req,res)=>{
   return res.render("signup")
}

const createUserSignup = async(req,res)=>{
    const {fullName,email,password} = req.body;
    await User.create({
        fullName,
        email,
        password
    });
  return res.redirect("/");
 }

 const userSignIn = async(req,res)=>{
   try {
      const {email,password} = req.body;
     
      if(!email && !password){
         return res.redirect("/api/users/signin");
      }
      const user = await User.findOne({email});
      
      if(!user){
         return res.render("signin",{error:"User Does not exit"});
      }
      const userPass = await user.isPasswordCorrect(password);
      
      if(!userPass)  return res.render("signin",{error:"Wrong credential"});
      const userData = await User.findById(user._id).select("-password");
      
      const token = createTokenForUser(userData);
     
      res.cookie('token',token)
      return res.redirect("/")
   } catch (error) {
      return res.render("signin",{error:"Wrong email or password"});
      
   }
} 
const userLogout = (req,res)=>{
   return res.clearCookie("token").redirect("/");
}
export {userSignup,createUserSignup,userSignIn,userLogout}