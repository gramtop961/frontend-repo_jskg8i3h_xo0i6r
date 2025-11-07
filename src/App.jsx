import { useEffect, useState, useCallback } from 'react';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';

function App() {
  const [theme, setTheme] = useState('dark');

  // initialize theme from system preference
  useEffect(() => {
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    setTheme(prefersDark ? 'dark' : 'light');
  }, []);

  // apply theme class to html element
  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
      root.style.backgroundColor = '#0a0a0a';
    } else {
      root.classList.remove('dark');
      root.style.backgroundColor = '#ffffff';
    }
  }, [theme]);

  const toggleTheme = useCallback(() => {
    setTheme((t) => (t === 'dark' ? 'light' : 'dark'));
  }, []);

  const scrollTo = useCallback((id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, []);

  return (
    <div className="min-h-screen bg-neutral-950 text-white antialiased dark:text-white">
      <Hero theme={theme} onToggleTheme={toggleTheme} onScrollTo={scrollTo} />
      <Projects />
      <Skills />
      <Contact />
      <footer className="bg-neutral-950 py-10 text-center text-sm text-neutral-400">
        <div className="mx-auto max-w-6xl px-6">
          <p>
            © {new Date().getFullYear()} Alex Dev — Crafted with React, Tailwind, and a dash of curiosity.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
