import React from 'react';
import Section from '../components/Section';
import { CERTIFICATIONS } from '../constants';
import CertificationItem from '../components/CertificationItem';

const BackArrowIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
    </svg>
);


const CertificationsPage: React.FC = () => {
  return (
    <Section id="certifications-page" title="All Certifications">
      <div className="max-w-3xl mx-auto">
        <a 
          href="/#" 
          className="inline-flex items-center gap-2 mb-8 text-[var(--color-primary)] hover:underline"
        >
            <BackArrowIcon className="w-5 h-5" />
            Back to Home
        </a>
        <div className="space-y-4">
          {CERTIFICATIONS.map((cert, index) => (
            <CertificationItem key={index} cert={cert} />
          ))}
        </div>
      </div>
    </Section>
  );
};

export default CertificationsPage;
