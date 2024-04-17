import express from "express";
import Hotel from "../models/Hotel.js";
import { errorMessage } from "../utils/error.js";
import {countByType,countByCity, createHotel, updateHotel, deleteHotel, getHotel ,getAllHotels} from "../controllers/hotel.js";
import { verifyAdmin } from "../utils/verifyTokens.js";


const router = express.Router()

//create
router.post("/", verifyAdmin,createHotel);
//update

router.put("/:id",verifyAdmin, updateHotel);

//delete

router.delete("/:id",verifyAdmin, deleteHotel);

//get

router.get("/find/:id",getHotel);

//getALL

router.get("/",getAllHotels);
router.get("/countByCity",countByCity);
router.get("/countByType",countByType);
router.get("/room/:id",);

export default router;