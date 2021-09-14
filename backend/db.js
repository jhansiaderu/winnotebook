const mongoose = require('mongoose');

const mongoURI ="mongodb+srv://jhansi:<Srinivasulu@123>@cluster0.dix0x.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
const connectToMongo = ()=>{
    mongoose.connect(mongoURI, ()=>{
        console.log("Connected to Mongo Successfully");
    })
}

module.exports = connectToMongo;