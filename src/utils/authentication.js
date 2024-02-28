import jwt from "jsonwebtoken";

const secret = "sujit@123";

function createTokenForUser(user){
  const payload = {
    _id:user._id,
    email:user.email,
    role:user.role,
    name:user.fullName,
    profileImageURL:user.profileImageURL
  }
  const token = jwt.sign(payload,secret);
  return token;
}

function validateTokenForUser(token){
     const payload = jwt.verify(token,secret);
     return payload;
}
export {createTokenForUser,validateTokenForUser}