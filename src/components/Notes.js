import React ,{useContext} from 'react'
import noteContext from "../context/notes/noteContext"
import Noteitem from './Noteitem';


 const Notes = () => {
    const context = useContext(noteContext);
    const {notes, setNotes} = context;
    return (
        <div>
         <div className="row my-3">
         <h2>your notes</h2>
         {notes.map((note)=>{
            //return note.title;
            return <Noteitem  key={note._id} note={note}/>
        })}
         </div>
            
        </div>
    )
}
export default Notes