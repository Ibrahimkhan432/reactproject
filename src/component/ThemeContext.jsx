import { createContext, useState } from "react"

export const ThemeContext = createContext()

function ThemeProvider({children}){
const [theme,SetTheme]= useState("halka")
const [user,SetUser]= useState({
  name:"ali",
  age:25,
  email:"ali@example.com"
})
const [studentData,setStudentData]=useState({
  name:'umair sadiq',
  batch:18,
  slot:'MWF'
})
const changeTheme = ()=>{
  if(theme==="halka"){
  SetTheme("taiz")
  }
  if(theme==="taiz"){
    SetTheme("halka")
  }
}

  return(
<ThemeContext.Provider value={{theme,changeTheme,user,studentData}}>
{children}
</ThemeContext.Provider>
  )
}
export default ThemeProvider;
