import React from 'react';

export const NavLink = ({ href, children }) => {
  return (
    <a 
      href={href} 
      style={{ 
        color: '#374151', 
        textDecoration: 'none', 
        fontWeight: '500',
        fontSize: '16px',
        cursor: 'pointer',
        marginRight: '20px'
      }}
    >
      {children}
    </a>
  );
};