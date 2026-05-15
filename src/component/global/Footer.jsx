import React, { useContext } from 'react'
import { ThemeContext } from '../ThemeContext'

function Footer() {
  const {theme} =useContext(ThemeContext)

  return (
    <div style={{width:"100%",height:"50px",backgroundColor:theme==="halka" ? "white" : "black"}}>
      Footer
    </div>
  )
}

export default Footer
