import React from 'react'

function Noteitem(props) {
    const {note}=props;
    return (
        <div className="col-md-3">
            {note.title}
           
            <div class="card" >
           
            <div class="card-body">
            <div className="d-flex align-items-center">
                <h5 class="card-title">{note.title}</h5>
                
                <i className="far fa-trash-alt mx-2"></i>
                 <i className="far fa-edit mx-2"></i>
                 </div>
                 <p class="card-text">{note.description}</p>  
                
            </div>
            </div>
        </div>
    )
}

export default Noteitem
