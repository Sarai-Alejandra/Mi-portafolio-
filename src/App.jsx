import React from 'react';
import { Navbar } from './components/molecules/Navbar';
import { QuienSoy } from './components/organisms/QuienSoy';
import { Experiencia } from './components/organisms/Experiencia';
import { Educacion } from './components/organisms/Educacion';
import { Proyectos } from './components/organisms/Proyectos';
import { Contacto } from './components/organisms/Contacto';
import { PiePagina } from './components/organisms/PiePagina';

export const App = () => {
  return (
    <div className="bg-white">
      {/* barra de navegacion que ahora si funciona */}
      <Navbar />
      
      {/* contenido principal */}
      <main>
        <QuienSoy />
        <Experiencia/>
        <Educacion/>
        <Proyectos />
        <Contacto/>
        <PiePagina/>
        
      </main>
    </div>
  );
};

export default App;