// src/components/NavBar.js
import React from "react";
import { Link } from "react-router-dom";

function NavBar(){
    return (
        <nav className="nav-bar">
          <div className="nav-brand">
            <h3>The Real Property Business</h3>
          </div>
        
          <div className="nav-actions">
            <Link to="/signup">Sign Up</Link>
            <Link to="/login">Log In</Link>
          </div>
        </nav>
    )
}

export default NavBar;
