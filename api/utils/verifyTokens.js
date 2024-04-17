import { errorMessage } from "./error.js"; 
import jwt from "jsonwebtoken";

const verifyToken = (req,res,next)=>{
    const token = req.cookies.AccessToken;
    if(!token) return next(errorMessage(401,"You are not authenticated"))

    jwt.verify(token, process.env.SECRET_KEY, (err,info)=>{
        if(err) return next(errorMessage(403,"Token is not valid!"))

        req.user = info;
        next();
    })
}

const verifyUser = (req,res,next)=>{
    verifyToken(req,res,next, ()=>{
    if(req.user.id == req.params.id || req.user.isAdmin){
        next()
    }else{
        return next(errorMessage(403,"You are not authorized!"))
    }
    }
    
    )
};

const verifyAdmin = (req,res,next)=>{
    verifyToken(req,res,next, ()=>{
        if(req.user.isAdmin){
            next();
        }else{
            return next(errorMessage(403,"You are not authorized!"));
        }
    })
}

export {verifyToken,verifyUser,verifyAdmin};
