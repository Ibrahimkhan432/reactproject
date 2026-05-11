import React, { createContext, useState } from "react";

export const ThemeContext = createContext();

function Themeprovider({children}) {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    }
    if (theme === "dark") {
      setTheme("light");
    }
  };

  return <ThemeContext.Provider value={{ theme,toggleTheme }}>

    {children}
  </ThemeContext.Provider>;
}

export default Themeprovider;
