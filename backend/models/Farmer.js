const connectToMongo=()=>{mongoose.connect(mongoURI)
    .then( ()=> console.log("Hurray we are connected succcesfully "))
    .catch((err) => console.log(err))};
    module.exports = connectToMongo;
    
    
    const mongoose = require("mongoose");
    const {Schema} = mongoose;
    const farmerSchema =  new Schema({
        name:{
            type:String,
            required:true
        },
        email:{
            type:String,
            required:true,
            
        },
        password:{
            type:String,
            required:true
        },
        age:{
            type:String,
        },
        city:{
            type:String,
        },
        State:{
            type:String,
        },
        zip:{
            type:String,
        },
        phonenumber:{
            type:String,
            required:true
        },
        Date:{
            type:Date,
            default:Date.now
        }
    });
    const farmer=mongoose.model('farmer',farmerSchema); 
    module.exports = farmer; 