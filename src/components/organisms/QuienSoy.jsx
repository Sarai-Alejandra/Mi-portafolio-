import React from 'react';

export const QuienSoy = () => {
  return (
    <section id="quien-soy" style={{ padding: '50px 20px 60px 20px', backgroundColor: '#e7d9d9' }}>
      {/* contenedor para ajutar la foto y el texto*/}
      <div 
        style={{ 
          maxWidth: '900px', 
          margin: '0 auto', 
          display: 'flex', 
          flexDirection: 'row', 
          alignItems: 'center', 
          justify: 'flex-start',
          gap: '40px',
          textAlign: 'left'
        }}
      >
        
        {/* foto */}
        <div style={{ flexShrink: 0 }}>
          <img 
            src="https://i.pinimg.com/originals/91/09/79/910979a5f0722da3fccb2e1032dc3100.jpg" 
            alt="Foto de perfil"
            style={{ 
              width: '180px', 
              height: '180px', 
              borderRadius: '50%', 
              objectFit: 'cover',
              border: '3px solid #e5e7eb',
              boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
            }}
          />
        </div>

    
        <div style={{ flex: 1, textAlign: 'left' }}>
          <h2 style={{ fontSize: '32px', fontWeight: 'bold', color: '#1f2937', marginBottom: '16px', textAlign: 'left' }}>
            Quién soy
          </h2>
          <p style={{ fontSize: '18px', color: '#4b5563', lineHeight: '1.6', marginBottom: '12px' }}>
            Hola, soy una estudiante cursando el segundo año de la carrera técnica analista programador.
          </p>
          <p style={{ fontSize: '18px', color: '#4b5563', lineHeight: '1.6' }}>
            Apasionada por el desarrollo web, el diseño de interfaces funcionales y la aplicación de buenas prácticas de programación.
          </p>
        </div>

      </div>
    </section>
  );
};