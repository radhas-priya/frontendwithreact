const connectToMongo=()=>{mongoose.connect(mongoURI)
.then( ()=> console.log("Hurray we are connected succcesfully "))
.catch((err) => console.log(err))};
module.exports = connectToMongo;


const mongoose = require("mongoose");
const {Schema} = mongoose;
const learnerSchema =  new Schema({
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
    },
    Date:{
        type:Date,
        default:Date.now
    }
});
const learner=mongoose.model('learner',learnerSchema); 
module.exports = learner; 