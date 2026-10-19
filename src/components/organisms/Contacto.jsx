import React, { useState } from 'react';

export const Contacto = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    //validacion a puro if 
    if (!formData.name || !formData.email || !formData.message) {
      setError('Por favor, completa todos los campos.');
      setSuccess(false);
      return;
    }
    
    if (!formData.email.includes('@')) {
      setError('Por favor, introduce un correo electrónico válido.');
      setSuccess(false);
      return;
    }

    setError('');
    setSuccess(true);
    setFormData({ name: '', email: '', message: '' });
  };

  

  return (
    <section id="contacto" style={{ padding: '60px 100px', backgroundColor: '#e9e9e9'}}>
      <div style={{maxWidth: '1000px', margin: '0 auto', textAlign: 'left'}}>
        <h2 className="text-3xl font-bold text-gray-800 mb-6 border-b-2 border-gray-200 pb-2">
          Contacto
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* informacion de contacto */}
          <div>
            <p className="text-gray-600 mb-6 leading-relaxed ">
              Donde contactarme. 
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '32px' }}>
              <a 
                href="https://www.linkedin.com/jobs/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-blue-600 font-medium hover:underline inline-flex items-center gap-2"
              >
                LinkedIn
              </a>
              <a 
                href="https://github.com/Sarai-Alejandra" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-800 font-medium hover:underline inline-flex items-center gap-2"
              >
                Repositorio GitHub
              </a>
            </div>
          </div>

          {/* formulario de contacto */}
          <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md border border-gray-200 flex flex-col gap-4">
            {error && <p className="text-red-500 text-sm bg-red-50 p-3 rounded">{error}</p>}
            {success && <p className="text-green-600 text-sm bg-green-50 p-3 rounded">¡Mensaje enviado con éxito!</p>}
            
            <div style={{marginBottom:'10px'}}>
              <label className="block text-sm font-medium text-gray-700 mb-1" >Nombre: </label>
              <input 
                type="text" 
                name="name" 
                value={formData.name} 
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                placeholder="Tu nombre"
              />
            </div>
            
            <div style={{marginBottom:'10px'}}>
              <label className="block text-sm font-medium text-gray-700 mb-1">Correo electrónico: </label>
              <input 
                type="email" 
                name="email" 
                value={formData.email} 
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                placeholder="tu@correo.com"
              />
            </div>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', textAlign: 'left' }}>
              <label className="block text-sm font-medium text-gray-700 mb-1">Mensaje: </label>
              <textarea 
                name="message" 
                rows="4" 
                value={formData.message} 
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                placeholder="Escribe tu mensaje..."
              ></textarea>
            </div>
            
            <button 
              type="submit" 
              style={{ margin: '10px', backgroundColor: '#fff',borderRadius: '5px'}}
              className="w-full py-2 bg-blue-600 text-white font-medium rounded hover:bg-blue-700 transition-colors text-sm"
            >
              Enviar Mensaje
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};