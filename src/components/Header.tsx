import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { Logo } from './Logo';
import { projectCategories } from '../data/projects';
import { Link } from 'react-router-dom';

export function Header() {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isProjectsOpen, setIsProjectsOpen] = useState(false);

  const services = [
    { title: 'Modelos 3D', href: '/servicios/modelos-3d' },
    { title: 'Cubicaciones', href: '/servicios/cubicaciones' },
    { title: 'Presupuestos', href: '/servicios/presupuestos' },
    { title: 'Coordinación BIM', href: '/servicios/coordinacion-bim' }
  ];

  return (
    <header className="fixed w-full bg-black/90 backdrop-blur-sm z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link to="/">
            <Logo />
          </Link>
          <nav className="hidden md:flex space-x-8">
            <Link to="/" className="text-white hover:text-red-600 transition-colors">
              Inicio
            </Link>
            <a href="#about" className="text-white hover:text-red-600 transition-colors">
              Nosotros
            </a>
            <div className="relative group">
              <button 
                className="text-white hover:text-red-600 transition-colors flex items-center space-x-1"
                onClick={() => setIsServicesOpen(!isServicesOpen)}
              >
                <span>Servicios</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              <div className={`absolute top-full right-0 mt-2 w-48 bg-black rounded-lg shadow-xl py-2 ${isServicesOpen ? 'block' : 'hidden'} group-hover:block`}>
                {services.map((service) => (
                  <Link
                    key={service.href}
                    to={service.href}
                    className="block px-4 py-2 text-white hover:bg-red-600 transition-colors"
                  >
                    {service.title}
                  </Link>
                ))}
              </div>
            </div>
            <div className="relative group">
              <button 
                className="text-white hover:text-red-600 transition-colors flex items-center space-x-1"
                onClick={() => setIsProjectsOpen(!isProjectsOpen)}
              >
                <span>Proyectos</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              <div className={`absolute top-full right-0 mt-2 w-64 bg-black rounded-lg shadow-xl py-2 ${isProjectsOpen ? 'block' : 'hidden'} group-hover:block`}>
                {projectCategories.map((category) => (
                  <Link
                    key={category.id}
                    to={`/proyectos/${category.id}`}
                    className="block px-4 py-2 text-white hover:bg-red-600 transition-colors"
                  >
                    {category.title}
                  </Link>
                ))}
              </div>
            </div>
            <a href="#contact" className="text-white hover:text-red-600 transition-colors">
              Contacto
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}