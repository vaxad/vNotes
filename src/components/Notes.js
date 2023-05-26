import React, { useContext, useEffect, useRef, useState } from 'react';
import noteContext from '../context/notes/noteContext';
import NoteItem from './NoteItem';
import { useNavigate } from "react-router-dom";

const Notes = (props) => {   
  let navigate=useNavigate();
  const context=useContext(noteContext);
  const {notes,getNotes,editNote}=context;
  useEffect(()=>{
    if(localStorage.getItem('token')){
    getNotes();
    }else{
      navigate('/login');
    }
  },[]);

  const ref =useRef(null)
  const [note, setNote]=useState({id:"",title:"", description:"", tag:"General"})

  const updateNote=(currentNote)=>{
    ref.current.click(); 
    setNote(currentNote);
  }
  const handleEdit = async(e) => {
    e.preventDefault();
    await editNote(note._id,note.title,note.description,note.tag);
    props.showAlert("Note updated","warning");
    ref.current.click();
  };


  const onChange=(e)=>{
        setNote({...note,[e.target.name]: e.target.value})
  };

  return (
    <>
    <button ref={ref} type="button" className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#exampleModal">
  Launch demo modal
</button>
<div className="modal fade in" tabIndex="-1" id="exampleModal">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title">Edit Note</h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
      <div>
      <div className="container my-3">
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
              className="form-control my-1"
              id="description"
              value={note.description}
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
            UPDATE
          </button>
        </form>
      </div>
    </div>
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary d-none" data-bs-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>
    
    <div className="row my-3">
        <h2>Your notes</h2>
        <div className="container mx-2">
        {notes.length===0&&"No notes to display"}
        </div>
        {notes.map((note)=>{
           return <NoteItem key={note._id} updateNote={updateNote} note={note} showAlert={props.showAlert}/>
        })}
        </div>
    </>
  )
}

export default Notes