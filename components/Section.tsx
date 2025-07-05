
import React from 'react';

interface SectionProps {
  id: string;
  title: string;
  children: React.ReactNode;
  className?: string;
}

const Section: React.FC<SectionProps> = ({ id, title, children, className = '' }) => {
  return (
    <section id={id} className={`w-full max-w-5xl mx-auto px-6 py-16 md:py-24 ${className}`}>
      <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
        <span className="text-[var(--color-primary)]">{title.charAt(0)}</span>{title.slice(1)}
      </h2>
      {children}
    </section>
  );
};

export default Section;
