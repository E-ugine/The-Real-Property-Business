import React from "react";

function NavBar(){
    return (
        <nav className="nav-bar">
        <div className="nav-brand">
          <h3>The Real Property Business</h3>
        </div>
      
        <div className="nav-actions">
          <a href="#">Sign Up</a>
          <a href="#">Log In</a>
        </div>
      </nav>
      
    )
}
export default NavBar;