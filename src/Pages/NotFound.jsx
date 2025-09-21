import React from 'react';
import { Link } from 'react-router-dom';

export default NotFound = () => {
  return (
    <div className="page-container flex flex-col items-center justify-center text-center">
      <h1 className="text-6xl font-bold text-red-600">404</h1>
      <h2 className="text-3xl font-semibold mb-4 text-gray-900 dark:text-white">Page Not Found</h2>
      <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
        Oops! The page you're looking for does not exist.
      </p>
      <Link to="/" className="text-blue-600 hover:underline"> {/* Go back to Home link */}
        Go back to Home
      </Link>
    </div>
  );
};
