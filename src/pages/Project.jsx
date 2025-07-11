import React from 'react';

const Project = () => {
  // Using a simple dark mode check instead of useTheme context
  const isDarkMode = document.documentElement.classList.contains('dark') || 
                     window.matchMedia('(prefers-color-scheme: dark)').matches;

  const githubProfile = 'https://github.com/Ariful129';

  const webProjects = [
    {
      title: "Hall Management WebApp",
      
      liveLink: "https://qk-hall.web.app/",
      githubFrontend: "https://github.com/Ariful129/QK-Hall-Client",
      githubBackend: "https://github.com/Ariful129/QK-Hall-Server",
      technologies: ["React", "Node.js", "MongoDB", "Express", "Firebase"],
      status: "Live"
    },
    {
      title: "E-commerce WebApp",
      description: "Full-stack e-commerce platform with advanced features like product browsing, cart management, secure checkout, and admin panel for inventory management.",
      liveLink: "https://e-commerce-final-frontend.vercel.app/",
      githubLink: "https://github.com/Ariful129/E-commerce-final",
      technologies: ["React", "Node.js", "MongoDB", "Express", "Stripe"],
      status: "Live"
    },
    {
      title: "Skill Share WebApp",
      description: "MERN-based platform enabling users to share and enroll in skill-based courses, facilitating peer-to-peer learning with interactive features.",
      liveLink: "#",
      githubFrontend: "https://github.com/Ariful129/Skill_Share_Client_Final1",
      githubBackend: "https://github.com/Ariful129/skill_share_server_Final12",
      technologies: ["React", "Node.js", "MongoDB", "Express", "JWT"],
      status: "In Development"
    },
    {
      title: "Car Doctor WebApp",
      description: "Professional car service management platform with appointment booking, service tracking, and customer management features.",
      liveLink: "https://car-doctor-891f6/",
      githubLink: "https://github.com/Ariful129/car-doctor-client",
      technologies: ["React", "Firebase", "Node.js", "MongoDB"],
      status: "Live"
    },
    {
      title: "CUET e-Bazer WebApp",
      description: "MERN stack-based marketplace for buying and selling second-hand products within the university community with secure transaction features.",
      liveLink: "#",
      githubLink: "https://github.com/Ariful129/CUET-e-Bazer",
      technologies: ["React", "Node.js", "MongoDB", "Express"],
      status: "In Development"
    }
  ];

  const mlProjects = [
    {
      title: "Stock Price Prediction System",
      description: "Advanced ML model using time series analysis and neural networks to predict stock prices with high accuracy.",
      technologies: ["Python", "TensorFlow", "Pandas", "NumPy", "Matplotlib"],
      category: "Machine Learning"
    },
    {
      title: "AI-Powered Book Recommendation Engine",
      description: "Intelligent recommendation system using collaborative filtering and content-based approaches for personalized book suggestions.",
      technologies: ["Python", "Scikit-learn", "NLP", "Pandas"],
      category: "AI/ML"
    },
    {
      title: "Medical Diagnosis Support System",
      description: "ML-powered diagnostic tool to assist healthcare professionals in making accurate medical diagnoses.",
      technologies: ["Python", "TensorFlow", "Scikit-learn", "OpenCV"],
      category: "Healthcare AI"
    },
    {
      title: "Spam Mail Detection System",
      description: "Research project implementing various ML algorithms to detect spam emails with high precision and recall rates.",
      technologies: ["Python", "NLTK", "Scikit-learn", "Pandas"],
      category: "NLP",
      isResearch: true
    },
    {
      title: "Automated Loan Approval Predictor",
      description: "Research-based ML model to predict loan approval likelihood based on applicant profiles and credit history.",
      technologies: ["Python", "Pandas", "Scikit-learn", "XGBoost"],
      category: "FinTech ML",
      isResearch: true
    },
    {
      title: "Intelligent Conversational Chatbot",
      description: "NLP-powered chatbot with context understanding and natural language generation capabilities.",
      technologies: ["Python", "NLTK", "spaCy", "TensorFlow"],
      category: "NLP/AI"
    }
  ];

  const ProjectCard = ({ project, type = "web" }) => (
    <div className={`group relative p-6 rounded-xl border transition-all duration-300 hover:scale-105 hover:shadow-2xl ${
      isDarkMode
        ? 'bg-slate-800/50 border-slate-700 hover:border-red-500/50 hover:bg-slate-800/70'
        : 'bg-white border-gray-200 hover:border-red-500/50 hover:bg-gray-50'
    }`}>
      
      {/* Status Badge */}
      {type === "web" && (
        <div className="absolute top-4 right-4">
          <span className={`px-2 py-1 rounded-full text-xs font-medium ${
            project.status === "Live" 
              ? 'bg-green-100 text-green-800'
              : project.status === "In Development"
              ? 'bg-yellow-100 text-yellow-800'
              : 'bg-blue-100 text-blue-800'
          }`}>
            {project.status}
          </span>
        </div>
      )}

      {/* Research Badge */}
   

      {/* Project Icon */}
      <div className="mb-4">
        <div className="w-8 h-8 text-red-500 text-2xl">
          {type === "web" ? "🌐" : "🧠"}
        </div>
      </div>

      {/* Project Title */}
      <h3 className="text-lg font-semibold mb-3 group-hover:text-red-500 transition-colors">
        {project.title}
      </h3>

      {/* Project Description */}
    

      {/* Technologies */}
   

      {/* Action Buttons */}
      {type === "web" && (
        <div className="flex flex-wrap gap-2">
          {project.liveLink && project.liveLink !== "#" && (
            <a
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 px-3 py-1.5 bg-red-500 hover:bg-red-600 text-white rounded-lg text-sm font-medium transition-colors"
            >
              <span>👁️</span>
              Live Demo
            </a>
          )}
          
          {project.githubLink && (
            <a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center gap-1 px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                isDarkMode
                  ? 'bg-slate-700 hover:bg-slate-600 text-white'
                  : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
              }`}
            >
              <span>⚡</span>
              Code
            </a>
          )}
          
          {project.githubFrontend && (
            <a
              href={project.githubFrontend}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center gap-1 px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                isDarkMode
                  ? 'bg-slate-700 hover:bg-slate-600 text-white'
                  : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
              }`}
            >
              <span>🎨</span>
              Frontend
            </a>
          )}
          
          {project.githubBackend && (
            <a
              href={project.githubBackend}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center gap-1 px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                isDarkMode
                  ? 'bg-slate-700 hover:bg-slate-600 text-white'
                  : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
              }`}
            >
              <span>🗄️</span>
              Backend
            </a>
          )}
        </div>
      )}

      {/* ML Project Category */}
      {type === "ml" && (
        <div className="flex items-center justify-between">
          <span className={`text-sm font-medium ${isDarkMode ? 'text-red-400' : 'text-red-600'}`}>
            {project.category}
          </span>
          <a
            href={githubProfile}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center gap-1 px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
              isDarkMode
                ? 'bg-slate-700 hover:bg-slate-600 text-white'
                : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
            }`}
          >
            <span>⚡</span>
            GitHub
          </a>
        </div>
      )}
    </div>
  );

  return (
    <div className="min-h-screen px-6 lg:px-12 py-12">
      <div className="max-w-7xl mx-auto space-y-12">

        {/* Header */}
        <div className="text-center space-y-3">
          <h1 className="text-xl lg:text-3xl font-bold">
            <span className="text-red-500">My Projects</span>
          </h1>
          <div className="w-24 h-1 mx-auto bg-red-500"></div>
        
        </div>

        {/* GitHub Profile Link */}
        <div className="text-center space-y-2">
          <p className={`text-base lg:text-lg ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            Explore all my projects and contributions on GitHub
          </p>
          <a
            href={githubProfile}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-lg font-medium transition-all duration-200 transform hover:scale-105 shadow-lg"
          >
            <span>⚡</span>
            Visit My GitHub Profile
            <span>🔗</span>
          </a>
        </div>

        {/* Web Applications */}
        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 text-red-500 text-2xl">🌐</div>
            <h2 className="text-xl lg:text-2xl font-bold text-red-500">Web Applications</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {webProjects.map((project, idx) => (
              <ProjectCard key={idx} project={project} type="web" />
            ))}
          </div>
        </div>

        {/* ML/DL/NLP Projects */}
        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 text-red-500 text-2xl">🧠</div>
            <h2 className="text-xl lg:text-2xl font-bold text-red-500">ML Projects</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {mlProjects.map((project, idx) => (
              <ProjectCard key={idx} project={project} type="ml" />
            ))}
          </div>
        </div>

        {/* Stats Section */}
      
        
      </div>
    </div>
  );
};

export default Project;