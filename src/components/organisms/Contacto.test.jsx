import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { Contacto } from './Contacto';

describe('Componente Contacto', () => {
  it('muestra un mensaje de error si los campos están vacíos al enviar', () => {
    render(<Contacto />);
    
    const botonEnviar = screen.getByRole('button', { name: /enviar mensaje/i });
    fireEvent.click(botonEnviar);

    expect(screen.getByText(/por favor, completa todos los campos/i)).toBeInTheDocument();
  });
});