//TODO: authmiddleware
const jwt = require('jsonwebtoken')
const { User } = require('../models/index')
const AuthMiddleware = async (req, res, next) => {
  const authHeaders = req.get("Authorization");
  // console.log("Auth_Header", authHeaders)
  if(!authHeaders){
    req.isAuth = false;
    return next();
  }
  // Extract the token
    //splits token into array because we just want the jwt payload
  let token = authHeaders.split(' ')[1];
  // console.log(token)
  
  //check for token or see if its empty string
  if(!token || token === ''){
    req.isAuth = false;
    return next();
  }
  // decode that token using verify
  let decodedToken;
  try {
    decodedToken = jwt.verify(token, process.env.JWT_SECRET)
  } catch (err){
    req.isAuth = false;
    return next();
  }
  if(!decodedToken){
    req.isAuth = false;
    return next();
  }
  // Find user from database
  let authUser = await User.findById(decodedToken.id);
  // console.log(AUTHENTICATED)
  if(!authUser){
    req.isAuth = false;
    return next();
  }
  req.user = authUser;
  req.isAuth = true;
  return next();
}

module.exports= AuthMiddleware;