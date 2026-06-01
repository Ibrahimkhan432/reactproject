import React, { useContext } from 'react'
import { ThemeContext } from '../component/ThemeContext'
import { UserContext } from '../component/UserContext'

function About() {
// theme
const {theme,toggleTheme} = useContext(ThemeContext)
console.log("theme=>",theme,toggleTheme)

// user
const {user,loading,setUser} = useContext(UserContext)
console.log("user in about",user)

// const changeData =()=>{
//   setUser({
//     name:"ali changed",
//     age:30,
//     email:"newali@gmail.com"
//   })
// }

  return (
    <div style={{
background : theme === "halka" ? "white" : "blue",
color: theme === "light" ? "black" : "red",
height : "100vh"

    }}>
      about
      <br />
      <button onClick={toggleTheme}> {theme} Mode</button>
      <div style={{border:"2px solid black",height:"200px"}}>
        <h1>
          div 1
         <h1>hi i am {user.name}</h1>
         <h1>hi my username {user.username}</h1>
         <h1>hi my email is {user.email}</h1>
        </h1>

<button style={{border:"2px solid red"}}
// onClick={changeData}
>change user Data </button>

      </div>
    </div>
  )
}

export default About
