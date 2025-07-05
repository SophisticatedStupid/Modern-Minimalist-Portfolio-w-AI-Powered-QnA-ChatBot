
import React, { useContext, useState, useRef, useEffect } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import { Theme, Mode } from '../types';

const SunIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
  </svg>
);

const MoonIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
  </svg>
);

const PaletteIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
    </svg>
);


const ThemeSwitcher: React.FC = () => {
  const context = useContext(ThemeContext);
  const [isThemeMenuOpen, setIsThemeMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsThemeMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);
  
  if (!context) return null;

  const { theme, mode, setTheme, toggleMode } = context;

  const themes = [
      { id: Theme.Golden, name: 'Golden', color: '#FFD700' },
      { id: Theme.Silver, name: 'Silver', color: '#C0C0C0' },
      { id: Theme.Metallic, name: 'Metallic', color: '#A0AEC0' },
  ];

  return (
    <div className="flex items-center space-x-2">
      <button onClick={toggleMode} className="p-2 rounded-full text-[var(--color-text-secondary)] hover:bg-[var(--color-border)] transition-colors" aria-label="Toggle light/dark mode">
        {mode === Mode.Light ? <MoonIcon className="w-5 h-5" /> : <SunIcon className="w-5 h-5" />}
      </button>
      <div className="relative" ref={menuRef}>
        <button onClick={() => setIsThemeMenuOpen(!isThemeMenuOpen)} className="p-2 rounded-full text-[var(--color-text-secondary)] hover:bg-[var(--color-border)] transition-colors" aria-label="Change theme">
          <PaletteIcon className="w-5 h-5 text-[var(--color-primary)]" />
        </button>
        {isThemeMenuOpen && (
          <div className="absolute right-0 mt-2 w-36 bg-[var(--color-card-bg)] rounded-md shadow-lg border border-[var(--color-border)] py-1">
            {themes.map((t) => (
              <button
                key={t.id}
                onClick={() => { setTheme(t.id); setIsThemeMenuOpen(false); }}
                className={`w-full text-left px-4 py-2 text-sm flex items-center space-x-2 ${
                  theme === t.id ? 'text-[var(--color-primary)]' : 'text-[var(--color-text-secondary)]'
                } hover:bg-[var(--color-border)] transition-colors`}
              >
                <span className="w-4 h-4 rounded-full" style={{ backgroundColor: t.color }}></span>
                <span>{t.name}</span>
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ThemeSwitcher;
