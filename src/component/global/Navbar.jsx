import React, { useContext } from "react";
import { ThemeContext } from "../ThemeContext";

function Navbar() {
  const {theme,changeTheme,studentData }= useContext(ThemeContext)
  const navStyle = {
    border: "2px solid black",
    justifyContent:"space-between",
    display:"flex"
  ,backgroundColor:theme==="halka" ? "white" : "black",
    color:theme==="halka" ? "black" : "white",
  };

  console.log("chth",changeTheme)
  return (
    <div style={navStyle}>
      <div>
        <h1>App title</h1>
      </div>
      <div>
        <div>welcome {studentData.name}</div>
        <div>
        <button
        onClick={changeTheme}
        style={{border:"2px solid black"}}>🔆 {theme} mode</button>
      </div>
      </div>
    </div>
  );
}

export default Navbar;
