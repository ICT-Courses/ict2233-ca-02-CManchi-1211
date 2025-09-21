import React from 'react';


export default Home = () => {
  return (
    <div className="page-container flex items-center justify-center text-center">
      <div className="space-y-4">
        <h1 className="text-5xl font-bold text-gray-900 dark:text-white fade-in">
          Hi, I'm <span className="text-blue-600">Chaya Manchanayake</span> {/*Heading*/}
        </h1>
        {/*Introductory Paragraph*/}
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          An undergraduate at the University of Sri Jayewardenepura,
          with a keen interest in UI/UX design, web development, and programming. 
          I am continuously expanding my knowledge by exploring new concepts and technologies to create innovative digital experiences.
        </p>
        <div className="mt-8">
          <a
            href="/projects"
            className="inline-block px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition duration-300"
          >
            View My Work
          </a>
        </div>
      </div>
    </div>
  );
};
