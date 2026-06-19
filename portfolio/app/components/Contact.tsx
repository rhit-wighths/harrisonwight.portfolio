"use client";

import { motion } from "framer-motion";
import { fadeInUp } from "../lib/animations";

const links = [
  { label: "Email", value: "hwight28@gmail.com", href: "mailto:hwight28@gmail.com" },
  { label: "LinkedIn", value: "linkedin.com/in/harrison-wight", href: "https://www.linkedin.com/in/harrison-wight" },
  { label: "GitHub", value: "github.com/rhit-wighths", href: "https://github.com/rhit-wighths" },
];

export default function Contact() {
  return (
    <section id="contact" className="max-w-6xl mx-auto  px-12 py-12 relative">
      {/* <div className="absolute inset-0 rounded-[2rem] bg-[radial-gradient(circle_at_top_left,_rgba(34,211,238,0.12),_transparent_32%),radial-gradient(circle_at_bottom_right,_rgba(168,85,247,0.14),_transparent_40%)] pointer-events-none" />
      <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-b from-slate-950/20 via-transparent to-slate-950/30 pointer-events-none" /> */}

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
        className="relative z-10 rounded-[1.75rem] border border-white/10 bg-gradient-to-br from-white/[0.06] via-slate-900/80 to-slate-950/90 px-8 py-12 text-center shadow-[0_20px_70px_rgba(2,6,23,0.35)] backdrop-blur-xl"
      >
        <p className="text-sm uppercase tracking-[0.3em] text-cyan-400 mb-4">
          Let&apos;s connect
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-5">
          Ready to build something meaningful together?
        </h2>
        <p className="mx-auto max-w-2xl text-lg text-slate-300 leading-8">
          I’m always interested in new opportunities, thoughtful projects, and conversations
          about building products that make an impact.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-5 py-3 text-sm font-medium text-cyan-200 transition hover:border-cyan-400/40 hover:bg-cyan-400/20"
            >
              <span className="text-slate-400">{link.label}: </span>
              {link.value}
            </a>
          ))}
        </div>
      </motion.div>
    </section>
  );
}