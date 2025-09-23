import React from 'react';

const About = () => {
  return (
    <div className="page-container pt-10">
      <h1 className="text-4xl font-bold text-center mb-6 text-white fade-in">About Me</h1>
      <div className="max-w-4xl mx-auto space-y-8">
        
        {/* Introduction */}
        <div className="text-center slide-in">
          <p className="text-lg text-gray-200 max-w-3xl mx-auto">
            I am a B.Sc. (Hons) in ICT undergraduate at the University of Sri Jayewardenepura.
            I have a strong interest in UI/UX principles and I am continuous drive to explore and learn new technologies.
          </p>
        </div>
        <p></p>
        <p></p>

        {/* Education Card */}
        <div className="bg-white/10 backdrop-blur-sm border border-white/20 p-6 rounded-lg shadow-xl card-hover slide-in">
          <div className="flex items-center mb-4">
            <span className="text-3xl mr-3">🎓</span>
            <h2 className="text-2xl font-semibold text-white">Education</h2>
          </div>
          <p className="text-gray-200">
            B.Sc. (Hons) in ICT - University of Sri Jayewardenepura
          </p>
        </div>
        <p></p>
        <p></p>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Programming Languages */}
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 p-6 rounded-lg shadow-xl card-hover slide-in">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">💻</span>
              <h3 className="text-xl font-semibold text-white">Languages</h3>
            </div>
            <div className="flex flex-wrap gap-5">
              {['Python', 'C#', 'JavaScript'].map((lang, index) => (
                <span key={index} className="px-3 py-1 bg-blue-600/30 text-blue-200 rounded-full text-sm border border-blue-400/30">
                  {lang}
                </span>
              ))}
            </div>
            <p></p>
            <p></p>
          </div>
          <p></p>
          <p></p>

          {/* Frameworks */}
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 p-6 rounded-lg shadow-xl card-hover slide-in">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">⚛️</span>
              <h3 className="text-xl font-semibold text-white">Frameworks</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {['React', '.NET Framework'].map((framework, index) => (
                <span key={index} className="px-3 py-1 bg-green-600/30 text-green-200 rounded-full text-sm border border-green-400/30">
                  {framework}
                </span>
              ))}
            </div>
            <p></p>
            <p></p>
          </div>
          <p></p>
          <p></p>

          {/* Databases */}
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 p-6 rounded-lg shadow-xl card-hover slide-in">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">🗃️</span>
              <h3 className="text-xl font-semibold text-white">Databases</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {['MySQL', 'SQLite', 'PostgreSQL'].map((db, index) => (
                <span key={index} className="px-3 py-1 bg-purple-600/30 text-purple-200 rounded-full text-sm border border-purple-400/30">
                  {db}
                </span>
              ))}
            </div>
            <p></p>
            <p></p>
          </div>
          <p></p>
          <p></p>
         

          {/* Tools */}
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 p-6 rounded-lg shadow-xl card-hover slide-in">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">🛠️</span>
              <h3 className="text-xl font-semibold text-white">Tools</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {['VS Code', 'Visual Studio', 'GitHub', 'Figma'].map((tool, index) => (
                <span key={index} className="px-3 py-1 bg-orange-600/30 text-orange-200 rounded-full text-sm border border-orange-400/30">
                  {tool}
                </span>
              ))}
            </div>
            <p></p>
            <p></p>
          </div>
          <p></p>
          <p></p>
        </div>

        {/* Web Technologies */}
        <div className="bg-white/10 backdrop-blur-sm border border-white/20 p-6 rounded-lg shadow-xl card-hover slide-in">
          <div className="flex items-center mb-4">
            <span className="text-3xl mr-3">🌐</span>
            <h2 className="text-2xl font-semibold text-white">Web Technologies</h2>
          </div>
          <div className="flex flex-wrap gap-2">
            {['HTML', 'CSS', 'Tailwind CSS', 'Responsive Design'].map((tech, index) => (
              <span key={index} className="px-3 py-1 bg-teal-600/30 text-teal-200 rounded-full text-sm border border-teal-400/30">
                {tech}
              </span>
            ))}
          </div>
          <p></p>
          <p></p>
        </div>
        <p></p>
        <p></p>
      </div>
    </div>
  );
};

export default About;