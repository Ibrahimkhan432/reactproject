import React, { useContext } from 'react'
import { ThemeContext } from '../component/ThemeContext'

function Contact() {

const {theme,toggleTheme} = useContext(ThemeContext)
console.log("theme=>",theme,toggleTheme)
  return (
    <div style={{
background : theme === "dark" ? "black" : "white",
color: theme === "light" ? "black" : "white",
height : "100vh"

    }}>
      contact
      <br />
      <button onClick={toggleTheme}> {theme} Mode</button>
    </div>
  )
}

export default Contact;
