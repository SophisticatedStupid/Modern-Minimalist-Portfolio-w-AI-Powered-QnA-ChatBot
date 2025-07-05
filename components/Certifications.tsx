import React from 'react';
import Section from './Section';
import { CERTIFICATIONS } from '../constants';
import CertificationItem from './CertificationItem';

const Certifications: React.FC = () => {
  const displayedCerts = CERTIFICATIONS.slice(0, 5);

  return (
    <Section id="certifications" title="Recent Certifications">
      <div className="max-w-3xl mx-auto space-y-4">
        {displayedCerts.map((cert, index) => (
          <CertificationItem key={index} cert={cert} />
        ))}
      </div>
      <div className="text-center mt-12">
        <a 
          href="#/certifications" 
          className="inline-block px-6 py-3 border-2 border-[var(--color-primary)] text-[var(--color-primary)] font-semibold rounded-lg shadow-sm hover:shadow-lg hover:bg-[var(--color-primary)] hover:text-white transform transition-all duration-300"
        >
          View All Certifications
        </a>
      </div>
    </Section>
  );
};

export default Certifications;