import React from 'react';

const About = () => {
  const skillsData = [
    {
      category: '  Programming',
      icon: '💻  ',
      items: ['Python', 'C#', 'JavaScript'],
    },
    {
      category: '  Web Development',
      icon: '🌐  ',
      items: ['React', 'HTML', 'CSS', 'Tailwind CSS', 'Responsive Design'],
    },
    {
      category: '  Databases',
      icon: '🗃️  ',
      items: ['MySQL', 'SQLite', 'PostgreSQL'],
    },
    {
      category: '  Development Tools',
      icon: '🛠️  ',
      items: ['VS Code', 'Visual Studio', 'GitHub', 'Figma'],
    },
  ];

  return (
    <div className="page-container pt-10">
      <h1 className="text-4xl font-bold text-center mb-6 text-white fade-in">About Me</h1>
      <div className="max-w-5xl mx-auto space-y-8">
        
        {/* Introduction */}
        <div className="text-center slide-in">
          <p className="text-lg text-gray-200 max-w-3xl mx-auto">
            I am a B.Sc. (Hons) in ICT undergraduate at the University of Sri Jayewardenepura.
            I have a strong interest in UI/UX principles and I am continuous drive to explore and learn new technologies.
          </p>
        </div>

        {/* Education Card */}
        <div className="p-6 rounded-3xl shadow-xl card-hover slide-in themed-card border-2 text-center">
          <div className="flex items-center justify-center mb-4">
            <span className="text-3xl mr-3">🎓</span>
            <h2 className="text-2xl font-semibold text-black dark:text-white">  Education</h2>
          </div>
          <p className="text-gray-700 dark:text-gray-200">
            B.Sc. (Hons) in ICT - University of Sri Jayewardenepura
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
          {skillsData.map((skill, index) => (
            <div
              key={skill.category}
              className={`p-6 rounded-3xl shadow-xl card-hover slide-in themed-card border-2 text-center`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="flex items-center justify-center mb-4">
                <span className="text-3xl mr-3">{skill.icon}</span>
                <h3 className="text-xl font-semibold text-black dark:text-white">
                  {skill.category}
                </h3>
              </div>
              <p className="text-gray-700 dark:text-gray-200">
                {skill.items.join(', ')}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;