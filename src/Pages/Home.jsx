import React from 'react';


const Home = () => {
  return (
    <div className="page-container flex items-center justify-center text-center">
      <div className="space-y-4">
        <h1 className="text-5xl font-bold text-gray-900 dark:text-white fade-in">
          Hi, I'm <span className="text-blue-600">Chaya Manchanayake</span> {/*Heading*/}
        </h1>

        {/*Introductory Paragraph*/}
        <p className="text-xl text-gray-1000 dark:text-gray-700 max-w-8xl mx-auto fade-in">
          An undergraduate at the University of Sri Jayewardenepura,
          with a keen interest in UI/UX design, web development, and programming. 
          I am continuously expanding my knowledge by exploring new concepts and technologies to create innovative digital experiences.
        </p>
        <div className="mt-8 fade-in">
          <a
            href="/projects"
            className="inline-block px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition duration-300"
          >
            View My Work
          </a>
          <p></p>
          <p></p>

        {/* Profile Photo */}
        <div className="flex justify-center mb-2">
        <img 
            src="../public/Images/Me.jpg" 
            alt="Chaya Manchanayake" 
            className="w-5 h-5 rounded-full object-cover border-0 border-blue-200 shadow-lg hover:scale-105 transition-transform duration-300"
        />
        </div>

        
        </div>
      </div>
    </div>
  );
};

export default Home;
