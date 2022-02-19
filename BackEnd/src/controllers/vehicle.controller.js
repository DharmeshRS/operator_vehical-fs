const express=require("express");
const Vehicle=require('../models/vehicles.model')
const app=express();

const router=express.Router();

router.post("/",
    async (req,res)=>{
        const vehicle=await Vehicle.create(req.body)
        console.log(vehicle)
        res.status(201).json({data:vehicle})
    }
)

router.get("/",async(req,res)=>{ 
        try{
            const vehicledata=await Vehicle.find({}).lean().exec();
            console.log(vehicledata);
            res.status(201).json(vehicledata)
        }catch(err){
            res.status(400).send(err)
            }
    
})

module.exports=router;