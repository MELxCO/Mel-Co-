import React from 'react';
import { Instagram, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-dark text-brand-light py-12 border-t border-brand-primary relative z-10">
      <div className="max-w-[1920px] mx-auto px-4 md:px-12 flex flex-col md:flex-row justify-between items-center gap-8">
        
        <div className="text-center md:text-left">
           <h4 className="font-title text-2xl mb-2">MEL&CO PARIS</h4>
           <p className="text-sm opacity-60">24 Avenue des Champs-Élysées, 75008 Paris</p>
        </div>

        <div className="flex gap-6">
           <a href="#" className="hover:text-brand-primary transition-colors"><Instagram /></a>
           <a href="#" className="hover:text-brand-primary transition-colors"><Linkedin /></a>
        </div>

        <div className="text-center md:text-right text-xs opacity-50 uppercase tracking-widest">
           © 2026 Mel&Co. <br/> Design Inspired by Opening Line.
        </div>
      </div>
    </footer>
  );
};

export default Footer;