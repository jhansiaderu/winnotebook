const mongoose = require('mongoose');

const mongoURI ="mongodb+srv://jhansi:<Srinivasulu123>@cluster0.dix0x.mongodb.net/winnotebook?retryWrites=true&w=majority"
const connectToMongo = ()=>{
    mongoose.connect(mongoURI, ()=>{
        console.log("Connected to Mongo Successfully");
    })
}

module.exports = connectToMongo;