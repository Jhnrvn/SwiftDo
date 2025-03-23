/* eslint-disable react-refresh/only-export-components */
import { useState, useEffect, createContext, useContext } from "react";

const ThemeContext = createContext();

// i: custom hook to use theme
export function useTheme() {
  return useContext(ThemeContext);
}

// i: context provider
export const ThemeContextProvider = ({ children }) => {
  // i: theme state
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    localStorage.setItem("theme", theme);
    document.documentElement.className = theme;
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
