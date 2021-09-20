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

   const addNote = (title, description, tag)=>{
    // TODO: API Call
    const response =  fetch(`${host}/api/notes/addNotes`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjEzMWRjNWUzZTQwMzdjZDQ3MzRhMDY2In0sImlhdCI6MTYzMDY2OTU5Nn0.hJS0hx6I7ROugkqjL2CjrJuefA3pJi-IU5yGUbRHI4Q"
        },
        body: JSON.stringify({title, description, tag})
    });
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

   const deleteNote =(id) =>{
   
        // TODO: API Call
        console.log("Deleting the note with id" + id);
        const newNotes = notes.filter((note)=>{return note._id!==id})
        setNotes(newNotes)
      
       
   }


   //edit a note

   const editNote = async (id, title, description, tag) => {
    // API Call 
    const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjEzMWRjNWUzZTQwMzdjZDQ3MzRhMDY2In0sImlhdCI6MTYzMDY2OTU5Nn0.hJS0hx6I7ROugkqjL2CjrJuefA3pJi-IU5yGUbRHI4Q"
      },
      body: JSON.stringify({title, description, tag})
    });
    const json = response.json();

    // Logic to edit in client
    for (let index = 0; index < notes.length; index++) {
      const element = notes[index];
      if (element._id === id) {
        element.title = title;
        element.description = description;
        element.tag = tag;
      }

    }
  

       
   }
    return (
        <NoteContext.Provider value={{notes , addNote ,deleteNote, editNote,getNotes}}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;