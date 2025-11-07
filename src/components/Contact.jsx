import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, Twitter, Send, Hand } from 'lucide-react';

export default function Contact() {
  const onSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form));
    alert(`Thanks ${data.name}! I\n\nI got your message and will reply to ${data.email} soon.`);
    form.reset();
  };

  return (
    <section id="contact" className="relative scroll-mt-20 bg-neutral-950 py-20 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-10">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Let’s build something fun</h2>
          <p className="mt-2 max-w-2xl text-neutral-300">Open to internships, junior roles, and collaborations. My inbox is always open.</p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          <motion.form
            onSubmit={onSubmit}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
            className="space-y-4 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur"
          >
            <div>
              <label className="mb-1 block text-sm text-neutral-300">Name</label>
              <input name="name" required className="w-full rounded-lg border border-white/10 bg-neutral-900/60 px-3 py-2 text-sm text-white outline-none ring-0 placeholder:text-neutral-500 focus:border-cyan-500" placeholder="Jane Doe" />
            </div>
            <div>
              <label className="mb-1 block text-sm text-neutral-300">Email</label>
              <input type="email" name="email" required className="w-full rounded-lg border border-white/10 bg-neutral-900/60 px-3 py-2 text-sm text-white outline-none ring-0 placeholder:text-neutral-500 focus:border-cyan-500" placeholder="jane@domain.com" />
            </div>
            <div>
              <label className="mb-1 block text-sm text-neutral-300">Message</label>
              <textarea name="message" required rows="5" className="w-full rounded-lg border border-white/10 bg-neutral-900/60 px-3 py-2 text-sm text-white outline-none ring-0 placeholder:text-neutral-500 focus:border-cyan-500" placeholder="Tell me about your idea…" />
            </div>
            <button type="submit" className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-500 to-violet-600 px-5 py-3 text-sm font-medium text-white shadow-lg shadow-violet-500/30 transition hover:shadow-cyan-500/30">
              Send Message
              <Send className="h-4 w-4" />
            </button>
            <p className="text-xs text-neutral-400">By the way, here’s a fun sign‑off <span className="inline-flex items-center gap-1"><Hand className="h-3 w-3" />👋</span> — talk soon!</p>
          </motion.form>

          <div className="space-y-4">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
              <p className="text-sm text-neutral-300">Prefer socials?</p>
              <div className="mt-3 flex gap-3">
                <a href="https://github.com/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2 text-sm text-neutral-200 transition hover:bg-white/10"><Github className="h-4 w-4" /> GitHub</a>
                <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2 text-sm text-neutral-200 transition hover:bg-white/10"><Linkedin className="h-4 w-4" /> LinkedIn</a>
                <a href="https://twitter.com/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2 text-sm text-neutral-200 transition hover:bg-white/10"><Twitter className="h-4 w-4" /> X</a>
              </div>
            </div>
            <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-fuchsia-500/10 to-cyan-500/10 p-6 text-sm text-neutral-300">
              Tip: scroll with intent — sections glide smoothly and little icons react when hovered. Subtle motion makes the experience feel alive, without shouting.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
