const express=require("express");
// const mongoose=require('mongoose');
// const bodyParser=require('body-parser')
// const cors=require("cors")
const connect=require('./configs/db')
const operatorController=require("./controllers/operator.controller");
const vehicleController=require("./controllers/vehicle.controller");
const tripController=require("./controllers/trip.controller")
const app=express();
app.use(express.json());
app.use("/operator",operatorController)
app.use("/vehicle",vehicleController)
app.use("/trip",tripController)
const PORT=8000;
const start=async()=>{
    await connect()
    console.log("Connected to database")
    app.listen(PORT,()=>{
    console.log(`Listening On port ${PORT}`)
 })
}

module.exports=start;
