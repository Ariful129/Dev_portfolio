import React from 'react';
import { useTheme } from '../context/ThemeContext';

const Publication = () => {
  const { isDarkMode } = useTheme();

  const publications = [
    {
      id: 'J-1',
      title: 'BAN-ASTE: A Unified Neural Framework for Bengali Aspect Sentiment Triplet Extraction',
      status: 'Submitted to a Journal'
    },
    {
      id: 'C-1',
      title: 'Transformer-Based Model for the Detection of Caste and Migration Hate Speech',
      status: 'Accepted, LTEDI\'25'
    },
    {
      id: 'C-2',
      title: 'Racial Hoax Detection in Code-Mixed Social Media Data',
      status: 'Accepted, LTEDI\'25'
    },
    {
      id: 'C-3',
      title: 'BanglaSentNet: A Hybrid Deep Learning Framework for Multi-Aspect Sentiment Analysis in Bangla E-Commerce Reviews',
      status: 'Accepted, ICDSAIA\'25'
    },
    {
      id: 'C-4',
      title: 'BanglaMM-Disaster: A Multimodal Transformer-Based Deep Learning Framework for Multiclass Disaster Classification in Bengali',
      status: 'Under Review, ICMCEL\'25'
    },
    {
      id: 'C-5',
      title: 'Enhancing Bangla Fake News Detection with a Multichannel Approach',
      status: 'Under Review, BIM\'25'
    },
    {
      id: 'C-6',
      title: 'Cyberbullying Detection in Bengali: A Transformer-Based Explainable AI Approach',
      status: 'Under Review, BIM\'25'
    }
  ];

  return (
    <div className="min-h-screen px-6 lg:px-12 py-12 flex items-center justify-center">
      <div className="max-w-4xl w-full space-y-8">
        <div className="text-center space-y-3">
          <h1 className="text-xl lg:text-3xl font-bold mb-2">
            <span className="text-red-500">Publications</span>
          </h1>
          <div className={`w-20 h-1 mx-auto ${isDarkMode ? 'bg-red-600' : 'bg-red-500'}`}></div>
          <p className={`text-base lg:text-lg max-w-2xl mx-auto ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            Publications and works under review in NLP, Machine Learning, and Deep Learning.
          </p>
        </div>

        <div className="space-y-4">
          {publications.map((pub) => (
            <div
              key={pub.id}
              className={`p-4 rounded-xl border transition-all duration-300 ${
                isDarkMode
                  ? 'bg-slate-800/50 border-slate-700 hover:border-red-500/50'
                  : 'bg-white border-gray-200 hover:border-red-500/50'
              }`}
            >
              <h3 className="text-lg font-semibold mb-1">
                <span className="text-red-500">{pub.id}</span>: {pub.title}
              </h3>
              <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                {pub.status}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Publication;
