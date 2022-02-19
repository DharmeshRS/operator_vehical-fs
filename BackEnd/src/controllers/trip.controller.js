const express=require("express");
const Trip=require('../models/trips.models')
const app=express();

const router=express.Router();

router.post("/",
    async (req,res)=>{
        const trip=await Trip.create(req.body)
        console.log(trip)
        res.status(201).json({data:trip})
    }
)

router.get("/",async(req,res)=>{
        try{
            const tripdata=await Trip.find({}).lean().exec();
            console.log(tripdata);
            res.status(201).json(tripdata)
        }catch(err){
            res.status(400).send(err)
            }
})

module.exports=router;