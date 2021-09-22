import NoteContext from "./noteContext";
import { useState } from "react";

const NoteState = (props)=>{
    const host = "http://localhost:5000"
  const notesInitial = []
  

   /*
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
        _id:"123653873672275",
        email:"jha343@gmail.com",
        password:"$2a$10$XZdFjgBMT8aEl5u1d0lG2uE0AQi9p21uoKt0ToZpOSqxLgW/zFB/i",
        title:"title",
        description:" make it fast",
        date : "2021-09-16T09:57:41.851+00:00",
        __v:0
       }
       
   ]*/
   const [notes, setNotes] =  useState(notesInitial)

   const getNotes = async () => {
    // API Call 
    const response = await fetch(`${host}/api/notes/fetchallnotes`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        "auth-token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjE0ODRjN2E0ZTYyNTlhMmE2ZmMxZmJjIn0sImlhdCI6MTYzMjEyODM4NX0.9HqMCkf_8x7vMT0KK0VpED1J7U6Y1B5Fr1lERHGuREk"
      }
    });
    const json = await response.json()
    console.log(json)
    setNotes(json)
  }

   //Add a note

   const addNote = async (title, description, tag)=>{
    // TODO: API Call
    const response = await fetch(`${host}/api/notes/addnote`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjEzMWRjNWUzZTQwMzdjZDQ3MzRhMDY2In0sImlhdCI6MTYzMDY2OTU5Nn0.hJS0hx6I7ROugkqjL2CjrJuefA3pJi-IU5yGUbRHI4Q"
        },
        body: JSON.stringify({title, description, tag})
    });
    const note = await response.json();
    setNotes(notes.concat(note)) 
    //console.log(json)
     
   // console.log("Adding a new note")
    //const note = json
    
  }

   //delete a note

   /*const deleteNote =(id) =>{
   
        // TODO: API Call
        console.log("Deleting the note with id" + id);
        const newNotes = notes.filter((note)=>{return note._id!==id})
        setNotes(newNotes)
      
       
   }*/


   //edit a note

   const editNote = async (id, title, description, tag) => {
    // API Call 
    const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
      method: 'PUT',
     
      headers: {
        'Content-Type': 'application/json',
        "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjEzMWRjNWUzZTQwMzdjZDQ3MzRhMDY2In0sImlhdCI6MTYzMDY2OTU5Nn0.hJS0hx6I7ROugkqjL2CjrJuefA3pJi-IU5yGUbRHI4Q"
      },
      body: JSON.stringify({title, description, tag})
    });
    const json = response.json();
    console.log(json)

    let newNotes = JSON.parse(JSON.stringify(notes))

    // Logic to edit in client
    for (let index = 0; index < newNotes.length; index++) {
      const element = newNotes[index];
      if (element._id === id) {
        newNotes.title = title;
        newNotes.description = description;
        newNotes.tag = tag;
        break;
      }

    }
    setNotes(newNotes);
  }
    //delete a note
    const deleteNote = async (id) => {
        // API Call
        const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json',
            "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjE0ODRjN2E0ZTYyNTlhMmE2ZmMxZmJjIn0sImlhdCI6MTYzMjEzMTI3OH0.NtdXN4rDJlkY0OHxV_M1XgUrxZZASyD-XE_NLJFgwgI"
          }
        });
        const json = response.json();
        console.log(json)
    
        console.log("Deleting the note with id" + id);
        const newNotes = notes.filter((note) => { return note._id !== id })
        setNotes(newNotes)
      }
  

       
   
    return (
        <NoteContext.Provider value={{notes , addNote ,deleteNote, editNote,getNotes}}>
            {props.children}
        </NoteContext.Provider>
    )
  }

export default NoteState;