import React from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  delay?: number;
  bg?: 'white' | 'light' | 'dark' | 'pink' | 'none';
  fullWidth?: boolean;
}

const Section: React.FC<SectionProps> = ({ 
  children, 
  className = '', 
  id, 
  delay = 0, 
  bg = 'none',
  fullWidth = false 
}) => {
  const { elementRef, isVisible } = useIntersectionObserver({ threshold: 0.1 });

  const bgClasses = {
    white: 'bg-brand-light',
    light: 'bg-brand-secondary/10',
    dark: 'bg-brand-dark text-white',
    pink: 'bg-brand-primary text-white',
    none: ''
  };

  const paddingClasses = fullWidth ? '' : 'py-20 md:py-32';

  return (
    <section 
      id={id}
      ref={elementRef}
      className={`relative overflow-hidden ${bgClasses[bg]} ${paddingClasses} ${className}`}
    >
      <div 
        className={`transition-all duration-1000 ease-out transform ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
        }`}
        style={{ transitionDelay: `${delay}ms` }}
      >
        {children}
      </div>
    </section>
  );
};

export default Section;