import { validateTokenForUser } from "../utils/authentication.js";

function authenticatedUser(param){
    return (req,res,next)=>{
        const token = req.cookies[param];
        if(!token) return next();
        try {
            const user = validateTokenForUser(token); 
            req.user = user;
        } catch (error) {}
       
        next();
    }
}
export {authenticatedUser} 


