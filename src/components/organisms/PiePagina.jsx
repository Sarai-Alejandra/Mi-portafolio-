import React from 'react';

export const PiePagina = () => {
  const currentYear = new Date().getFullYear(); // Calculo del año

  return (
    <footer className="bg-gray-900 text-white py-8 px-6 text-center">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        <div>
          <p className="font-bold text-lg">MiPortafolio</p>
          <p className="text-gray-400 text-sm">Desarrollador Front-End</p>
        </div>
        <p className="text-gray-400 text-sm">
          © {currentYear} Todos los derechos reservados 🐎.
        </p>
      </div>
    </footer>
  );
};