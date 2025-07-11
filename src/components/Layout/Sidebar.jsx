import React from 'react';
import { NavLink } from 'react-router-dom';
import { useTheme } from '../../context/ThemeContext';

const Sidebar = () => {
  const { isDarkMode, toggleTheme } = useTheme();

  const navItems = [
    { path: '/', name: 'Home', icon: '🏠' },
    { path: '/about', name: 'About', icon: '👤' },
    { path: '/project', name: 'Projects', icon: '⚙️' },
    { path: '/technical', name: 'Technical & Co-curiculam', icon: '🎓' },
    
    { path: '/contact', name: 'Contact', icon: '📧' }
  ];

  return (
    <div className={`fixed left-0 top-0 h-full w-64 lg:w-72 transition-all duration-500 z-50 ${
      isDarkMode 
        ? 'bg-slate-900 text-slate-100 border-r border-slate-800' 
        : 'bg-white text-slate-800 border-r border-slate-200'
    } shadow-2xl backdrop-blur-lg`}>
      
      {/* Professional Header */}
      <div className="p-6 border-b border-slate-700/50">
        <div className="flex items-center space-x-4">
          {/* Professional Logo */}
          <div className="relative group">
            <div className="w-10 h-10 bg-gradient-to-br from-red-500 via-red-600 to-red-700 rounded-2xl flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-300">
              <span className="text-white font-bold text-2xl">A</span>
            </div>
            {/* Professional corner accents */}
            <div className="absolute -top-1 -left-1 w-4 h-4 border-l-2 border-t-2 border-red-500/60 rounded-tl-lg"></div>
            <div className="absolute -bottom-1 -right-1 w-4 h-4 border-r-2 border-b-2 border-red-500/60 rounded-br-lg"></div>
          </div>
          
          <div className="flex-1">
            <h1 className="text-2xl font-bold tracking-wide">Ariful Islam</h1>
            <p className={`text-sm ${isDarkMode ? 'text-slate-400' : 'text-slate-500'}`}>
              
            </p>
            <div className="w-16 h-0.5 bg-gradient-to-r from-red-500 to-transparent mt-2"></div>
          </div>
        </div>
      </div>

      {/* Professional Navigation */}
      <nav className="mt-10 px-6">
        <div className={`text-xs font-semibold tracking-wider uppercase mb-4 ${
          isDarkMode ? 'text-slate-500' : 'text-slate-400'
        }`}>
          Navigation
        </div>
        
        <ul className="space-y-2">
          {navItems.map((item) => (
            <li key={item.path}>
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  `group flex items-center space-x-1 px-1 py-2 rounded-xl transition-all duration-300 relative overflow-hidden ${
                    isActive
                      ? 'bg-gradient-to-r from-red-500 to-red-600 text-white shadow-lg scale-105'
                      : isDarkMode
                      ? 'text-slate-300 hover:bg-slate-800/70 hover:text-white hover:translate-x-1'
                      : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900 hover:translate-x-1'
                  }`
                }
              >
                {/* Professional hover background */}
                <div className="absolute inset-0 bg-gradient-to-r from-red-500/10 via-red-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <span className="text-sm relative z-10 group-hover:scale-110 transition-transform duration-200">
                  {item.icon}
                </span>
                <span className="font-semibold text-base relative z-10">{item.name}</span>
                
                {/* Professional active indicator */}
                <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-1 h-8 bg-white rounded-l-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>

      {/* Professional Skills Badge */}
    

      {/* Professional Theme Toggle */}
      <div className="absolute bottom-2 left-8 right-8 space-y-4">
        <button
          onClick={toggleTheme}
          className={`w-full flex items-center justify-center space-x-3 px-1 py-1 rounded-xl transition-all duration-300 group ${
            isDarkMode
              ? 'bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700'
              : 'bg-slate-100 hover:bg-slate-200 text-slate-700 border border-slate-200'
          } hover:shadow-lg hover:scale-105`}
        >
          <span className="text-xl group-hover:scale-110 transition-transform duration-300">
            {isDarkMode ? '☀️' : '🌙'}
          </span>
          <span className="font-semibold">
            {isDarkMode ? 'Light Theme' : 'Dark Theme'}
          </span>
        </button>
        
        {/* Professional footer */}
        <div className={`text-center text-xs ${isDarkMode ? 'text-slate-500' : 'text-slate-400'}`}>
          © 2025 Ariful's Portfolio
        </div>
      </div>

      {/* Professional decorative elements */}
      <div className="absolute top-40 right-4 w-1 h-20 bg-gradient-to-b from-red-500/40 via-red-500/20 to-transparent rounded-full"></div>
      <div className="absolute bottom-40 left-4 w-1 h-16 bg-gradient-to-t from-red-500/30 via-red-500/15 to-transparent rounded-full"></div>
      
      {/* Professional dots pattern */}
      <div className="absolute top-1/2 right-2 space-y-2">
        <div className="w-1 h-1 bg-red-500/30 rounded-full"></div>
        <div className="w-1 h-1 bg-red-500/40 rounded-full"></div>
        <div className="w-1 h-1 bg-red-500/30 rounded-full"></div>
      </div>
    </div>
  );
};

export default Sidebar;