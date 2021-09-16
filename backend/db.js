const mongoose = require('mongoose');


 
const mongoURI ='mongodb://localhost:27017/notebook_2?readPreference=primary&appname=MongoDB%20Compass&ssl=false'
const connectToMongo =  ()=>{
    mongoose.connect(mongoURI,()=>{
        console.log("Connected to Mongo Successfully");
    })
}
//mongoose.connect(uri, options);

module.exports = connectToMongo;
//connectTimeoutMS=20000&bufferCommands=false