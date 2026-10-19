import React from 'react';

export const ProjectCard = ({ title, description, image, repoUrl, category }) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden border border-gray-200 shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col justify-between">
      <div>
        <div className="h-48 w-full bg-gray-200 overflow-hidden">
          <img 
            src={image} 
            alt={title} 
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </div>
        <div className="p-5">
          <span className="text-xs font-semibold uppercase tracking-wider text-blue-600 bg-blue-50 px-2 py-1 rounded">
            {category}
          </span>
          <h3 className="text-xl font-bold text-gray-800 mt-2 mb-2">{title}</h3>
          <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
        </div>
      </div>
      
      <div className="p-5 pt-0">
        <a 
          href={repoUrl} 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center w-full px-4 py-2 bg-gray-900 text-white font-medium text-sm rounded hover:bg-gray-800 transition-colors"
        >
          Ver en GitHub
        </a>
      </div>
    </div>
  );
};