import React from 'react';

const Footer = () => {
  return (
    <footer className="p-4 text-center text-gray-600 dark:text-gray-400">
      <p>&copy; {new Date().getFullYear()} Chaya Manchanayake. All rights reserved.</p>
    </footer>
  );
};

export default Footer;