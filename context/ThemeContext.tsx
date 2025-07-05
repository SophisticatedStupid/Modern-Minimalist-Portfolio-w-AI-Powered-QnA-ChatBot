
import React, { createContext, useState, useEffect, useMemo, ReactNode } from 'react';
import { Theme, Mode } from '../types';

interface ThemeContextType {
  theme: Theme;
  mode: Mode;
  setTheme: (theme: Theme) => void;
  setMode: (mode: Mode) => void;
  toggleMode: () => void;
}

export const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>(() => {
    return (localStorage.getItem('portfolio-theme') as Theme) || Theme.Golden;
  });
  
  const [mode, setMode] = useState<Mode>(() => {
    const storedMode = localStorage.getItem('portfolio-mode') as Mode;
    if (storedMode) return storedMode;
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
      ? Mode.Dark
      : Mode.Light;
  });

  useEffect(() => {
    const root = window.document.documentElement;
    root.setAttribute('data-theme', theme);
    root.setAttribute('data-mode', mode);
    localStorage.setItem('portfolio-theme', theme);
    localStorage.setItem('portfolio-mode', mode);
  }, [theme, mode]);

  const toggleMode = () => {
    setMode((prevMode) => (prevMode === Mode.Light ? Mode.Dark : Mode.Light));
  };

  const value = useMemo(() => ({ theme, mode, setTheme, setMode, toggleMode }), [theme, mode]);

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
};
