const mongoose = require("mongoose");
// const order =require("./models/order");
const learner = require("./models/Learner");
const volunteer = require("./models/Volunteer");

const mongoURI = "mongodb://127.0.0.1:27017/freshFarmsDatabase";

const connectToMongo=async()=>{ 
    await mongoose.connect(mongoURI)
.then( ()=> console.log("Hurray we are connected succcesfully "))
.catch((err) => console.log(err))

};

    
module.exports = connectToMongo;


