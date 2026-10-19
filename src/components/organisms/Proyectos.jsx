import React, { useState } from 'react';
import { ProjectCard } from '../molecules/ProyectCard';

export const Proyectos = () => {
  // filtro 
  const [filter, setFilter] = useState('Todos');

  const projectsData = [
    {
      id: 1,
      title: "Pcr2",
      description: "Sistema de inventario para registrar computadores, componentes electrónicos y suministros para reparación y mantenimiento de computadoras",
      category: "React",
      repoUrl: "https://github.com/fmoyam/pcer2-yapur-jara-moya-010D.git"
    },
    
  ];

  // filtrado de datos 
  const filteredProjects = filter === 'Todos' 
    ? projectsData 
    : projectsData.filter(project => project.category === filter);

  return (
    <section id="proyectos" style={{padding: '60px 106px', backgroundColor: '#f9fafbb4'}}>
      <div style={{maxWidth: '1000px', margin: '0 auto', textAlign: 'left'}}>
        <h2 className="text-3xl font-bold text-gray-800 mb-6 border-b-2 border-gray-200 pb-2">
          Desarrollos y Proyectos
        </h2>

        {/* botones */}
        <div>
          {['Todos', 'React', 'Node.js'].map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              style={{ margin: '10px', backgroundColor: '#fff',borderRadius: '5px'}}
              className={`px-4 py-2 rounded-md font-medium text-sm transition-colors ${
                filter === cat 
                  ? 'bg-blue-600 text-white' 
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" style={{ flex: 1, textAlign: 'left',padding: '5px 20px',border: '2px solid gray',borderRadius: '5px',backgroundColor: '#efefef' }}>
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              category={project.category}
              image={project.image}
              repoUrl={project.repoUrl}
            />
          ))}
        </div>
      </div>
    </section>
  );
};