
import React from 'react';

interface SectionWrapperProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

const SectionWrapper: React.FC<SectionWrapperProps> = ({ children, className = '', id }) => {
  return (
    <section id={id} className={`py-20 sm:py-24 ${className}`}>
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        {children}
      </div>
    </section>
  );
};

export default SectionWrapper;
