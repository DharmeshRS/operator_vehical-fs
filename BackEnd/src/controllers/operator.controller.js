const express=require("express");
const Operator=require('../models/operator.model')
// const app=express();

const router=express.Router();

router.post("/",
    async (req,res)=>{
        const operator=await Operator.create(req.body)
        console.log(operator)
      
    }
)

router.get("/",async(req,res)=>{
        try{
            const operatordata=await Operator.find({}).lean().exec();
            console.log(operatordata);
            res.status(201).json(operatordata)
        }catch(err){
            res.status(400).send(err)
            }
})

module.exports=router;