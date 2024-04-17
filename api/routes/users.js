import express from "express";
import { deleteUser, getUser, getUsers, updateUser } from "../controllers/user.js";
import {verifyToken, verifyUser, verifyAdmin} from "../utils/verifyTokens.js";

const router = express.Router()

// router.get("/checkauth", verifyToken,(req,res,next)=>{
//     res.send("Hello User, you are logged in")
// });

// router.get("/checkuser/:id",verifyUser,(req,res,next)=>{
//     res.send("Hello user, you can delete your account")
// })


router.put("/:id", updateUser);

//delete

router.delete("/:id", deleteUser);

//get

router.get("/:id",getUser);



//getALL

router.get("/",getUsers);


export default router;