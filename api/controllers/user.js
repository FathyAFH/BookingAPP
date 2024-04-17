import User from "../models/User.js";

export const updateUser = async(req,res,next)=>{
    try{
        const updated = await User.findByIdAndUpdate(req.params.id,{$set:req.body},{new:true})
        res.status(200).json(updated)
    }catch(err){
        next(err)
    }
}

export const deleteUser = async(req,res,next)=>{
    try{
        await User.findByIdAndDelete(req.params.id)
        res.status(200).json("User deleted Successfully")
    }catch(err){
        next(err)
    }
}

export const getUser = async(req,res,next)=>{
    try{
        const user = await User.findById(req.params.id)
        res.status(200).json(user)

    }catch(err){
        next(err)
    }
}

export const getUsers = async(req,res,next)=>{
    try{
        const userGet = await User.find()
        res.status(200).json(userGet)
    }catch(err){
        next(err)
    }
}