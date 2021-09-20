const connectToMongo = require('./db.js');
const express = require('express')
var cors = require('cors') 

//const mongoose= require('mongoose');
//const User = require('./models/User')

connectToMongo();
const app = express()
const port = 5000
app.use(express.json())
/*
app.get('/', (req, res) => {
  res.send('Hello Jhansi!')

  
})

app.post('/createUser', (req, res)=>{
  console.log(req.body) ;
  const user = User(req.body);
  user.save()
  res.send(req.body);
})
*/


app.use(cors())
app.use(express.json())




// Available Routes
app.use('/api/auth', require('./routes/auth'))
app.use('/api/notes', require('./routes/notes'))

app.listen(port, () => {
  console.log(`Winnotebook backend listening at http://localhost:${port}`)
})