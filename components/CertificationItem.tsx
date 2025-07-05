import React from 'react';
import type { Certification } from '../types';

const ExternalLinkIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
  </svg>
);

const CertificationItem: React.FC<{ cert: Certification }> = ({ cert }) => {
  const content = (
    <>
      <div className="flex-grow pr-4">
        <h3 className="font-semibold text-md text-[var(--color-text-primary)] group-hover:text-[var(--color-primary)] transition-colors">{cert.name}</h3>
        <p className="text-sm text-[var(--color-text-secondary)]">{cert.issuer}</p>
        {cert.id && <p className="text-xs text-[var(--color-text-secondary)] mt-1 font-mono break-all">ID: {cert.id}</p>}
      </div>
      <div className="flex-shrink-0 flex items-center space-x-4">
        <span className="text-sm font-medium text-[var(--color-text-secondary)]">{cert.year}</span>
        {cert.url && cert.url !== '#' && <ExternalLinkIcon className="w-5 h-5 text-[var(--color-text-secondary)] group-hover:text-[var(--color-primary)] transition-colors" />}
      </div>
    </>
  );

  if (cert.url && cert.url !== '#') {
    return (
      <a 
        href={cert.url} 
        target="_blank" 
        rel="noopener noreferrer" 
        className="group flex justify-between items-start bg-[var(--color-card-bg)] p-4 rounded-lg shadow-sm border border-[var(--color-border)] transition-all duration-300 hover:shadow-lg hover:border-[var(--color-accent)] hover:-translate-y-0.5"
      >
        {content}
      </a>
    );
  }

  return (
    <div className="flex justify-between items-start bg-[var(--color-card-bg)] p-4 rounded-lg shadow-sm border border-[var(--color-border)]">
      {content}
    </div>
  );
};

export default CertificationItem;
