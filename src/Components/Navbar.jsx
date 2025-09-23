import React from 'react';
import { Link, useLocation } from 'react-router-dom';
// Using "useTheme" custom hook to access currentTheme and toggleTheme easily
import { useTheme } from '../context/themeContext.jsx';

const Navbar = () => {
  const { currentTheme, toggleTheme } = useTheme();
  const location = useLocation();
  
  const isActive = (path) => location.pathname === path;
  
  return (
    <nav className="p-6 flex justify-between items-center transition-colors duration-300 relative z-10">
      <div className="flex items-center space-x-8">
        <ul className="flex space-x-6 ml-8">
          <li>
            <Link 
              to="/" 
              className={`px-3 py-2 rounded-lg font-medium transition-all duration-300 ${
                isActive('/') 
                  ? 'bg-blue-600 text-white shadow-lg' 
                  : 'text-gray-200 hover:text-blue-400 hover:bg-blue-900/20'
              }`}
            >
              Home
            </Link>
          </li>
          <li>
            <Link 
              to="/about" 
              className={`px-3 py-2 rounded-lg font-medium transition-all duration-300 ${
                isActive('/about') 
                  ? 'bg-blue-600 text-white shadow-lg' 
                  : 'text-gray-200 hover:text-blue-400 hover:bg-blue-900/20'
              }`}
            >
              About
            </Link>
          </li>
          <li>
            <Link 
              to="/projects" 
              className={`px-3 py-2 rounded-lg font-medium transition-all duration-300 ${
                isActive('/projects') 
                  ? 'bg-blue-600 text-white shadow-lg' 
                  : 'text-gray-200 hover:text-blue-400 hover:bg-blue-900/20'
              }`}
            >
              Projects
            </Link>
          </li>
          <li>
            <Link 
              to="/contact" 
              className={`px-3 py-2 rounded-lg font-medium transition-all duration-300 ${
                isActive('/contact') 
                  ? 'bg-blue-600 text-white shadow-lg' 
                  : 'text-gray-200 hover:text-blue-400 hover:bg-blue-900/20'
              }`}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
      
      {/* Theme Toggle Button */}
      <button
        onClick={toggleTheme}
        className="p-3 rounded-full bg-gray-800/50 backdrop-blur-sm text-white hover:bg-gray-700/50 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 hover:scale-105"
        title={`Switch to ${currentTheme === 'light' ? 'dark' : 'light'} theme`}
      >
        <span className="text-2xl">
          {currentTheme === 'light' ? '🌙' : '☀️'}
        </span>
      </button>
    </nav>
  );
};

export default Navbar;