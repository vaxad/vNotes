import React, { useContext, useState } from "react";
import noteContext from "../context/notes/noteContext";

const AddNote = (props) => {
  const context = useContext(noteContext);
  const { addNote } = context;
  const [note, setNote]=useState({title:"", description:"", tag:""})
  const handleAdd = async(e) => {
    e.preventDefault();
    await addNote(note.title,note.description,note.tag===""?"General":note.tag);
    props.showAlert("Note Added", "success");
    setNote({title:"", description:"", tag:""});
  };


  const onChange=(e)=>{
        setNote({...note,[e.target.name]: e.target.value})
        
  };
  return (
    <div>
      <div className="container my-3">
      <h2>{props.title}</h2>
        <form>
          <div className="form-group my-3">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              className="form-control my-1"
              id="id_title"
              name="title"
              value={note.title}
              aria-describedby="emailHelp"
              placeholder="Enter title"
              onChange={onChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="description">Description</label>
            <input
              type="text"
              name="description"
              value={note.description}
              className="form-control my-1"
              id="id_description"
              placeholder="Description"
              onChange={onChange}
              required
            />
          </div>
          <div className="form-group my-3">
            <label htmlFor="tag">Tag</label>
            <input
              type="text"
              name="tag"
              value={note.tag}
              className="form-control my-1"
              id="id_tag"
              placeholder="Tag"
              onChange={onChange}
            />
          </div>
          
          <button
            type="submit"
            disabled={note.title===""&&note.description===""}
            className="btn btn-dark my-2"
            onClick={handleAdd}
          >
            {props.button}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddNote;
