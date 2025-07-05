
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[var(--color-card-bg)] border-t border-[var(--color-border)]">
      <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row justify-between items-center text-center md:text-left">
        <p className="text-sm text-[var(--color-text-secondary)]">
          &copy; {new Date().getFullYear()} Khan Tahsin Abrar. All Rights Reserved.
        </p>
        <p className="text-sm text-[var(--color-text-secondary)] mt-4 md:mt-0">
          Designed with a passion for innovation. Hosted on GitHub.
        </p>
      </div>
    </footer>
  );
};

export default Footer;