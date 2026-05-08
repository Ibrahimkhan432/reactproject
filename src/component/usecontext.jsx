import React, { createContext } from 'react'
const ThemeContext = createContext()

function usecontext() {
    const [theme, setTheme] = useState("ligh")
  return (
   <ThemeContext.provider>

   </ThemeContext.provider>
  )
}

export default usecontext
