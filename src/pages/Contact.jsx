import React, { useContext } from 'react'
import { ThemeContext } from '../component/ThemeContext'

function Contact() {

const {theme,toggleTheme} = useContext(ThemeContext)
console.log("theme=>",theme,toggleTheme)
  return (
    <div
    style={{backgroundColor:theme==="halka"?"white":"pink",
      height:"300px",border:"2px solid black",display:"flex",justifyContent:"center",alignItems:"center",
    }} 
>
      contact
      <br />
      <button onClick={toggleTheme}> {theme} Mode</button>
    </div>
  )
}

export default Contact;
