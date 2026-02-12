import React from 'react';
import { ArrowRight } from 'lucide-react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'white';
  size?: 'sm' | 'md' | 'lg';
  withArrow?: boolean;
}

const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  withArrow = false,
  className = '',
  ...props 
}) => {
  // Styles updated for sharper, bolder look (square corners or slight radius, borders)
  const baseStyles = "inline-flex items-center justify-center font-bold transition-all duration-300 focus:outline-none";
  
  const variants = {
    primary: "bg-brand-primary text-white hover:bg-white hover:text-brand-primary border-2 border-transparent hover:border-brand-primary",
    secondary: "bg-brand-secondary text-brand-dark hover:bg-brand-dark hover:text-white border-2 border-brand-dark",
    outline: "border-2 border-brand-primary text-brand-primary hover:bg-brand-primary hover:text-white",
    white: "bg-white text-brand-primary border-2 border-white hover:bg-brand-primary hover:text-white hover:border-white"
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-8 py-3 text-base",
    lg: "px-10 py-4 text-lg tracking-wide",
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      <span>{children}</span>
      {withArrow && <ArrowRight className="ml-2 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />}
    </button>
  );
};

export default Button;