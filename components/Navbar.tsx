import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Button from './Button';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Expertises', href: '#services' },
    { name: 'Projets', href: '#cases' },
    { name: 'Agence', href: '#agency' },
  ];

  return (
    <>
      <nav className="absolute top-0 left-0 w-full z-50 pt-8 pb-4 px-4 md:px-12">
        <div className="max-w-[1920px] mx-auto relative flex justify-between items-center h-20">
          
          {/* Mobile Menu Toggle (Left) */}
          <button className="md:hidden text-brand-dark" onClick={() => setIsOpen(true)}>
            <Menu size={32} />
          </button>

          {/* Desktop Left Links */}
          <div className="hidden md:flex gap-8 w-1/3">
             <a href="#services" className="font-title text-lg text-brand-dark hover:text-white transition-colors">Expertises</a>
             <a href="#cases" className="font-title text-lg text-brand-dark hover:text-white transition-colors">Projets</a>
          </div>

          {/* CENTERED LOGO - Aligned with the global line */}
          <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
             <div className="flex items-center gap-4 bg-brand-secondary px-4 py-2 relative z-20">
                <span className="font-title text-4xl md:text-5xl text-brand-dark font-black tracking-tight">MEL</span>
                <span className="font-title text-5xl md:text-6xl text-brand-primary relative top-1">&</span>
                <span className="font-title text-4xl md:text-5xl text-brand-dark font-black tracking-tight">CO</span>
             </div>
             <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-brand-light mt-[-5px]">Depuis 2015</span>
          </div>

          {/* Desktop Right Links/CTA */}
          <div className="hidden md:flex justify-end w-1/3 gap-8 items-center">
             <a href="#agency" className="font-title text-lg text-brand-dark hover:text-white transition-colors">Agence</a>
             <Button variant="primary" size="sm" onClick={() => window.location.href='#contact'}>
               Contact
             </Button>
          </div>

          {/* Mobile Spacer to balance layout */}
          <div className="md:hidden w-8"></div>
        </div>
      </nav>

      {/* Mobile Menu Fullscreen */}
      {isOpen && (
        <div className="fixed inset-0 z-[60] bg-brand-primary flex flex-col items-center justify-center p-8">
          <button className="absolute top-8 right-8 text-white" onClick={() => setIsOpen(false)}>
            <X size={40} />
          </button>
          <div className="flex flex-col gap-8 text-center">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="font-title text-5xl text-white hover:text-brand-dark transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <a 
              href="#contact" 
              className="mt-8 font-title text-3xl text-brand-dark bg-white px-8 py-4"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;