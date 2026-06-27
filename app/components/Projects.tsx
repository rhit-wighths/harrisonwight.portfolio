"use client";
import Tilt from "react-parallax-tilt"
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "../lib/animations"; 

const projects = [
  {
    title: "MLB Matchup Analyzer",
    desc: "Predicts game winner based on pitcher vs batter stats.",
    tech: ["Python", "Pandas", "scikit-learn", "ML"],
    link: "#",
  },
  {
    title: "Personal Portfolio",
    desc: "Showcases my projects and experience with a custom design.",
    tech: ["TypeScript","Next.js", "Tailwind CSS", "Framer Motion", "Three.js"],
    link: "#",
  },
  {
    title: "FIow",
    desc: "An application for tracking and analyzing the flow of income and expenses.",
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
  },
  {
    title: "Wedding Website",
    desc: "A website built for my brother's wedding to share details and collect RSVPs.",
    tech: ["HTML", "CSS", "JavaScript", "Firebase", "Google Maps API"],
    link: "#",
  }
];

export default function Projects() {
  return (
    <motion.section
      id="projects"
      className="max-w-6xl mx-auto px-12 py-24 relative overflow-hidden"
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      animate="visible"
      viewport={{ once: true }}
    >
      {/* <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-slate-950/70 via-slate-950/25 to-transparent pointer-events-none" />
      <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-slate-950/70 via-slate-950/25 to-transparent pointer-events-none" /> */}
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
            glareBorderRadius="1.5rem"
            className="group overflow-hidden rounded-3xl bg-[#111117] "
          >
            <motion.div
              variants={fadeInUp}
              className="relative h-full overflow-hidden rounded-3xl border border-white/5 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 p-8 transition duration-300 ease-out hover:-translate-y-1 hover:border-cyan-500/30"
            >
              <div className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-white/10 to-transparent pointer-events-none" />
              <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-slate-950/60 to-transparent pointer-events-none" />
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

              {/* <a
                href={p.link}
                className="mt-6 inline-flex items-center text-sm font-medium text-cyan-400 hover:text-cyan-300"
              >
                View project
              </a> */}
            </motion.div>
          </Tilt>
        ))}
      </div>
    </motion.section>
  );
}