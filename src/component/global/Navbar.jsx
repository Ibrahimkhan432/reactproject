import React from "react";
import { Link, NavLink } from "react-router-dom";

function Navbar() {

const navstyle=({isActive})=>{
    return {
        color:isActive ? "white":"red",
        backgroundColor: isActive ? "white" : "black",
        border:isActive ? "2px solid white" : "none" 
    }
}



  return (
    <div
      style={{
        width: "100%",
        backgroundColor: "black",
        color: "white",
        height: "50px",
      }}
    >
      <nav>
        <ul>
         <NavLink style={navstyle} to={'/'}>
         <li>Home</li>
         </NavLink> 
         <NavLink style={navstyle} to={'/about'}>
         <li>ABOUT</li>
         </NavLink> 
         <NavLink style={navstyle} to={'/project'}>
         <li>PROJECT</li>
         </NavLink> 
          <li>PROJECT</li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
