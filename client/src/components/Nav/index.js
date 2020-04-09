import React from "react";
import {Link} from "react-router-dom"
import "./style.css"

function Nav() {
  return (






    <nav className="navbar navbar-expand-lg myNav">
      <Link className= "navbar-brand" to="/"> singin</Link>

      <Link className= "navbar-brand" to="/home"> Home</Link>
     
      <Link className= "navbar-brand" to="/saved"> Saved</Link>
    
    </nav>
  );
}

export default Nav;
