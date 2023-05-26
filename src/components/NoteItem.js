import React, {useContext} from "react";
import noteContext from "../context/notes/noteContext";

const NoteItem = (props) => {
  const { note,updateNote } = props;
  
  const context = useContext(noteContext);
  const { deleteNote } = context;

  const handleDelete=()=>{
    deleteNote(note._id);
    
    props.showAlert("Note deleted","primary");
  }
  return (
      <div className="col-md-3">
      <div className="card text-dark bg-light mb-3" >
      <div className="card-header">
        <h5 className="card-title float-start my-2">{note.title}</h5>
        <span className="badge rounded-pill text-bg-dark float-end my-2">{note.tag}</span>
      </div>
        <div className="card-body">
          
          <p className="card-text">
            {note.description}
          </p>    
          <div style={{float:"right"}}>
          <i className="fa fa-trash-o fa-lg mx-2" onClick={handleDelete}></i>       
          <i className="fa-regular fa-pen-to-square mx-2" onClick={()=>{updateNote(note)}}></i>
          </div> 
        </div>
      </div>
      </div>
  );
};

export default NoteItem;
