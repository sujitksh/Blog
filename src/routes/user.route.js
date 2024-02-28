import { Router } from "express";
import { userSignup,createUserSignup,userSignIn,userLogout } from "../controllers/user.controller.js";
import { authenticatedUser } from "../middleware/authentication.js";

const router = Router();

//User All Routes
router.route("/signin").get((req,res)=>{ 
   return res.render("signin");
})

router.route("/signup").get(userSignup)
router.route("/signup").post(createUserSignup)
router.route("/signin").post(userSignIn)
router.route("/logout").get(userLogout)


export {router}