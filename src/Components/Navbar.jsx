import React, { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import { ThemeContext } from "../context/ThemeContext.jsx";
import { BsSun, BsMoon } from "react-icons/bs";

const Navbar = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;
  const MyName = "Chaya Manchanayake";

  return (
    <nav
      className="fixed w-full top-0 left-0 right-0 p-4 shadow-lg z-50 backdrop-blur-md transition-colors duration-300 nav-typo nav-ul nav-ul-li-a rounded-lg"
      style={{ backgroundColor: "var(--nav-bg)" }}
    >
      <div className="container mx-auto flex justify-start items-center">
      <div className="flex items-center space-x-6 ">
          <ul className="flex space-x-0 list-none ">
            <li>
              <Link 
                to="/" 
                className={`nav-text-color hover:opacity-80 transition-all duration-300 px-3 py-2 rounded-lg nav-typo nav-ul nav-ul-li-a ${
                  isActive('/') ? 'nav-active-link' : ''
                }`}
              > Home </Link>
            </li>
            
            <li>
              <Link 
                to="/about" 
                className={`nav-text-color hover:opacity-80 transition-all duration-300 px-3 py-2 rounded-lg nav-typo  nav-ul nav-ul-li-a ${
                  isActive('/about') ? 'nav-active-link' : ''
                }`}
              > About </Link>
            </li>
            
            <li>
              <Link 
                to="/projects" 
                className={`nav-text-color hover:opacity-80 transition-all duration-300 px-3 py-2 rounded-lg nav-typo  nav-ul nav-ul-li-a ${
                  isActive('/projects') ? 'nav-active-link' : ''
                }`}
              > Projects </Link>
            </li>
            
            <li>
              <Link 
                to="/contact" 
                className={`nav-text-color hover:opacity-80 transition-all duration-300 px-3 py-2 rounded-lg nav-typo nav-ul nav-ul-li-a ${
                  isActive('/contact') ? 'nav-active-link' : ''
                }`}
              > Contact </Link>
            </li>
          </ul>
          
          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            className="text-0.5xl transition-transform duration-300 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 nav-typo nav-ul nav-ul-li-a"
            title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}>
            {theme === "dark" ? <BsSun className="text-white" /> : <BsMoon className="text-black" />}
          </button>
          
        </div>
      </div>
    </nav>
  );
};

export default Navbar;