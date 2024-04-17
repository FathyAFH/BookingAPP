import express, { json } from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import authRouter from "./routes/auth.js";
import hotelRouter from "./routes/hotels.js";
import roomRouter from "./routes/rooms.js";
import userRouter from "./routes/users.js";
import cookieParser from "cookie-parser"
import cors from "cors";


const app = express()
dotenv.config()


const connectMongoDB = async ()=>{
    try { 
        await mongoose.connect(process.env.MONGO);
        console.log("Connected to MongoDB")
      } catch (error) {
        console.log(error);
      }
}

mongoose.connection.on("disconnected",()=>{
    console.log("Disconnected from MongoDB")
})

//middlewares
//middlewares are able to reach requests and response before sending anything to the user

app.use(cookieParser())
app.use(cors());

app.use(express.json())

app.use((req,res,next)=>{
  console.log("Hi I am a middleware")
  next()
})

app.use("/api/auth",authRouter)
app.use("/api/hotels",hotelRouter)
app.use("/api/rooms",roomRouter)
app.use("/api/users",userRouter)

app.use((err,req,res,next)=>{
  const errStatus = err.status || 500;
  const errMessage = err.message || "Something went wrong";
  return res.status(errStatus).json({
    success: false,
    status:errStatus,
    message: errMessage,
    stack: err.stack
  })

})

app.listen(8800,()=>{
    console.log("Connected to backend")
    connectMongoDB()
});