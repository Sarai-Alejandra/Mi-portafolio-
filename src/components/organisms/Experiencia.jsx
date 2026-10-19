import React from 'react';
import { TimelineItem } from '../molecules/TimelineItem';

export const Experiencia = () => {
  return (
    <section id="experiencia" style={{ padding: '60px 20px', backgroundColor: '#ffffff' }}>
      <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'left' }}>
        <h2 className="text-3xl font-bold text-gray-800 mb-8 border-b-2 border-gray-200 pb-2" style={{ textAlign: 'left' }}>
          Experiencia Laboral
        </h2>
        
        
        <div 
          style={{ 
            display: 'flex', 
            flexDirection: 'row', 
            gap: '32px', 
            justifyContent: 'flex-start',
            alignItems: 'flex-start',
            textAlign: 'left'
          }}
        >
          
          <div style={{ flex: 1, textAlign: 'left',padding: '5px 20px',border: '2px solid gray',borderRadius: '5px',backgroundColor: '#efefef' }}>
            <h3 className="text-gray-800 font-bold text-lg leading-relaxed">Ayudante de cocina</h3>
            <p className='text-gray-500 text-sm leading-relaxed mb-2'>2019 - 2022</p>
            <p className='text-gray-600 leading-relaxed'>
              Fui ayudante de cocina en un restaurante chino durante 4 años, trabajando solo los fines de semana.
            </p>
          </div>

          
          <div style={{ flex: 1, textAlign: 'left',padding: '5px 20px',border: '2px solid gray',borderRadius: '5px', backgroundColor: '#efefef' }}>
            <h3 className="text-gray-800 font-bold text-lg leading-relaxed">Vendedora</h3>
            <p className='text-gray-500 text-sm leading-relaxed mb-2'>2019 - 2021</p>
            <p className='text-gray-600 leading-relaxed'>
              Trabajé como vendedora de una tienda y en puestos de feria durante la época de pandemia.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};