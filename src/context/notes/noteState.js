
import { useState } from "react";
import noteContext from "./noteContext";

const NoteState = (props) => {
  const url = "https://vnotebook.onrender.com";
  const notesInitial =[];

  const [notes, setNotes] = useState(notesInitial);

  const getNotes =async () => {
    const response = await fetch(`${url}/api/notes/fetchnotes`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'auth-token': localStorage.getItem('token')
      }
    });
    const json=await response.json();
    
    setNotes(json);
  }


  const addNote =async (title, description, tag) => {
    const response = await fetch(`${url}/api/notes/addnote`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'auth-token': localStorage.getItem('token')
      },
      body: JSON.stringify({title,description,tag})
    });

    const note = await response.json();
    setNotes(notes.concat(note));
    
  }

  const deleteNote = async (id) => {
    const response = await fetch(`${url}/api/notes/deletenote/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'auth-token': localStorage.getItem('token')
      }
    });
    //const json = await response.json();
    console.log(response);

    const newNotes = notes.filter((note) => { return note._id !== id });
    setNotes(newNotes);
  }

  const editNote = async (id, title, description, tag) => {
    const response = await fetch(`${url}/api/notes/updatenote/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'auth-token': localStorage.getItem('token')
      },
      body: JSON.stringify({title,description,tag})
    });
    const jsonData = await response.json();
    console.log(jsonData)

    let newNotes=JSON.parse(JSON.stringify(notes));
    for (let index = 0; index < newNotes.length; index++) {
      //const element = notes[index];
      if (newNotes[index]._id === id) {
        newNotes[index].title = title;
        newNotes[index].description = description;
        newNotes[index].tag = tag;
        break;
      }
    }
    setNotes(newNotes);
  }

  return (
    <noteContext.Provider value={{ notes, addNote, deleteNote, editNote, getNotes }}>
      {props.children}
    </noteContext.Provider>
  )
}

export default NoteState;