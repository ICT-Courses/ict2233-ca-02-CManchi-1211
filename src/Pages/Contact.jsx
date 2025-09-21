import React from 'react';

export default Contact = () => {
  return (
    <div className="page-container flex items-center justify-center pt-10">
      <div className="max-w-2xl w-full text-center space-y-6">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white">Contact Me</h1> {/* Contact Me Headline*/}
        <p className="text-lg text-gray-600 dark:text-gray-300">
          Feel free to reach out to me via these platforms.
        </p>
        <div className="flex flex-col space-y-4 items-center">
          <a
            href="https://www.linkedin.com/in/chaya-manchanayake-b14621317?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full md:w-1/2 p-4 rounded-lg bg-blue-700 text-white font-semibold hover:bg-blue-800 transition duration-300"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/dashboard"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full md:w-1/2 p-4 rounded-lg bg-gray-900 text-white font-semibold hover:bg-gray-700 transition duration-300"
          >
            GitHub
          </a>
          <a
            href="mailto:chayamanchanayake@gmail.com"
            className="w-full md:w-1/2 p-4 rounded-lg bg-red-600 text-white font-semibold hover:bg-red-700 transition duration-300"
          >
            Email
          </a>
        </div>
      </div>
    </div>
  );
};