import React from 'react';

const Home: React.FC = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center text-center px-4">
      <div className="space-y-4">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight">
          Khan Tahsin Abrar
        </h1>
        <p className="max-w-4xl mx-auto text-lg md:text-xl lg:text-2xl text-[var(--color-text-secondary)]">
          Aspiring Self-Driven Researcher & Innovator |  AI Engineer | Cybersecurity Specialist
        </p>
        <div className="pt-6">
          <a
            href="#projects"
            className="px-8 py-3 bg-[var(--color-primary)] text-white font-semibold rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transform transition-all duration-300"
          >
            View My Work
          </a>
        </div>
      </div>
    </section>
  );
};

export default Home;
