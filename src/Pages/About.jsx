import React from 'react';


const About = () => {
  return (
    <div className="page-container pt-10">

        {/*About Me section*/}
      <h1 className="text-4xl font-bold text-center mb-6 text-gray-900 dark:text-white">About Me</h1>
      <div className="max-w-4xl mx-auto space-y-8">
        <p className="text-lg text-gray-600 dark:text-gray-300 text-center">
          I am a B.Sc. (Hons) in ICT undergraduate at the University of Sri Jayewardenepura. 
          I have a strong interest in UI/UX principles and I am continuous drive to explore and learn new technologies.  </p>
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">

          {/*Education section*/}
          <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">Education</h2>
          <p className="text-gray-700 dark:text-gray-300">
            B.Sc. (Hons) in ICT - University of Sri Jayewardenepura
          </p>
        </div>
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">

          {/*Technical Skills section*/}
          <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">Technical Skills</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
            <li>Languages: Python (basic), C# (basic), JavaScript</li>
            <li>Frameworks: React, .NET Framework</li>
            <li>Databases: MySQL, SQLite, PostgreSQL</li>
            <li>Tools: VS Code, Visual Studio, GitHub, Figma</li>
            <li>Web: HTML, CSS</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;