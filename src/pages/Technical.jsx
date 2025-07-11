import React, { useState } from 'react';
import { useTheme } from '../context/ThemeContext';

export const Technical = () => {
  const { isDarkMode } = useTheme();
  const [activeCategory, setActiveCategory] = useState('development');

  const technicalCategories = {
    development: {
      icon: "💻",
      title: "Full-Stack Development",
      skills: [
        "Frontend: React.js, Next.js, JavaScript, TypeScript, HTML5, CSS3",
        "Styling: Tailwind CSS, Styled Components, SASS/SCSS, Bootstrap",
        "Backend: Node.js, Express.js, RESTful APIs",
        "State Management: Context API",
        "Testing: Jest, React Testing Library"
      ]
    },
    languages: {
      icon: "⚡",
      title: "Programming Languages",
      skills: [
        "JavaScript/TypeScript:  Proficiency in modern ES6+ features",
        "Python: Development, automation, data processing",
        "C/C++: OOP, programming & algorithms"
      ]
    },
    database: {
      icon: "🗄️",
      title: "Database & Cloud",
      skills: [
        "Relational: MySQL",
        "NoSQL: MongoDB, Firebase Firestore",
        "Cloud Services: Firebase, Vercel, Netlify",
      ]
    },
    tools: {
      icon: "🛠️",
      title: "Development Tools",
      skills: [
        "Version Control: Git, GitHub, GitLab workflows",
        "Package Managers: npm, yarn",
        "Build Tools: Webpack, Vite",
        "Development: VS Code, Chrome DevTools, Postman",
        "Deployment: Docker basics, CI/CD pipelines"
      ]
    },
    emerging: {
      icon: "🌐",
      title: "Emerging Technologies",
      skills: [
        "AI Integration: OpenAI API, AI-powered applications",
      ]
    }
  };

  const coCurricular = [
    {
      role: "Joint General Secretary",
      organization: "CUET Computer Club",
      description: "Leading technical initiatives and coordinating research activities",
      icon: "👥"
    },
    {
      role: "Assistant Secretary",
      organization: "CUET Career Club",
      description: "Organizing career development workshops and industry connections",
      icon: "🏆"
    },
  
    {
      role: "Finance Secretary",
      organization: "Green for Peace, CUET",
      description: "Managing financial operations and sustainability projects",
      icon: "🏆"
    },
    {
      role: "Volunteer",
      organization: "ECCE-2025 Conference",
      description: "Supporting international academic conference operations",
      icon: "👥"
    }
  ];

  const CategoryButton = ({ categoryKey, category, isActive, onClick }) => {
    return (
      <button
        onClick={() => onClick(categoryKey)}
        className={`flex items-center gap-3 w-full p-4 rounded-xl transition-all duration-300 text-left group ${
          isActive
            ? isDarkMode
              ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/25'
              : 'bg-blue-500 text-white shadow-lg shadow-blue-500/25'
            : isDarkMode
            ? 'bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white'
            : 'bg-gray-100 text-gray-700 hover:bg-gray-200 hover:text-gray-900'
        }`}
      >
        <div className={`p-2 rounded-lg text-2xl ${isActive ? 'bg-white/20' : 'bg-current/10'}`}>
          {category.icon}
        </div>
        <div className="flex-1">
          <div className="font-semibold">{category.title}</div>
          <div className={`text-sm ${isActive ? 'text-white/80' : 'text-current/60'}`}>
            {category.skills.length} skills
          </div>
        </div>
        <div className={`transition-transform duration-300 ${isActive ? 'rotate-90' : 'group-hover:translate-x-1'}`}>
          ▶
        </div>
      </button>
    );
  };

  return (
    <div className={`min-h-screen py-16 px-4 transition-all duration-300 ${
      isDarkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'
    }`}>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className={`text-2xl md:text-3xl font-bold mb-6 ${
            isDarkMode ? 'text-white' : 'text-gray-900'
          }`}>
             <span className=' text-red-500'> Technical Expertise & Leadership</span>
          </h1>
          <p className={`text-xl max-w-3xl mx-auto leading-relaxed ${
            isDarkMode ? 'text-gray-300' : 'text-gray-600'
          }`}>
          
          </p>
        </div>

        {/* Technical Skills Section */}
        <div className="mb-20">
          <h2 className={`text-2xl font-bold mb-8 ${
            isDarkMode ? 'text-white' : 'text-gray-900'
          }`}>
            Technical Skills
          </h2>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Category Navigation */}
            <div className="space-y-3">
              {Object.entries(technicalCategories).map(([key, category]) => (
                <CategoryButton
                  key={key}
                  categoryKey={key}
                  category={category}
                  isActive={activeCategory === key}
                  onClick={setActiveCategory}
                />
              ))}
            </div>

            {/* Skills Display */}
            <div className="lg:col-span-2">
              <div className={`p-8 rounded-2xl shadow-xl transition-all duration-500 ${
                isDarkMode 
                  ? 'bg-gray-800 border border-gray-700' 
                  : 'bg-white border border-gray-200'
              }`}>
                <div className="flex items-center gap-4 mb-6">
                  <div className={`text-3xl ${isDarkMode ? 'text-blue-400' : 'text-blue-500'}`}>
                    {technicalCategories[activeCategory].icon}
                  </div>
                  <h3 className={`text-2xl font-bold ${
                    isDarkMode ? 'text-white' : 'text-gray-900'
                  }`}>
                    {technicalCategories[activeCategory].title}
                  </h3>
                </div>
                
                <div className="space-y-4">
                  {technicalCategories[activeCategory].skills.map((skill, idx) => (
                    <div
                      key={idx}
                      className={`p-4 rounded-xl border-l-4 transition-all duration-300 hover:translate-x-2 ${
                        isDarkMode
                          ? 'bg-gray-700 border-blue-400 text-gray-200'
                          : 'bg-gray-50 border-blue-500 text-gray-700'
                      }`}
                    >
                      <div className="font-medium">{skill.split(':')[0]}:</div>
                      <div className={`text-sm mt-1 ${
                        isDarkMode ? 'text-gray-300' : 'text-gray-600'
                      }`}>
                        {skill.split(':')[1]}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Co-Curricular Section */}
        <div>
          <h2 className={`text-2xl font-bold mb-8 ${
            isDarkMode ? 'text-white' : 'text-gray-900'
          }`}>
            Leadership & Co-Curricular Activities
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {coCurricular.map((item, idx) => (
              <div
                key={idx}
                className={`p-6 rounded-2xl shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-2 ${
                  isDarkMode 
                    ? 'bg-gray-800 border border-gray-700' 
                    : 'bg-white border border-gray-200'
                }`}
              >
                <div className="flex items-start gap-4">
                  <div className={`p-3 rounded-xl text-2xl ${
                    isDarkMode ? 'bg-blue-600' : 'bg-blue-500'
                  }`}>
                    <span className="text-white">{item.icon}</span>
                  </div>
                  <div className="flex-1">
                    <h4 className={`font-bold text-lg mb-2 ${
                      isDarkMode ? 'text-white' : 'text-gray-900'
                    }`}>
                      {item.role}
                    </h4>
                    <p className={`font-medium mb-3 ${
                      isDarkMode ? 'text-blue-400' : 'text-blue-600'
                    }`}>
                      {item.organization}
                    </p>
                    <p className={`text-sm leading-relaxed ${
                      isDarkMode ? 'text-gray-300' : 'text-gray-600'
                    }`}>
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};