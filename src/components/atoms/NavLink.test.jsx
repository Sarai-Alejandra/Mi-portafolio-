import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { NavLink } from './NavLink';

describe('Componente NavLink', () => {
  it('se renderiza correctamente con el texto esperado', () => {
    render(<NavLink href="#quien-soy">Quién soy</NavLink>);
    
    const linkElement = screen.getByText('Quién soy');
    expect(linkElement).toBeInTheDocument();
  });

  it('tiene el atributo href correcto', () => {
    render(<NavLink href="#contacto">Contacto</NavLink>);
    
    const linkElement = screen.getByRole('link', { name: 'Contacto' });
    expect(linkElement).toHaveAttribute('href', '#contacto');
  });
});