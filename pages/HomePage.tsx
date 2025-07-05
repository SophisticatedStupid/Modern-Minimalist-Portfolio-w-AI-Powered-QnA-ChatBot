import React from 'react';
import Home from '../components/Home';
import About from '../components/About';
import Certifications from '../components/Certifications';
import Research from '../components/Research';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import { PROJECTS } from '../constants';

const HomePage: React.FC = () => {
  return (
    <>
      <Home />
      <About />
      <Research />
      <Projects projects={PROJECTS} />
      <Certifications />
      <Contact />
    </>
  );
};

export default HomePage;