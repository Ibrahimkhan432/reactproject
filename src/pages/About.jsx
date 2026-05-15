import React, { useContext } from 'react'
import { ThemeContext } from '../component/ThemeContext'

function About() {

const {theme,toggleTheme} = useContext(ThemeContext)
console.log("theme=>",theme,toggleTheme)
  return (
    <div style={{
background : theme === "halka" ? "white" : "blue",
color: theme === "light" ? "black" : "white",
height : "100vh"

    }}>
      about
      <br />
      <button onClick={toggleTheme}> {theme} Mode</button>
    </div>
  )
}

export default About
