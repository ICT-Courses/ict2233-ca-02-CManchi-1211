import React from 'react';
import { FaLaptopCode, FaGithub, FaGitAlt } from 'react-icons/fa';

const About = () => {
  return (
    <div className="page-container pt-10">
      <div className="max-w-4xl mx-auto space-y-8">
        
        {/* Header */}
        <div className="text-center mb-12 fade-in">
          <h1 className="text-4xl font-bold text-black dark:text-white mb-4">About Me</h1>
          <p className="text-lg text-gray-700 dark:text-gray-200 max-w-4xl mx-auto">
            Currently pursuing my undergraduate degree with focus on software development, web technologies, operating systems, and data structures and algorithms.
          </p>
        </div>

        {/* All Sections in a Single Column */}
      <div className="space-y-6">
      <section>
    <h2 className="text-2xl font-bold text-black dark:text-white mb-6 text-left">Technical Skills</h2>
    <div className="themed-card border-2 p-6 card-hover transition-all duration-300 mx-auto max-w-2xl rounded-2xl overflow-hidden">
      <table className="w-full">
        <tbody>
          <tr>
            <td className="p-2">
              <div className="text-center">
                <h3 className="text-xl font-semibold text-black dark:text-white">Python</h3>
                <span className="px-3 py-1 bg-gray-600/50 text-gray-300 rounded-full text-sm">Basic</span>
                <p className="mt-2 text-gray-700 dark:text-gray-300 text-sm">File handling, basic concepts</p>
              </div>
            </td>
            <td className="p-2">
              <div className="text-center">
                <h3 className="text-xl font-semibold text-black dark:text-white">.NET Framework</h3>
                <span className="px-3 py-1 bg-blue-600/50 text-blue-200 rounded-full text-sm">Intermediate</span>
                <p className="mt-2 text-gray-700 dark:text-gray-300 text-sm">Desktop application development</p>
              </div>
            </td>
            <td className="p-2">
              <div className="text-center">
                <h3 className="text-xl font-semibold text-black dark:text-white">C#</h3>
                <span className="px-3 py-1 bg-gray-600/50 text-gray-300 rounded-full text-sm">Basic</span>
                <p className="mt-2 text-gray-700 dark:text-gray-300 text-sm">OOP fundamentals</p>
              </div>
            </td>
          </tr>
          <tr>
            <td className="p-2">
              <div className="text-center">
                <h3 className="text-xl font-semibold text-black dark:text-white">React.js</h3>
                <span className="px-3 py-1 bg-green-600/50 text-green-200 rounded-full text-sm">Learning</span>
                <p className="mt-2 text-gray-700 dark:text-gray-300 text-sm">Component-based web development</p>
              </div>
            </td>
            <td className="p-2">
              <div className="text-center">
                <h3 className="text-xl font-semibold text-black dark:text-white">HTML/CSS</h3>
                <span className="px-3 py-1 bg-blue-600/50 text-blue-200 rounded-full text-sm">Intermediate</span>
                <p className="mt-2 text-gray-700 dark:text-gray-300 text-sm">Web markup and styling</p>
              </div>
            </td>
            <td className="p-2">
              <div className="text-center">
                <h3 className="text-xl font-semibold text-black dark:text-white">JavaScript</h3>
                <span className="px-3 py-1 bg-green-600/50 text-green-200 rounded-full text-sm">Learning</span>
                <p className="mt-2 text-gray-700 dark:text-gray-300 text-sm">Interactive web functionality</p>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </section>


          {/* Database Technologies */}
          <section>
            <h2 className="text-2xl font-bold text-black dark:text-white mb-6">Databases</h2>
            
            <div className="themed-card border-2 p-4 card-hover transition-all duration-300 rounded-2xl overflow-hidden">
              <table className="w-full">
                <tbody>
                  <tr>
                    <td className="p-5">
                      <div className="text-center">
                        <h3 className="text-lg font-semibold text-black dark:text-white">MySQL</h3>
                        <span className="px-3 py-1 bg-gray-600/50 text-gray-300 rounded-full text-sm text-center">Basic</span>
                        <p className="text-gray-700 dark:text-gray-300 text-sm">Database design and queries</p>
                      </div>
                    </td>
                    <td className="p-5">
                      <div className="text-center">
                        <h3 className="text-lg font-semibold text-black dark:text-white">SQLite</h3>
                        <span className="px-3 py-1 bg-gray-600/50 text-gray-300 rounded-full text-sm">Basic</span>
                        <p className="text-gray-700 dark:text-gray-300 text-sm">Lightweight database management</p>
                      </div>
                    </td>
                    <td className="p-5">
                      <div className="text-center">
                        <h3 className="text-lg font-semibold text-black dark:text-white">PostgreSQL</h3>
                        <span className="px-3 py-1 bg-gray-600/50 text-gray-300 rounded-full text-sm">Basic</span>
                        <p className="text-gray-700 dark:text-gray-300 text-sm">Advanced database operations</p>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>


          {/* Development Tools Section */}
          <section>
            <h2 className="text-2xl font-bold text-black dark:text-white mb-6">Development Tools</h2>
            
            <div className="themed-card border-2 p-4 card-hover transition-all duration-300 rounded-2xl overflow-hidden">
              <table className="w-full">
                <tbody>
                  <tr>
                    <td className="p-5 text-center">
                      <div className="flex items-center space-x-4 justify-center">
                        <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white">
                          <FaLaptopCode className="text-lg" />
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-black dark:text-white">VS Code</h3>
                          <p className="text-gray-700 dark:text-gray-300 text-sm">Primary code editor</p>
                      </div>
                    </div>
                  </td>
                    <td className="p-5 text-center">
                      <div className="flex items-center space-x-4 justify-center">
                        <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white">
                          <FaLaptopCode className="text-lg" />
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-black dark:text-white">Visual Studio</h3>
                          <p className="text-gray-700 dark:text-gray-300 text-sm">IDE for .NET development</p>
                        </div>
                    </div>
                  </td>
                  </tr>
                  <tr>
                    <td className="p-5 text-center">
                      <div className="flex items-center space-x-4 justify-center">
                        <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white">
                          <FaGithub className="text-lg" />
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-black dark:text-white">GitHub</h3>
                          <p className="text-gray-700 dark:text-gray-300 text-sm">Version control and collaboration</p>
                      </div>
                    </div>
                  </td>
                    <td className="p-5 text-center">
                      <div className="flex items-center space-x-4 justify-center">
                        <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white">
                          <FaGitAlt className="text-lg" />
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-black dark:text-white">Git</h3>
                          <p className="text-gray-700 dark:text-gray-300 text-sm">Source code management</p>
                        </div>
                    </div>
                  </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Soft Skills Section */}
          <section>
            <h2 className="text-2xl font-bold text-black dark:text-white mb-6">Soft Skills</h2>
            
            <div className="themed-card border-2 p-4 card-hover transition-all duration-300 rounded-2xl overflow-hidden">
              <table className="w-full">
                <tbody>
                  <tr>
                    <td className="p-5 text-center">
                    <p></p>
                      <span className="text-black dark:text-white font-medium">Problem Solving</span>
                      <p></p>
                    </td>
                    <td className="p-5 text-center">
                      <p></p>
                      <span className="text-black dark:text-white font-medium">Team Collaboration</span>
                      <p></p>
                    </td>
                    <td className="p-5 text-center">
                      <p></p>
                      <span className="text-black dark:text-white font-medium">Quick Learning</span>
                      <p></p>
                    </td>
                  </tr>
                  <tr>
                    <td className="p-5 text-center">
                      <span className="text-black dark:text-white font-medium">Attention to Detail</span>
                       <p></p>
                    </td>
                    <td className="p-5 text-center">
                      <span className="text-black dark:text-white font-medium">Time Management</span>
                      <p></p>
                    </td>
                    <td className="p-5 text-center">
                      <span className="text-black dark:text-white font-medium">Communication</span>
                      <p></p>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default About;