import React, { useContext } from 'react'
import { ThemeContext } from './ThemeContext';

function Hero2() {
  const {theme,studentData} =useContext(ThemeContext)
  console.log(typeof studentData)
  return (
    <div style={{display:"flex",height:"300px",border:"2px solid black",justifyContent:"space-between",
      backgroundColor:theme==="halka" ? "white" : "black",
    }}>
      hero 2
      {studentData.name}
    <h1>{studentData.name}</h1>  {studentData.nam}
      <h1>{studentData.batch}</h1>
      <h1>{studentData.slot}</h1>
    </div>
  )
}

export default Hero2;