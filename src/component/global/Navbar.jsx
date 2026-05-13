import React, { useContext } from "react";
import { ThemeContext } from "../ThemeContext";

function Navbar() {
  const navStyle = {
    border: "2px solid black",
    justifyContent:"space-between",
    display:"flex"
  };

  const {changeTheme }= useContext(ThemeContext)
  console.log("chth",changeTheme)
  return (
    <div style={navStyle}>
      <div>
        <h1>App title</h1>
      </div>
      <div>
        <button
        onClick={changeTheme}
        style={{border:"2px solid black"}}>Theme</button>
      </div>
    </div>
  );
}

export default Navbar;
