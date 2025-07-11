import React from 'react';
import { useTheme } from '../context/ThemeContext';
import profileImage from '../assets/Profile.png';
import CV from '../assets/Resume_Ariful_Islam.pdf'


const About = () => {
  const { isDarkMode } = useTheme();

  return (
    <div className="min-h-screen px-6 lg:px-12 py-12">
      <div className="max-w-5xl mx-auto space-y-16">
        
        {/* Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left: Text */}
          <div className="space-y-6">
            
            <h2 className="text-xl lg:text-3xl font-semibold">
              About <span className="text-red-500"> Me</span>
            </h2>
            <p className={`text-base lg:text-lg leading-relaxed ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              I am Ariful Islam, a Computer Science graduate from CUET.
              I'm a passionate Full Stack Developer with expertise in the MERN stack, 
              Machine Learning, and competitive programming. With experience in building 
              scalable web applications, e-commerce platforms, and ML-powered solutions, 
              I enjoy creating innovative digital experiences that solve real-world problems. 
              I have successfully completed industrial attachments and contributed to various 
              development projects while maintaining a strong foundation in algorithms and data structures.
            </p>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <span className="text-red-500 font-semibold w-24">Name:</span>
                <span>Ariful Islam</span>
              </div>
              <div className="flex items-start space-x-3">
                <span className="text-red-500 font-semibold w-24">Education:</span>
                <div>
                  <div>B.Sc. in Computer Science and Engineering (CSE)</div>
                  <div>Chittagong University of Engineering and Technology</div>
                  <div>Feb 2020 - June 2025</div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-red-500 font-semibold w-24">Location:</span>
                <span>Dhaka, Bangladesh</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-red-500 font-semibold w-24">Email:</span>
                <span>arif.cuet129@gmail.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-red-500 font-semibold w-24">Phone:</span>
                <span>(+880) 1908779743</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-red-500 font-semibold w-24">CGPA:</span>
                <span>3.62 / 4.00</span>
              </div>
            </div>
          </div>

          {/* Right: Image + Skills + CV */}
          <div className="flex flex-col items-center space-y-6">
            <div className="w-60 h-60 rounded-full overflow-hidden shadow-2xl border-4 border-red-500/20">
              <img
                src={profileImage}
                alt="Ariful Islam - Full Stack Developer"
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Core Skills */}
            <div
              className={`w-full max-w-md p-6 rounded-xl border ${
                isDarkMode ? 'bg-slate-800/50 border-slate-700' : 'bg-white border-gray-200'
              } shadow-md text-center`}
            >
              <h3 className="text-lg font-bold text-red-500 mb-4">Core Expertise</h3>
              <div className="grid grid-cols-2 gap-3">
                <div className={`p-2 rounded-lg ${isDarkMode ? 'bg-slate-700/50' : 'bg-gray-50'}`}>
                  <span className="text-sm font-medium">MERN Stack</span>
                </div>
                <div className={`p-2 rounded-lg ${isDarkMode ? 'bg-slate-700/50' : 'bg-gray-50'}`}>
                  <span className="text-sm font-medium">Machine Learning</span>
                </div>
                <div className={`p-2 rounded-lg ${isDarkMode ? 'bg-slate-700/50' : 'bg-gray-50'}`}>
                  <span className="text-sm font-medium">Next.js</span>
                </div>
                <div className={`p-2 rounded-lg ${isDarkMode ? 'bg-slate-700/50' : 'bg-gray-50'}`}>
                  <span className="text-sm font-medium">Python</span>
                </div>
                <div className={`p-2 rounded-lg ${isDarkMode ? 'bg-slate-700/50' : 'bg-gray-50'}`}>
                  <span className="text-sm font-medium">JavaScript</span>
                </div>
                <div className={`p-2 rounded-lg ${isDarkMode ? 'bg-slate-700/50' : 'bg-gray-50'}`}>
                  <span className="text-sm font-medium">Competitive Programming</span>
                </div>
              </div>
            </div>

            {/* CV Button */}
            <button className="bg-red-500 hover:bg-red-600 text-white px-8 py-3 rounded-lg font-medium transition-all duration-200 transform hover:scale-105 shadow-lg">
              <a href={CV} target="_blank" rel="noopener noreferrer">
                <span className="flex items-center space-x-2">
                  <span>Download CV</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </span>
              </a>
            </button>
          </div>
        </div>

        {/* Professional Experience Summary */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className={`p-6 rounded-xl border ${
            isDarkMode ? 'bg-slate-800/50 border-slate-700' : 'bg-white border-gray-200'
          } hover:border-red-500/50 transition-all duration-300 text-center`}>
            <div className="text-3xl font-bold text-red-500 mb-2">1+</div>
            <div className="font-semibold mb-1">Years Experience</div>
            <div className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              Full Stack Development & ML
            </div>
          </div>
          
          <div className={`p-6 rounded-xl border ${
            isDarkMode ? 'bg-slate-800/50 border-slate-700' : 'bg-white border-gray-200'
          } hover:border-red-500/50 transition-all duration-300 text-center`}>
            <div className="text-3xl font-bold text-red-500 mb-2">900+</div>
            <div className="font-semibold mb-1">Problems Solved</div>
            <div className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              Competitive Programming
            </div>
          </div>

          <div className={`p-6 rounded-xl border ${
            isDarkMode ? 'bg-slate-800/50 border-slate-700' : 'bg-white border-gray-200'
          } hover:border-red-500/50 transition-all duration-300 text-center`}>
            <div className="text-3xl font-bold text-red-500 mb-2">3+</div>
            <div className="font-semibold mb-1">Major Projects</div>
            <div className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              MERN Stack Applications
            </div>
          </div>
        </div>

        {/* Experience Timeline */}
        <div className={`p-8 rounded-xl border ${
          isDarkMode ? 'bg-slate-800/50 border-slate-700' : 'bg-white border-gray-200'
        }`}>
          <h3 className="text-2xl font-bold text-red-500 mb-6 text-center">Professional Journey</h3>
          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <div className="w-3 h-3 bg-red-500 rounded-full mt-2"></div>
              <div>
                <div className="font-semibold">Software Engineering Industrial Attachment</div>
                <div className="text-red-500 text-sm">SELISE Digital Platforms | Dec 2024 - Jan 2025</div>
                <div className={`text-sm mt-1 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  Developed web applications following software engineering best practices
                </div>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="w-3 h-3 bg-red-500 rounded-full mt-2"></div>
              <div>
                <div className="font-semibold">Full Stack Developer</div>
                <div className="text-red-500 text-sm">CSE Dept. Project, CUET | June 2022 - Feb 2023</div>
                <div className={`text-sm mt-1 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  Developed user-friendly web applications with security enhancements and performance optimization
                </div>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="w-3 h-3 bg-red-500 rounded-full mt-2"></div>
              <div>
                <div className="font-semibold">Frontend Developer</div>
                <div className="text-red-500 text-sm">Code Zone, Bangladesh | Nov 2021 - Mar 2022</div>
                <div className={`text-sm mt-1 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  Built responsive e-commerce sites with admin panels and cross-browser compatibility
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;