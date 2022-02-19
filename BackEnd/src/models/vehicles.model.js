const mongoose=require('mongoose')
const Trip=require('./trips.models')
const vehicleSchema=new mongoose.Schema({
    vehicle_type:{
        type:String},
    reg_no:{
        type:String
    },
    capacity:{
        type:String
    },
    trip:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:Trip,
    }]
    },
    {
        versionKey:false,
        timestamps:true
    })

module.exports=mongoose.model("vehicle",vehicleSchema)