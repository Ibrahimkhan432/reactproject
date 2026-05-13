import { createContext, useState } from "react"

export const ThemeContext = createContext()

function ThemeProvider({children}){
const [theme,SetTheme]= useState("halka")

const changeTheme = ()=>{
  if(theme==="halka"){
  SetTheme("taiz")
  }
  if(theme==="taiz"){
    SetTheme("halka")
  }
}

  return(
<ThemeContext.Provider value={{theme,changeTheme}}>
{children}
</ThemeContext.Provider>
  )
}
export default ThemeProvider;
