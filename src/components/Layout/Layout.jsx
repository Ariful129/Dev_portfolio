import React from 'react';
import Sidebar from './Sidebar';
import { useTheme } from '../../context/ThemeContext';

const Layout = ({ children }) => {
  const { isDarkMode } = useTheme();

  return (
    <div className={`min-h-screen transition-all duration-500 ${
      isDarkMode 
        ? 'bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900' 
        : 'bg-gradient-to-br from-slate-50 via-white to-slate-100'
    }`}>
      <Sidebar />
      
      {/* Main Content Area */}
      <main className="ml-64 lg:ml-72 min-h-screen transition-all duration-300">
        <div className={`min-h-screen ${
          isDarkMode ? 'text-slate-100' : 'text-slate-800'
        }`}>
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-red-500/10 to-transparent transform rotate-12"></div>
            <div className="absolute inset-0 bg-gradient-to-l from-transparent via-red-500/5 to-transparent transform -rotate-12"></div>
          </div>
          
          {/* Content Container */}
          <div className="relative z-10">
            {children}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Layout;