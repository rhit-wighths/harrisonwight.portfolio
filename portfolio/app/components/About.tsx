"use client";

import { motion } from "framer-motion";
import { fadeInUp } from "../lib/animations";

const highlights = [
  "Full-stack product development",
  "Data-driven applications",
  "Clean, thoughtful UI design",
  "Sports analytics and automation",
];

export default function About() {
  return (
    <section id="about" className="max-w-6xl mx-auto px-12 py-24 pb-36 relative overflow-hidden">
      {/* <div className="absolute inset-0 rounded-[2rem] bg-[radial-gradient(circle_at_top_left,_rgba(34,211,238,0.12),_transparent_32%),radial-gradient(circle_at_bottom_right,_rgba(168,85,247,0.14),_transparent_40%)] pointer-events-none" />
      <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-slate-950/70 via-slate-950/25 to-transparent pointer-events-none" />
      <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-slate-950/70 via-slate-950/25 to-transparent pointer-events-none" />
      <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-b from-slate-950/20 via-transparent to-slate-950/30 pointer-events-none" /> */}

      <div className="relative z-10 grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <p className="text-sm uppercase tracking-[0.3em] text-cyan-400 mb-4">
            About Me
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            I build software that turns ideas into useful, polished experiences.
          </h2>
          <p className="text-lg text-slate-300 leading-8 max-w-2xl">
            I’m a software engineer who enjoys creating thoughtful tools across the stack,
            from intuitive frontends to reliable backend systems. My work often sits at the
            intersection of product thinking, analytics, and clean engineering.
          </p>
          <p className="text-lg text-slate-300 leading-8 max-w-2xl mt-4">
            I’m especially drawn to projects that solve real problems with clarity and
            measurable impact, whether that means improving workflows, surfacing insights,
            or making complex systems easier to use.
          </p>

          <div className="flex flex-wrap gap-3 mt-8">
            {highlights.map((item) => (
              <span
                key={item}
                className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-200"
              >
                {item}
              </span>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="relative overflow-hidden rounded-[1.5rem] border border-white/10 bg-gradient-to-br from-white/[0.06] via-slate-900/80 to-slate-950/90 p-8 shadow-[0_20px_70px_rgba(2,6,23,0.35)] backdrop-blur-xl"
        >
          <div className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-white/10 to-transparent pointer-events-none" />
          <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-slate-950/60 to-transparent pointer-events-none" />
          <h3 className="text-xl font-semibold text-white mb-5">What I bring</h3>
          <ul className="space-y-3 text-slate-300">
            <li className="flex items-start">
              <span className="text-cyan-400 mr-3 mt-1">•</span>
              <span>Strong problem-solving skills with a focus on practical, user-centered solutions.</span>
            </li>
            <li className="flex items-start">
              <span className="text-cyan-400 mr-3 mt-1">•</span>
              <span>Experience building polished interfaces and reliable applications across modern stacks.</span>
            </li>
            <li className="flex items-start">
              <span className="text-cyan-400 mr-3 mt-1">•</span>
              <span>A collaborative mindset shaped by working with cross-functional teams and fast-moving projects.</span>
            </li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
}