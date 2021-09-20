import NoteContext from "./noteContext";
import { useState } from "react";

const NoteState = (props)=>{
   
   const notesInitial=[
       {
        name:  "jha",
        email:"jha343@gmail.com",
        _id:"12365387367221",
        password:"$2a$10$XZdFjgBMT8aEl5u1d0lG2uE0AQi9p21uoKt0ToZpOSqxLgW/zFB/i",
        title:"my title",
        description:"please make it fast",
        date : "2021-09-16T09:57:41.851+00:00",
        __v:0
       },
       {
        name:  "jha",
        _id:"12365387367224",
        email:"jha343@gmail.com",
        password:"$2a$10$XZdFjgBMT8aEl5u1d0lG2uE0AQi9p21uoKt0ToZpOSqxLgW/zFB/i",
        title:"my title",
        description:"please make it fast",
        date : "2021-09-16T09:57:41.851+00:00",
        __v:0
       },
       {
        name:  "jha",
        _id:"12365387367223",
        email:"jha343@gmail.com",
        password:"$2a$10$XZdFjgBMT8aEl5u1d0lG2uE0AQi9p21uoKt0ToZpOSqxLgW/zFB/i",
        title:"my title",
        description:"please make it fast",
        date : "2021-09-16T09:57:41.851+00:00",
        __v:0
       },
       {
        name:  "jha",
        _id:"12365387367229",
        email:"jha343@gmail.com",
        password:"$2a$10$XZdFjgBMT8aEl5u1d0lG2uE0AQi9p21uoKt0ToZpOSqxLgW/zFB/i",
        title:"my title",
        description:"please make it fast",
        date : "2021-09-16T09:57:41.851+00:00",
        __v:0
       },
       {
        name:  "jha",
        _id:"12365387367225",
        email:"jha343@gmail.com",
        password:"$2a$10$XZdFjgBMT8aEl5u1d0lG2uE0AQi9p21uoKt0ToZpOSqxLgW/zFB/i",
        title:"my title",
        description:"please make it fast",
        date : "2021-09-16T09:57:41.851+00:00",
        __v:0
       },
       {
        name:  "jha",
        _id:"12365387367225",
        email:"jha343@gmail.com",
        password:"$2a$10$XZdFjgBMT8aEl5u1d0lG2uE0AQi9p21uoKt0ToZpOSqxLgW/zFB/i",
        title:"title",
        description:" make it fast",
        date : "2021-09-16T09:57:41.851+00:00",
        __v:0
       }
       
   ]
   const [notes, setNotes] =  useState(notesInitial)

   //Add a note

   const addNote = (title, description, tag)=>{
    // TODO: API Call
    console.log("Adding a new note")
    const note = {
      "_id": "61322f119553781a8ca8d0e08",
      "user": "6131dc5e3e4037cd4734a0664",
      "title": title,
      "description": description,
      "tag": tag,
      "date": "2021-09-03T14:20:09.668Z",
      "__v": 0
    };
    setNotes(notes.concat(note)) 
  }

   //delete a note

   const deleteNote =() =>{
       
   }


   //edit a note

   const editNote =() =>{
       
   }
    return (
        <NoteContext.Provider value={{notes , addNote ,deleteNote, editNote}}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;