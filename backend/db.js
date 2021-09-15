const mongoose = require('mongoose');

const mongoURI ="mongodb+srv://jhansi:<password>@cluster0.dix0x.mongodb.net/winnotebook?retryWrites=true&w=majority"
const connectToMongo = ()=>{
    mongoose.connect(mongoURI, ()=>{
        console.log("Connected to Mongo Successfully");
    })
}

module.exports = connectToMongo;
