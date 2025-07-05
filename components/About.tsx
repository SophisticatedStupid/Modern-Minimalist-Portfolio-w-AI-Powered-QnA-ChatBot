
import React from 'react';
import Section from './Section';

const About: React.FC = () => {
  return (
    <Section id="about" title="About Me">
      <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16">
        <div className="w-48 h-48 md:w-60 md:h-60 rounded-full overflow-hidden shadow-lg flex-shrink-0 border-4 border-[var(--color-primary)]">
          <img 
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=240&h=240&fit=crop&q=80" 
            alt="Khan Tahsin Abrar" 
            className="w-full h-full object-cover" 
          />
        </div>
        <div className="text-center md:text-left text-lg text-[var(--color-text-secondary)] leading-relaxed">
          <p>
            I am a passionate and driven student with a profound interest in the intersection of artificial intelligence, research, robotics, and sustainable technology. From a young age, I've been captivated by the challenge of solving complex problems and creating innovative solutions that can make a tangible impact on the world.
          </p>
          <p className="mt-4">
            My goal is to leverage my skills in robotics development, multidisciplinary and machine learning to contribute to groundbreaking research and development. I thrive in collaborative environments and am always eager to learn. I am seeking to join a world-class institution to immerse myself in a community of thinkers and builders who share my passion for pushing the boundaries of technology and innovation.
          </p>
        </div>
      </div>
    </Section>
  );
};

export default About;