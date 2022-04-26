
import React from "react";

import { NavLink } from "react-router-dom";

function Navbar() {
  return <div className='home'>
      {/* <div className="logo"><link className="logo" to="/">
          <img src={logo.jpg} alt="logo"/></link></div> */}
       <nav className="navbar navbar-expand-sm navbar-dark bg-primary">
  <div className ="container-fluid">
      <NavLink className="navbar-brand" to="/">Veg Restaurant</NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          
          <NavLink className="nav-link active" to="/">Menu</NavLink> 
        </li>
        <li className="nav-item">
         
          <NavLink className="nav-link"to="Thali">Thali</NavLink> 
        </li>
        <li  className="nav-item">
          
          <NavLink className="nav-link " to="OrderSummary">OrderSummary</NavLink>
        </li>
        
        
        

      </ul>
      <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-light" type="submit">Search</button>
      </form>
      
    </div>
  </div>
</nav>
  </div>;
}

export default Navbar;