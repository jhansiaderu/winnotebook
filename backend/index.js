const connectToMongo = require('./db');
const express = require('express')
//const User = require('./models/User')

connectToMongo();
const app = express()
const port = 3000
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






// Available Routes
app.use('/api/auth', require('./routes/auth'))
app.use('/api/notes', require('./routes/notes'))

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})