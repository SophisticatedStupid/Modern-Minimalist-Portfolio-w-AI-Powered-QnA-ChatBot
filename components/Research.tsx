import React from 'react';
import Section from './Section';
import { RESEARCH_PAPERS } from '../constants';
import type { ResearchPaper } from '../types';

const ExternalLinkIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
    </svg>
);


const PaperItem: React.FC<{ paper: ResearchPaper }> = ({ paper }) => (
  <div className="bg-[var(--color-card-bg)] p-6 rounded-lg shadow-md border border-[var(--color-border)] transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
    <h3 className="text-xl font-semibold text-[var(--color-primary)]">{paper.title}</h3>
    <p className="text-md text-[var(--color-text-secondary)] mt-2 italic">{paper.journal}, {paper.year}</p>
    <p className="text-sm text-[var(--color-text-secondary)] mt-1">Authors: {paper.authors}</p>
    <a href={paper.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center mt-4 font-medium text-[var(--color-accent)] hover:underline">
      Read Paper <ExternalLinkIcon className="w-4 h-4 ml-2" />
    </a>
  </div>
);

const Research: React.FC = () => {
  return (
    <Section id="research" title="Research Papers">
      <div className="space-y-8">
        {RESEARCH_PAPERS.map((paper, index) => (
          <PaperItem key={index} paper={paper} />
        ))}
      </div>
    </Section>
  );
};

export default Research;
