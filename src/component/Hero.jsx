import React, { useContext } from 'react'
import { ThemeContext } from './ThemeContext';

function Hero() {
  const { theme ,user} = useContext(ThemeContext);
  return (
    <div style={{display:"flex",height:"300px",border:"2px solid black",justifyContent:"center",
backgroundColor:theme==="halka" ? "white" : "black",


    }}>

<div style={{backgroundColor:theme==="halka"? "white":"black",color:theme==="halka"? "black":"white",
  border:theme==="halka" ? "2px solid black" : "2px solid white",width:"300px",padding:"20px",display:"flex",flexDirection:"column",justifyContent:"space-between"
}}>
  <h1>{user.name} is Hero</h1>
  <h1>{user.name} {user.age} years old</h1>
  <h1>{user.email} is not {user.name} valid email </h1>
  <h5>
    Noteworthy technology acquisitions 2021
  </h5>

  <p>
    Here are the biggest technology acquisitions of 2025 so far, in reverse
    chronological order.
  </p>

  <a href="#">
    Read more

    <svg
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M19 12H5m14 0-4 4m4-4-4-4"
      />
    </svg>
  </a>
</div>
    </div>
  )
}

export default Hero;