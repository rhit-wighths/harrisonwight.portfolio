"use client";
import Tilt from "react-parallax-tilt"
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "../lib/animations"; 

const projects = [
  {
    title: "MLB Matchup Analyzer",
    desc: "Analyzes pitcher vs batter stats with API integration.",
    tech: ["Python", "APIs", "Pandas"],
    link: "#",
  },
  {
    title: "Personal Portfolio",
    desc: "Showcases my projects and experience with a custom design.",
    tech: ["Next.js", "Tailwind CSS", "Framer Motion", "Three.js"],
    link: "#",
  },
  {
    title: "Personal Finance Dashboard",
    desc: "An application for tracking and analyzing personal financial data.",
    tech: ["React", "Tailwind CSS"],
    link: "#",
  },
  {
    title: "RetireSimple",
    desc: "A retirement planning tool that helps users calculate savings goals and investment strategies.",
    tech: ["React", "Node.js", "Express", "MongoDB", "C#"],
    link: "#",
  },
  {
    title: "Land Navigation System",
    desc: "A tool for building and printing land navigation exams onto word documents, with a minimum distance algorithm between points to discourage collaboration.",
    tech: ["Python", "python-docx"],
    link: "#",
  },
  {
    title: "Genetic Algorithm",
    desc: "A Java simulation of a population over a certain number of generations. The user can save and load individual chromosomes or display a population's fitness.",
    tech: ["Java"],
    link: "#",
  }
];

export default function Projects() {
  return (
    <motion.section
      id="projects"
      className="max-w-6xl mx-auto px-6 py-24"
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      animate="visible"
      viewport={{ once: true }}
    >
      <motion.h2
        className="text-3xl md:text-4xl font-bold mb-12 text-white"
        variants={fadeInUp}
      >
        Featured Projects
      </motion.h2>

      <div className="grid gap-8 sm:grid-cols-2 xl:grid-cols-3">
        {projects.map((p) => (
          <Tilt
            key={p.title}
            tiltMaxAngleX={10}
            tiltMaxAngleY={10}
            perspective={1000}
            transitionSpeed={500}
            scale={1.02}
            glareEnable={true}
            glareMaxOpacity={0.2}
            className="group rounded-3xl bg-[#111117] shadow-[0_25px_80px_rgba(0,0,0,0.25)]"
          >
            <motion.div
              variants={fadeInUp}
              className="h-full rounded-3xl border border-white/5 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 p-8 transition duration-300 ease-out hover:-translate-y-1 hover:border-cyan-500/30"
            >
              <h3 className="text-xl font-semibold text-white">{p.title}</h3>
              <p className="text-sm text-slate-400 mt-3 leading-7">{p.desc}</p>

              <div className="mt-6 flex flex-wrap gap-2">
                {p.tech.map((t) => (
                  <span
                    key={t}
                    className="text-[11px] uppercase tracking-[0.18em] bg-white/5 px-3 py-1 rounded-full text-slate-300"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <a
                href={p.link}
                className="mt-6 inline-flex items-center text-sm font-medium text-cyan-400 hover:text-cyan-300"
              >
                View project
              </a>
            </motion.div>
          </Tilt>
        ))}
      </div>
    </motion.section>
  );
}