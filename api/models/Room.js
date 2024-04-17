import mongoose from "mongoose";

const roomSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    maxPeople:{
        type:Number,
        required:true
    },
    desc:{
        type:String,
        required:true
    },
    roomNumbers:[{
        //roomNumbers is the number on each room. All rooms can be of the same properties but each room has a different number
        number:Number,
        unavailableDates: [{
            type: [Date]
        }]
        //when someone books a specific room, no one can reserve it again
    }]
    
})

export default mongoose.model("Room",roomSchema);