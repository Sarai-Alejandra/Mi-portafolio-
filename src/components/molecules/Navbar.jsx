import React from 'react';
import { NavLink } from '../atoms/NavLink';

export const Navbar = () => {
  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <nav className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <span className="font-bold text-xl text-gray-800"style={{color:'#480707'}} >Mi-Portafolio</span>
        <div className="flex gap-6">
          <NavLink href="#quien-soy">Quién-soy</NavLink>
          <NavLink href="#experiencia">Experiencia</NavLink>
          <NavLink href="#proyectos">Proyectos</NavLink>
          <NavLink href="#contacto">Contacto</NavLink>
        </div>
      </nav>
    </header>
  );
};