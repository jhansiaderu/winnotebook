const mongoose = require('mongoose');

const mongoURI ='mongodb+srv://jhansi:noteapp@cluster0.om5en.mongodb.net/notebook?retryWrites=true&w=majority'
const connectToMongo = ()=>{
    mongoose.connect(mongoURI, ()=>{
        console.log("Connected to Mongo Successfully");
    })
}

module.exports = connectToMongo;