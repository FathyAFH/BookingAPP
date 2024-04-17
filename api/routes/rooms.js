import express from "express";
import { verifyAdmin } from "../utils/verifyTokens.js";
import { createRoom, updateRoom, deleteRoom, getRoom, getAllRooms } from "../controllers/room.js";

const router = express.Router()

//create
router.post("/:hotelID", verifyAdmin,createRoom);
//update

router.put("/:id",verifyAdmin, updateRoom);
router.put("availability/:id",updateRoom);

//delete

router.delete("/:id/:hotelID",verifyAdmin, deleteRoom);

//get

router.get("/:id",getRoom);

//getALL

router.get("/",getAllRooms);

export default router;