const express = require('express');
const router = express.Router();
const User = require('../models/User');
const { body, validationResult } = require('express-validator');

router.post('/createUser',[ body('name', 'Enter a valid name').isLength({ min: 3 }),
body('email', 'Enter a valid email').isEmail(),
body('password', 'Password must be atleast 5 characters').isLength({ min: 5 }),
] ,async (req, res)=>{
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try{
  let user = await User.findOne({ email: req.body.email });
  if (user) {
    return res.status(400).json({ error: "Sorry a user with this email already exists" })
  }
  
  user = await User.create({
    name: req.body.name,
    password: req.body.password,
    email: req.body.email,
  })
  //.then(user => res.json(user))
  //.catch(err=> {console.log(err)
  //res.json({error: 'Please enter a unique value for email', message: err.message})})
   res.json(user)
}
catch (error) {
  console.error(error.message);
  res.status(500).send("Some Error occured");
}

  })



module.exports = router