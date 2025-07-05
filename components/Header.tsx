import React, { useState, useEffect } from 'react';
import { NAV_LINKS, SOCIAL_LINKS } from '../constants';
import ThemeSwitcher from './ThemeSwitcher';

const GitHubIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}>
    <title>GitHub</title>
    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
  </svg>
);

const LinkedInIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}>
      <title>LinkedIn</title>
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.34zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z"></path>
    </svg>
);

const EmailIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
);

const socialIconMap: { [key: string]: React.ReactNode } = {
  GitHub: <GitHubIcon className="w-5 h-5 fill-current" />,
  LinkedIn: <LinkedInIcon className="w-5 h-5 fill-current" />,
  Email: <EmailIcon className="w-5 h-5" />,
};


const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleEmailClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const user = 'khan.tahsin.abrar.kta';
    const domain = 'gmail.com';
    window.location.href = `mailto:${user}@${domain}`;
  };

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-[var(--color-card-bg)]/80 backdrop-blur-sm shadow-md' : 'bg-transparent'}`}>
      <nav className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <a href="/#" className="text-xl font-bold text-[var(--color-primary)] transition-transform hover:scale-105">
          KTA
        </a>
        <div className="hidden md:flex items-center space-x-6">
          {NAV_LINKS.map((link) => (
            <a key={link.name} href={link.href} className="font-medium text-[var(--color-text-secondary)] hover:text-[var(--color-primary)] transition-colors">
              {link.name}
            </a>
          ))}
        </div>
        <div className="flex items-center space-x-4">
          <div className="hidden md:flex items-center space-x-4">
            {SOCIAL_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.url}
                {...(link.name !== 'Email' ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                title={link.name}
                className="text-[var(--color-text-secondary)] hover:text-[var(--color-primary)] transition-colors"
                onClick={link.name === 'Email' ? handleEmailClick : undefined}
              >
                {socialIconMap[link.name]}
              </a>
            ))}
          </div>
          <ThemeSwitcher />
          <button
            className="md:hidden text-[var(--color-text-primary)]"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"} />
            </svg>
          </button>
        </div>
      </nav>
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-[var(--color-card-bg)] pb-4">
          <div className="flex flex-col items-center space-y-4">
            {NAV_LINKS.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="font-medium text-[var(--color-text-secondary)] hover:text-[var(--color-primary)] transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
          </div>
          <div className="mt-6 pt-4 border-t border-[var(--color-border)] flex justify-center items-center space-x-6">
            {SOCIAL_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.url}
                {...(link.name !== 'Email' ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                title={link.name}
                className="text-[var(--color-text-secondary)] hover:text-[var(--color-primary)] transition-colors"
                onClick={(e) => {
                  if (link.name === 'Email') {
                    handleEmailClick(e);
                  }
                  setIsMenuOpen(false);
                }}
              >
                {socialIconMap[link.name]}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;