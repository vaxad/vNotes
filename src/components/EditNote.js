import React, { useContext, useState } from "react";
import noteContext from "../context/notes/noteContext";

const EditNote = (props) => {
  const context = useContext(noteContext);
  const { editNote } = context;
  const [note, setNote]=useState({title:"", description:"", tag:"General"})
  const handleEdit = (e) => {
    setNote(props.note);
    e.preventDefault();
    editNote(note.title,note.description,note.tag);
  };

  const onChange=(e)=>{
    
        setNote({...note,[e.target.name]: e.target.value})
  };
  return (
    <>
        
      
      <div>
      <div className="container my-3">
      <h2>{props.title}</h2>
        <form>
          <div className="form-group my-3">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              className="form-control  my-1"
              id="title"
              name="title"
              value={note.title}
              aria-describedby="emailHelp"
              placeholder="title"
              onChange={onChange}
              required="true"
            />
          </div>
          <div className="form-group">
            <label htmlFor="description">Description</label>
            <input
              type="text"
              name="description"
              className="form-control my-1"
              id="description"
              placeholder="Description"
              onChange={onChange}
            />
          </div>
          <div className="form-group my-3">
            <label htmlFor="tag">Tag</label>
            <input
              type="text"
              name="tag"
              className="form-control my-1"
              id="tag"
              placeholder="Tag"
              onChange={onChange}
            />
          </div>
          
          <button
            type="submit"
            className="btn btn-dark my-2"
            onClick={handleEdit}
          >
            {props.button}
          </button>
        </form>
      </div>
    </div>
    
    </>
    
  );
};

export default EditNote;
