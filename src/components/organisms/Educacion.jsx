import React from 'react';
import { TimelineItem } from '../molecules/TimelineItem';

export const Educacion = () => {
  const education = [
    {
      id: 1,
      title: "Analista programador",
      subtitle: "Duoc uc",
      date: "2025 - en curso",
      description: "Especialización en componentes, consumo de APIs, manejo de estado con Hooks y Testing."
    },
    {
      id: 2,
      title: "Educación básica y media",
      description: "Completa "
    }
  ];

  return (
    <section id="estudios" style={{padding: '60px 106px', backgroundColor: '#f9fafbb4'}}>
      <div style={{maxWidth: '1000px', margin: '0 auto', textAlign: 'left', }}>
        <h2 className="text-3xl font-bold text-gray-800 mb-8 border-b-2 border-gray-200 pb-2">
          Estudios
        </h2>
        <div style={{ flex: 1, textAlign: 'left',padding: '5px 20px',border: '2px solid gray',borderRadius: '5px',backgroundColor: '#efefef' }}>
          {education.map((edu) => (
            <TimelineItem
              key={edu.id}
              title={edu.title}
              subtitle={edu.subtitle}
              date={edu.date}
              description={edu.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};