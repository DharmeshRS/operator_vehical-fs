const mongoose=require('mongoose')
// const Vehicle=require("./vehicles.model")
const tripsSchema=new mongoose.Schema({
    from:{
        type:String},
    to:{
        type:String
    },
    capacity:{
        type:String
    },
    vehicle:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"vehicle"
    }
    },
    {
        versionKey:false,
        timestamps:true
    })

module.exports=mongoose.model("trip",tripsSchema) 