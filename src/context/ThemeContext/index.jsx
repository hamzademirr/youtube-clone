import { createContext, useContext, useState } from "react";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(true);

  const themeChancge = () => {
    setTheme(!theme);
  }

  const values = {
    theme,
    themeChancge
  }

  return <ThemeContext.Provider value={values}>{children}</ThemeContext.Provider>
}

export const useTheme = () => useContext(ThemeContext);
