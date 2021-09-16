const mongoose = require('mongoose');

<<<<<<< HEAD
const mongoURI ='mongodb+srv://jhansi:noteapp@cluster0.om5en.mongodb.net/notebook?retryWrites=true&w=majority'
=======
const mongoURI ="mongodb+srv://jhansi:<password>@cluster0.dix0x.mongodb.net/winnotebook?retryWrites=true&w=majority"
>>>>>>> b5442800910c04eca2908d8e7ce50462642fd0d5
const connectToMongo = ()=>{
    mongoose.connect(mongoURI, ()=>{
        console.log("Connected to Mongo Successfully");
    })
}

module.exports = connectToMongo;
