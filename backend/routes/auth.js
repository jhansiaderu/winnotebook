const express = require('express');

const router = express.Router();
const User = require('../models/User');
const { body, validationResult } = require('express-validator');
const bcrypt = require ('bcryptjs');
var jwt = require('jsonwebtoken');
var fetchUser = require('../middleware/fetchUser');

const JWT_SECRET = "this is about j$wt";
//route:1
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
  const salt = await bcrypt.genSalt(10);
  const secPass = await bcrypt.hash( req.body.password , salt)
  user = await User.create({
    name: req.body.name,
    password: secPass,
    email: req.body.email,
  })
  //.then(user => res.json(user))
  //.catch(err=> {console.log(err)
  //res.json({error: 'Please enter a unique value for email', message: err.message})})
  const data = {
    user:{
      id:user.id
    }
  }
  const authtoken= jwt.sign(data, JWT_SECRET);
  //console.log(jwtData);
   //res.json(user)
   res.json({authtoken})
}
catch (error) {
  console.error(error.message);
  res.status(500).send("Some Error occured");
}

  })
  // route:2 authentication
  router.post('/login', [ 
    body('email', 'Enter a valid email').isEmail(), 
    body('password', 'Password cannot be blank').exists(), 
  ], async (req, res) => {
  
    // If there are errors, return Bad request and errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
  
    const {email, password} = req.body;
    try {
      let user = await User.findOne({email});
      if(!user){
        return res.status(400).json({error: "Please try to login with correct credentials"});
      }
  
      const passwordCompare = await bcrypt.compare(password, user.password);
      if(!passwordCompare){
        return res.status(400).json({error: "Please try to login with correct credentials"});
      }
  
      const data = {
        user:{
          id: user.id
        }
      }
      const authtoken = jwt.sign(data, JWT_SECRET);
      res.json({authtoken})
  
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Internal Server Error");
    }
  
  
  });
  //route :3 get loggedin user details using :post "/api/auth/getUser".login required
  router.post('/getUser',fetchUser, async (req, res) => {

  try{
    
    let userId =req.user.id;
    const user = await User.findById(userId).select("-password")
    res.send(user)
  }
catch(error){
  console.error(error.message);
  res.status(500).send("Internal Server Error");
}
  })

module.exports = router