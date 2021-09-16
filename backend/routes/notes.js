const express = require('express');
const router = express.Router();
var fetchUser = require('../middleware/fetchUser');
const { body, validationResult } = require('express-validator');


// ROUTE 1: Get All the Notes using: GET "/api/auth/getuser"... Login required
router.get('/fetchallnotes',fetchUser,async (req, res)=>{
    const notes = awaitNotes.find({user:req.user.id});
    res,json(notes)
    //res.json([notes])
} )
// ROUTE 2: add a new Note using: post "/api/auth/addnote"... Login required
router.post('/addnote', fetchUser, [
    body('title', 'Enter a valid title').isLength({ min: 3 }),
    body('description', 'Description must be atleast 5 characters').isLength({ min: 5 }),], async (req, res) => {
        try {

            const { title, description, tag } = req.body;

            // If there are errors, return Bad request and the errors......
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).json({ errors: errors.array() });
            }
            const note = new Note({
                title, description, tag, user: req.user.id
            })
            const savedNote = await note.save()

            res.json(savedNote)

        } catch (error) {
            console.error(error.message);
            res.status(500).send("Internal Server Error");
        }
    })
module.exports = router