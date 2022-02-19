const mongoose=require('mongoose')

const operatorSchema=mongoose.Schema({
    username:{
        type:String
    },
    password:{
        type:String
    }
    },
    {
        versionKey:false,
        timestamps:true
    })

module.exports=mongoose.model("operator",operatorSchema)