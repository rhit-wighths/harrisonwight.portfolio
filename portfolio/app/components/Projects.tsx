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
    desc: "A tool for building and printing land navigationexams onto word documents, with a minimum distance algorithm between points to discourage collaboration.",
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
      className="max-w-4xl mx-auto px-6 py-24"
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      animate="visible"
      viewport={{once: true}}
    >
      <motion.h2
        className="text-3xl font-bold mb-12"
        variants={fadeInUp}
      >
        Featured Projects
      </motion.h2>
      <div className="flex flex-wrap max-w-xl min-w-xl min-h-[200px] gap-8">
        {projects.map((p, i) => (
          <Tilt
            key={i}
            tiltMaxAngleX={10}
            tiltMaxAngleY={10}
            perspective={1000}
            transitionSpeed={500}
            scale={1.02}
            glareEnable={true}
            glareMaxOpacity={0.2}
            className="rounded-2xl min-h-[200px] max-w-md bg-[#111117]"
          >
          <motion.div
            // className="p-8 bg-[#111117] rounded-2xl hover:scale-[1.02] transition"
            variants={fadeInUp}
            className="p-8 bg-[#111117] rounded-2xl transition"
          >
            <h3 className="text-xl font-semibold">{p.title}</h3>
            <p className="text-gray-400 mt-2">{p.desc}</p>
            <div className="mt-4 flex gap-2">
              {p.tech.map((t, i) => (
                <span
                  key={i}
                  className="text-sm bg-gray-800 px-3 py-1 rounded-full"
                >
                  {t}
                </span>
              ))}
            </div>
          </motion.div>
            </Tilt>
        ))}
      </div>
    </motion.section>
  );
}