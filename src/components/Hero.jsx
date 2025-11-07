import { useEffect } from 'react';
import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';
import { Rocket, Mail, Github, Linkedin, Sun, Moon } from 'lucide-react';

export default function Hero({ theme, onToggleTheme, onScrollTo }) {
  useEffect(() => {
    const el = document.getElementById('hero-glow');
    if (!el) return;
    el.animate([
      { opacity: 0.4 },
      { opacity: 0.8 },
      { opacity: 0.4 },
    ], { duration: 4000, iterations: Infinity });
  }, []);

  return (
    <section id="home" className="relative min-h-screen w-full overflow-hidden bg-neutral-950 text-white dark:text-white">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
        <div
          className="pointer-events-none absolute inset-0 bg-gradient-to-b from-neutral-900/70 via-neutral-950/40 to-neutral-950/90"
        />
      </div>

      <div className="relative z-10">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
          <div className="flex items-center gap-3">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ type: 'spring', stiffness: 120, damping: 12 }}
              className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-violet-500 to-cyan-400 shadow-lg shadow-cyan-500/20"
            >
              <Rocket size={18} />
            </motion.div>
            <div className="">
              <p className="text-sm text-neutral-300">Portfolio</p>
              <h1 className="text-lg font-semibold tracking-tight text-white">Alex Dev</h1>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <button
              aria-label="Toggle theme"
              onClick={onToggleTheme}
              className="group inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2 backdrop-blur transition hover:bg-white/10"
            >
              {theme === 'dark' ? (
                <Sun className="h-4 w-4 text-amber-300 transition group-hover:rotate-12" />
              ) : (
                <Moon className="h-4 w-4 text-indigo-600 transition group-hover:-rotate-12" />
              )}
              <span className="text-sm text-neutral-200">{theme === 'dark' ? 'Light' : 'Dark'} mode</span>
            </button>
            <a
              href="https://github.com/"
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-white/10 bg-white/5 p-2 text-neutral-200 transition hover:bg-white/10"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-white/10 bg-white/5 p-2 text-neutral-200 transition hover:bg-white/10"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>

      <div className="relative z-10 mx-auto flex min-h-[70vh] max-w-6xl flex-col items-center justify-center px-6 pb-24 pt-10 text-center">
        <div id="hero-glow" className="pointer-events-none absolute -inset-x-20 -top-40 -z-[0] h-[30rem] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-cyan-500/20 via-violet-500/10 to-transparent blur-3xl" />

        <motion.h2
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="mb-4 bg-gradient-to-r from-cyan-300 via-violet-300 to-fuchsia-300 bg-clip-text text-4xl font-extrabold tracking-tight text-transparent sm:text-6xl"
        >
          Building the Web of Today and Tomorrow
        </motion.h2>
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.05 }}
          className="mx-auto mb-8 max-w-3xl text-balance text-base text-neutral-300 sm:text-lg"
        >
          I’m Alex, a final‑year student and full‑stack/Web3 developer. I design and build expressive, performant products with React, Node, and Solidity — with just enough playfulness to make pixels smile.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex flex-wrap items-center justify-center gap-3"
        >
          <button
            onClick={() => onScrollTo('projects')}
            className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-500 to-violet-600 px-5 py-3 text-sm font-medium text-white shadow-lg shadow-violet-500/30 transition hover:shadow-cyan-500/30"
          >
            View Projects
            <Rocket className="h-4 w-4 transition group-hover:translate-x-0.5" />
          </button>
          <button
            onClick={() => onScrollTo('contact')}
            className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm font-medium text-neutral-100 backdrop-blur transition hover:bg-white/10"
          >
            Contact Me
            <Mail className="h-4 w-4" />
          </button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-14 grid w-full gap-6 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur sm:grid-cols-3"
        >
          <div className="col-span-1 mx-auto aspect-square h-28 w-28 overflow-hidden rounded-full ring-2 ring-white/20">
            <div className="h-full w-full bg-gradient-to-br from-fuchsia-400 via-cyan-400 to-emerald-300" />
          </div>
          <div className="col-span-2 text-left">
            <h3 className="mb-1 text-xl font-semibold text-white">About me</h3>
            <p className="text-sm leading-relaxed text-neutral-300">
              I’m passionate about crafting delightful user experiences, scalable systems, and smart contracts. Currently seeking internships or junior roles in full‑stack or Web3 engineering. Fun fact: fueled by caffeine and curiosity.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
