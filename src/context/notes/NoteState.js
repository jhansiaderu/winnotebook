import NoteContext from "./noteContext";
import { useState } from "react";

const NoteState = (props)=>{
   
   const notesInitial=[
       {
        name:  "jha",
        email:"jha343@gmail.com",
        password:"$2a$10$XZdFjgBMT8aEl5u1d0lG2uE0AQi9p21uoKt0ToZpOSqxLgW/zFB/i",
        title:"my title",
        date : "2021-09-16T09:57:41.851+00:00",
        __v:0
       }
   ]
   const [notes, setNotes] =  useState(notesInitial)
    return (
        <NoteContext.Provider value={{notes , setNotes}}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;