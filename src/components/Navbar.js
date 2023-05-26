import React from "react";
import { Link } from "react-router-dom";
import { useLocation,useNavigate } from 'react-router-dom';

const Navbar = () => {
  let location = useLocation();
  let navigate=useNavigate();

  const handleLogout=()=>{
    localStorage.removeItem('token')
    navigate('/login')
  }
  
  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">vNotebook</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-2 mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className={`nav-link ${location.pathname==='/'?'active':''}`} aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className={`nav-link ${location.pathname==='/about'?'active':''}`} to="https://www.linkedin.com/in/varad-prabhu-622621270/" target="_blank">About</Link>
        </li>
        
      </ul>
      <form className="d-flex w-100" role="search">
        <input className="form-control w-90" type="search" placeholder="Search" aria-label="Search" />
        {/* <button className="btn btn-outline-light mx-2" type="submit">Search</button> */}
        <i class="fa-solid fa-magnifying-glass fa-2x mx-1" style={{color: "#ffffff"}}></i>
      </form>
      
      {!localStorage.getItem('token')?<div className="dropdown mx-2">
  <button className="btn btn-light dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    Account
  </button>
  <ul className="dropdown-menu">
    <li><Link className="dropdown-item" to="/signup">Sign up</Link></li>
    <li><Link className="dropdown-item" to="/login">Log in</Link></li>
  </ul>
</div>:
<div className="col-1 mx-2">
<button className="btn btn-light" onClick={handleLogout}>Log out</button></div>
}
    </div>
  </div>
</nav>
    </>
  );
};

export default Navbar;
