import { motion } from 'framer-motion';
import { Code2, Cpu, Database, Brain, Sparkles } from 'lucide-react';

const skills = [
  { name: 'HTML', level: 90 },
  { name: 'CSS / Tailwind', level: 88 },
  { name: 'JavaScript', level: 92 },
  { name: 'React / Next.js', level: 90 },
  { name: 'Node / Express', level: 86 },
  { name: 'Solidity', level: 75 },
  { name: 'Ethers.js', level: 80 },
  { name: 'PostgreSQL / MongoDB', level: 78 },
];

export default function Skills() {
  return (
    <section id="skills" className="relative scroll-mt-20 bg-neutral-950 py-20 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Skills & Superpowers</h2>
            <p className="mt-2 max-w-2xl text-neutral-300">Tools I reach for when shaping ideas into interactive, resilient products.</p>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <div className="space-y-4">
            {skills.map((s, i) => (
              <motion.div
                key={s.name}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.4, delay: i * 0.03 }}
              >
                <div className="mb-1 flex items-center justify-between">
                  <span className="text-sm text-neutral-200">{s.name}</span>
                  <span className="text-xs text-neutral-400">{s.level}%</span>
                </div>
                <div className="h-2 w-full overflow-hidden rounded-full bg-white/10">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${s.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                    className="h-full rounded-full bg-gradient-to-r from-cyan-500 to-violet-600"
                  />
                </div>
              </motion.div>
            ))}
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {[
              { icon: Code2, title: 'Frontend Craft', copy: 'Accessible, animated interfaces with modern patterns.' },
              { icon: Cpu, title: 'Backend Logic', copy: 'APIs that are predictable, secure, and scalable.' },
              { icon: Database, title: 'Data Layer', copy: 'Relational or document — choose what serves the product.' },
              { icon: Brain, title: 'Product Thinking', copy: 'Balance creativity with clarity. Ship with intention.' },
            ].map((c, i) => (
              <motion.div
                key={c.title}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.45, delay: i * 0.05 }}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur"
              >
                <div className="absolute right-0 top-0 h-24 w-24 translate-x-6 -translate-y-6 rounded-full bg-gradient-to-br from-fuchsia-500/20 to-cyan-500/20 blur-xl transition group-hover:scale-110" />
                <c.icon className="mb-3 h-6 w-6 text-cyan-300" />
                <h3 className="mb-1 font-semibold">{c.title}</h3>
                <p className="text-sm text-neutral-300">{c.copy}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="mt-10 flex items-center gap-2 text-sm text-neutral-300">
          <Sparkles className="h-4 w-4 text-fuchsia-300" />
          <p>Soft skills: problem‑solving, teamwork, adaptability, empathy, and clear communication.</p>
        </div>
      </div>
    </section>
  );
}
