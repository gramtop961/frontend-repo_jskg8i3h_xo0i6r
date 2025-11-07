import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: 'DeFi Dashboard',
    desc: 'Real-time portfolio tracking and on-chain analytics with wallet connect.',
    stack: ['Next.js', 'Tailwind', 'Ethers.js', 'The Graph'],
    live: 'https://example.com',
    code: 'https://github.com/',
  },
  {
    title: 'Full‑stack Task Hub',
    desc: 'Collaborative tasks with auth, real-time updates and file previews.',
    stack: ['React', 'Node', 'Socket.io', 'PostgreSQL'],
    live: 'https://example.com',
    code: 'https://github.com/',
  },
  {
    title: 'NFT Minting Studio',
    desc: 'Collection generator, metadata upload, and gas‑optimized minting UX.',
    stack: ['Solidity', 'Hardhat', 'IPFS', 'RainbowKit'],
    live: 'https://example.com',
    code: 'https://github.com/',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative scroll-mt-20 bg-neutral-950 py-20 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Selected Projects</h2>
            <p className="mt-2 max-w-2xl text-neutral-300">A mix of full‑stack, Web3, and UI‑focused experiments. Built with care and curiosity.</p>
          </div>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur"
            >
              <div className="absolute right-0 top-0 h-32 w-32 translate-x-10 -translate-y-10 rounded-full bg-gradient-to-br from-cyan-500/20 to-fuchsia-500/20 blur-2xl transition group-hover:scale-110" />
              <div className="mb-4 flex items-center justify-between">
                <h3 className="text-lg font-semibold">{p.title}</h3>
                <div className="flex gap-2">
                  <a href={p.code} target="_blank" rel="noreferrer" className="rounded-full border border-white/10 bg-white/5 p-2 text-neutral-200 transition hover:bg-white/10" aria-label="GitHub">
                    <Github className="h-4 w-4" />
                  </a>
                  <a href={p.live} target="_blank" rel="noreferrer" className="rounded-full border border-white/10 bg-white/5 p-2 text-neutral-200 transition hover:bg-white/10" aria-label="Live demo">
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </div>
              </div>
              <p className="mb-4 text-sm text-neutral-300">{p.desc}</p>
              <div className="flex flex-wrap gap-2">
                {p.stack.map((t) => (
                  <span key={t} className="rounded-full border border-white/10 bg-white/5 px-2 py-1 text-xs text-neutral-200">{t}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
