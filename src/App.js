
import './App.css';
import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";

import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import NoteState from './context/notes/noteState';
import Alert from './components/Alert';
import Signup from './components/Signup';
import Login from './components/Login';

function App() {
  const [alert,setAlert]=useState(null);
  const showAlert=(msg,type)=>{
    setAlert({message:msg,type:type})
    setTimeout(()=>{
      setAlert(null);
    },3000);
  }
  return (
    <>
    <NoteState>
    <Router>
    <Navbar/>
    <Alert alert={alert}/>
    <div className="container mt-3">
    <Routes>
         <Route exact path="/" element={<Home showAlert={showAlert}/>} />
         <Route exact path="/about" element={<About />} />
         <Route exact path="/signup" element={<Signup showAlert={showAlert}/>} />
         <Route exact path="/login" element={<Login showAlert={showAlert}/>} />
  </Routes>
  </div>
  </Router>
  </NoteState>

    </>
  );
}

export default App;
