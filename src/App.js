import './App.css';

import Header from './components/header';
import Footer from './components/footer';
import Home from './pages/home';
import { useEffect, useState } from 'react';

function App() {
  const [isDark, setIsDark] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    document.title = 'Kabelo Selomo | Curriculum Vitae';

    const updateScrollProgress = () => {
      const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = scrollableHeight > 0 ? (window.scrollY / scrollableHeight) * 100 : 0;
      setScrollProgress(progress);
    };

    updateScrollProgress();
    window.addEventListener('scroll', updateScrollProgress, { passive: true });

    return () => window.removeEventListener('scroll', updateScrollProgress);
  }, []);

  return (
    <div className={`app-shell${isDark ? ' dark' : ''}`}>
      <div className="scroll-progress" style={{ width: `${scrollProgress}%` }} aria-hidden="true" />
      <Header isDark={isDark} onToggleTheme={() => setIsDark((current) => !current)} />
      <main className="page-main"><Home /></main>
      <Footer />
      </div>
  );
}

export default App;