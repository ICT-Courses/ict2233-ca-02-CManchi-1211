import React, { createContext, useState, useContext, useEffect } from 'react';


//Context to manage the theme state.
export const ThemeContext = createContext();



export const ThemeProvider = ({ children }) => {
  // useState hook: To store what is the the CURRENT theme (light or dark)
  const [currentTheme, setTheme] = useState(
    () => localStorage.getItem('currentTheme') || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')
  );




  // useEffect hook: Let the theme change across the entire app
  useEffect(() => {
    document.documentElement.classList.remove('light', 'dark');
    document.documentElement.classList.add(currentTheme);
    localStorage.setItem('currentTheme', currentTheme);
  }, [currentTheme]);





  // toggleTheme: To Toggle between the two themes
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ currentTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};




// A custom hook to easily access the theme context from any component.
export const useTheme = () => {
  return useContext(ThemeContext);
};
