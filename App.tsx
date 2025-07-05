import React, { useState, useEffect } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import CertificationsPage from './pages/CertificationsPage';

const App: React.FC = () => {
  const [route, setRoute] = useState(window.location.hash || '#/');

  useEffect(() => {
    const handleHashChange = () => {
      setRoute(window.location.hash || '#/');
      window.scrollTo(0, 0);
    };
    
    window.addEventListener('hashchange', handleHashChange);
    
    // Handle initial route
    handleHashChange();

    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const renderPage = () => {
    if (route.startsWith('#/certifications')) {
      return <CertificationsPage />;
    }
    return <HomePage />;
  };

  return (
    <ThemeProvider>
      <div className="bg-[var(--color-bg)] text-[var(--color-text-primary)] transition-colors duration-300 ease-in-out">
        <Header />
        <main>
          {renderPage()}
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default App;