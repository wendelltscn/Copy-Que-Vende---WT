
import React from 'react';

interface CTAButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  href?: string;
}

const CTAButton: React.FC<CTAButtonProps> = ({ children, className = '', onClick, href = '#offer' }) => {
  const baseClasses = "w-full sm:w-auto text-center inline-block px-10 py-4 text-lg font-bold text-brand-dark uppercase tracking-wider rounded-md shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl focus:outline-none focus:ring-4 focus:ring-brand-gold-light focus:ring-opacity-50";
  const bgClasses = "bg-gradient-to-r from-brand-gold-light to-brand-gold-dark";

  const isExternal = href.startsWith('http');

  return (
    <a
      href={href}
      onClick={onClick}
      className={`${baseClasses} ${bgClasses} ${className}`}
      target={isExternal ? '_blank' : undefined}
      rel={isExternal ? 'noopener noreferrer' : undefined}
    >
      {children}
    </a>
  );
};

export default CTAButton;
