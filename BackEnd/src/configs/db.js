const mongoose=require('mongoose')

const connect=()=>{
    return mongoose.connect("mongodb://localhost:27017/VehicleDatabase")
    // ,{
    //     useNewUrlParser:true,
    //     useUnifiedTopology:true,
    //     useCreateIndex:true,
    //     useFindAndModify:true
    // });;

};


module.exports=connect;