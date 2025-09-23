import React from 'react';

const Contact = () => {
  const contactMethods = [
    {
      icon: '💼',
      name: 'LinkedIn',
      description: 'Professional Network',
      url: 'https://www.linkedin.com/in/chaya-manchanayake-b14621317?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
      color: 'bg-blue-600 hover:bg-blue-700 border-blue-400'
    },
    {
      icon: '🐱',
      name: 'GitHub',
      description: 'Code Repository',
      url: 'https://github.com/dashboard',
      color: 'bg-gray-700 hover:bg-gray-800 border-gray-500'
    },
    {
      icon: '📧',
      name: 'Email',
      description: 'Direct Contact',
      url: 'mailto:chayamanchanayake@gmail.com',
      color: 'bg-red-600 hover:bg-red-700 border-red-400'
    }
  ];

  return (
    <div className="page-container flex items-center justify-center pt-10">
      <div className="max-w-4xl w-full text-center space-y-8">
        <h1 className="text-4xl font-bold text-white fade-in">Contact Me</h1>
        <p className="text-lg text-gray-200 slide-in">
          Feel free to reach out to me via these platforms.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
          {contactMethods.map((method, index) => (
            <a
              key={method.name}
              href={method.url}
              target={method.name !== 'Email' ? "_blank" : undefined}
              rel={method.name !== 'Email' ? "noopener noreferrer" : undefined}
              className={`group relative overflow-hidden rounded-xl ${method.color} border-2 transition-all duration-300 hover:scale-105 hover:shadow-2xl card-hover slide-in`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent"></div>
              <div className="relative p-8 text-center">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {method.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-2">
                  {method.name}
                </h3>
                <p className="text-sm text-gray-200 mb-4">
                  {method.description}
                </p>
                <div className="inline-flex items-center text-white font-medium group-hover:translate-x-1 transition-transform duration-300">
                  Connect Now
                  <span className="ml-2">→</span>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Additional Contact Info */}
        <div className="mt-12 p-6 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg slide-in">
          <h2 className="text-2xl font-semibold text-white mb-4">Let's Work Together</h2>
          <p className="text-gray-200 max-w-2xl mx-auto">
            I'm always interested in new opportunities and collaborations. Whether you have a project idea, 
            want to discuss technology, or just want to connect, I'd love to hear from you!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;