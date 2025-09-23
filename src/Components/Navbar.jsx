import React from 'react';
import { Link } from 'react-router-dom';
// Using "useTheme" custom hook to access currentTheme and toggleTheme easily
import { useTheme } from '../context/themeContext.jsx';
// To get the moon icon and the sun icon to toggle between the themes
import { SunIcon, MoonIcon } from '@heroicons/react/24/outline';

const Navbar = () => {
  const { currentTheme, toggleTheme } = useTheme();

  return (
    <nav className="p-4 flex justify-between items-center transition-colors duration-300">
      <div className="flex items-center space-x-4">
        <Link to="/" className="text-xl font-bold text-gray-900 dark:text-gray-200">
          Chaya Manchanayake
        </Link>
        <ul className="flex space-x-4">
          <li><Link to="/" className="text-gray-700 hover:text-blue-500 dark:text-gray-300 dark:hover:text-blue-400">Home</Link></li>
          <li><Link to="/about" className="text-gray-700 hover:text-blue-500 dark:text-gray-300 dark:hover:text-blue-400">About</Link></li>
          <li><Link to="/projects" className="text-gray-700 hover:text-blue-500 dark:text-gray-300 dark:hover:text-blue-400">Projects</Link></li>
            <li><Link to="/contact" className="text-gray-700 hover:text-blue-500 dark:text-gray-300 dark:hover:text-blue-400">Contact</Link></li>
        </ul>
      </div>
      {/* Toggle between Dark and Light modes on click*/}
      <button
        onClick={toggleTheme}
        className="p-2 rounded-full bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200 focus:outline-none"
>
        {currentTheme === 'light' ? '🌙' : '☀️'}
      </button>
    </nav>
  );
};

export default Navbar;