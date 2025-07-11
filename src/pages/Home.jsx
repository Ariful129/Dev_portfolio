import React, { useState, useEffect } from 'react';
import { useTheme } from '../context/ThemeContext';
import profileImage from '../assets/Profile.png'; 
import CV from '../assets/Resume_Ariful_Islam.pdf'

const Home = () => {
  const { isDarkMode } = useTheme();
  
  // Typewriter animation state
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  
  const texts = [
    'Full Stack Developer',
    'Software Engineer',
    'Competitive Programmer'
  ];
  
  useEffect(() => {
    const typeSpeed = isDeleting ? 50 : 100;
    const pauseTime = 2000;
    
    if (isPaused) {
      const pauseTimer = setTimeout(() => {
        setIsPaused(false);
        setIsDeleting(true);
      }, pauseTime);
      
      return () => clearTimeout(pauseTimer);
    }
    
    const timer = setTimeout(() => {
      const currentFullText = texts[currentIndex];
      
      if (isDeleting) {
        setCurrentText(currentFullText.substring(0, currentText.length - 1));
      } else {
        setCurrentText(currentFullText.substring(0, currentText.length + 1));
      }
      
      // If word is complete and not deleting, pause
      if (!isDeleting && currentText === currentFullText) {
        setIsPaused(true);
      }
      
      // If word is fully deleted, move to next word
      if (isDeleting && currentText === '') {
        setIsDeleting(false);
        setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
      }
    }, typeSpeed);
    
    return () => clearTimeout(timer);
  }, [currentText, currentIndex, isDeleting, isPaused, texts]);

  return (
    <div className="min-h-screen flex items-center justify-center px-6 lg:px-12 py-16">
      <div className="max-w-7xl w-full">
        
        {/* Main Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mb-20">
          
          {/* Left Content */}
          <div className="space-y-8 order-2 lg:order-1">
            <div className="space-y-6">
              {/* Professional Greeting */}
              <div className={`inline-block px-2 lg:px-4 py-2 rounded-full border ${
                isDarkMode 
                  ? 'border-slate-700 bg-slate-800/50 text-slate-300' 
                  : 'border-slate-200 bg-white/80 text-slate-600'
              }`}>
                <span className="text-sm font-medium">Welcome to my portfolio</span>
              </div>
              
              <h1 className="text-2xl lg:text-3xl xl:text-4xl font-bold leading-tight">
                Hello, I'm{' '}
                <span className="bg-gradient-to-r from-red-500 to-red-600 bg-clip-text text-transparent">
                  Ariful Islam
                </span>
              </h1>
              
              {/* Animated Text Section */}
              <div className="relative">
                <h2 className="text-xl lg:text-2xl xl:text-3xl font-semibold min-h-[3rem] lg:min-h-[4rem] xl:min-h-[5rem] flex items-center">
                  <span className="bg-gradient-to-r from-red-500 to-red-600 bg-clip-text text-transparent">
                    {currentText}
                  </span>
                  <span className={`ml-1 w-0.5 h-8 lg:h-10 xl:h-12 bg-gradient-to-r from-red-500 to-red-600 animate-pulse ${
                    isPaused ? 'animate-pulse' : 'animate-ping'
                  }`}></span>
                </h2>
                
                {/* Floating Elements Animation */}
                
              </div>
              
              <p className={`text-lg lg:text-xl leading-relaxed max-w-2xl ${
                isDarkMode ? 'text-slate-300' : 'text-slate-600'
              }`}>
                I have recently completed my undergraduate studies in Computer Science and Engineering at CUET (Chittagong University of Engineering and Technology),    
                
                                  with expertise in Full stack development, 
                        machine learning, and competitive programming. I create innovative web solutions that 
                        combine cutting-edge technology with user-centric design.
              </p>
            </div>
            
            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="group bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-xl shadow-lg">
                <span className="flex items-center justify-center space-x-2">
                   <a href={CV} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2">
                     <span>Download CV</span>
                     <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                     </svg>
                   </a>
                </span>
              </button>
              
              <button className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 border-2 ${
                isDarkMode 
                  ? 'border-slate-600 text-slate-300 hover:border-red-500 hover:text-red-400 hover:bg-slate-800/50' 
                  : 'border-slate-300 text-slate-700 hover:border-red-500 hover:text-red-600 hover:bg-red-50'
              } hover:scale-105`}>
                <span className="flex items-center justify-center space-x-2">
                  <span>Download Resume</span>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </button>
            </div>
            
            {/* Professional Stats */}
            <div className="flex items-center gap-6">
              <div className="group">
                <a 
                  href="https://www.linkedin.com/in/ariful-islam29/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block hover:scale-110 transition-transform duration-300"
                >
                  <div className="text-2xl mb-2 group-hover:text-red-500 transition-colors">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </div>
                </a>
              </div>
              
              <div className="group">
                <a 
                  href="https://github.com/Ariful129" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block hover:scale-110 transition-transform duration-300"
                >
                  <div className="text-2xl mb-2 group-hover:text-red-500 transition-colors">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  </div>
                </a>
              </div>
              
              <div className="group">
                <a 
                  href="https://facebook.com/your-profile" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block hover:scale-110 transition-transform duration-300"
                >
                  <div className="text-2xl mb-2 group-hover:text-red-500 transition-colors">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  </div>
                </a>
              </div>
            </div>
          </div>

          {/* Right Content - Professional Profile Image */}
          <div className="flex justify-center lg:justify-end order-1 lg:order-2">
            <div className="relative group">
              {/* Main Profile Image - Circular */}
              <div className="relative">
                <div className="w-40 h-40 lg:w-80 lg:h-80 xl:w-[24rem] xl:h-[24rem] rounded-full overflow-hidden shadow-2xl border-4 border-white/10 group-hover:scale-105 transition-all duration-500">
                  <img
                    src={profileImage}
                    alt="Ariful Islam - Professional Web Designer"
                    className="w-full h-full object-cover object-center"
                  />
                  {/* Professional Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
                </div>
                
                {/* Animated Ring Around Profile */}
               
              </div>
              
             
            </div>
          </div>

        </div>

        {/* Technology Stack Section */}
        <div className={`rounded-3xl p-8 lg:p-12 ${
          isDarkMode 
            ? 'bg-slate-800/50 border border-slate-700' 
            : 'bg-white/80 border border-slate-200'
        } backdrop-blur-sm`}>
          <h3 className="text-2xl lg:text-3xl font-bold text-center mb-8 bg-gradient-to-r from-red-500 to-red-600 bg-clip-text text-transparent">
            Technology Stack
          </h3>
          
          <div className="flex flex-wrap justify-center gap-3 lg:gap-4">
            {[
              'React.js', 'Next.js', 'Node.js', 'Express.js', 'MongoDB',
              'MySQL', 'Python', 'JavaScript', 'TensorFlow', 'Machine Learning',
              'Tailwind CSS', 'Firebase'
            ].map((tech, index) => (
              <span
                key={tech}
                className={`px-4 py-2 rounded-full text-sm lg:text-base font-medium transition-all duration-300 hover:scale-105 ${
                  isDarkMode
                    ? 'bg-slate-700/50 text-slate-300 hover:bg-red-500/20 hover:text-red-400 border border-slate-600'
                    : 'bg-slate-100 text-slate-700 hover:bg-red-50 hover:text-red-600 border border-slate-200'
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;