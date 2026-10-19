import React from 'react';

export const TimelineItem = ({ title, subtitle, date, description }) => {
  return (
    <div className="mb-8 relative pl-6 border-l-2 border-blue-500">
      <div className="absolute -left-[9px] top-1 w-4 h-4 bg-blue-500 rounded-full border-2 border-white"></div>
      <h3 className="text-xl font-bold text-gray-800">{title}</h3>
      <span className="text-sm text-blue-600 font-semibold">{subtitle}</span>
      <p className="text-xs text-gray-400 mb-2">{date}</p>
      {description && <p className="text-gray-600 text-sm">{description}</p>}
    </div>
  );
};