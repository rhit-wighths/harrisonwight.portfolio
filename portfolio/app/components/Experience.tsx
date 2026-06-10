"use client";

import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import { fadeInUp } from "../lib/animations";
// import { section } from "framer-motion/m";

const experience = [
    {
        title: "Software Consultant",
        company: "Edgile - a Wipro Company",
        dates: "June 2024–Present",
        responsibilities: [
                "Improved API performance by 35%",
                "Built analytics tools",
        ],
    },
    {
        title: "Software Engineer Intern",
        company: "Telemetry Sports",
        dates: "June 2022–August 2023",
        responsibilities: [
                "Developed a new feature that increased user engagement by 20%",
                "Collaborated with cross-functional teams to design and implement solutions",
        ],
    }];


export default function Experience() {
    return (
        <section className="max-w-6xl mx-auto px-12 py-24 relative overflow-hidden">
            <div className="absolute inset-0 rounded-[2rem] bg-[radial-gradient(circle_at_top_left,_rgba(34,211,238,0.12),_transparent_32%),radial-gradient(circle_at_bottom_right,_rgba(168,85,247,0.14),_transparent_40%)] pointer-events-none" />
            <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-slate-950/70 via-slate-950/25 to-transparent pointer-events-none" />
            <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-slate-950/70 via-slate-950/25 to-transparent pointer-events-none" />
            <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-b from-slate-950/20 via-transparent to-slate-950/30 pointer-events-none" />
            
            <motion.h2
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                className="text-3xl md:text-4xl font-bold mb-12 text-white relative z-10"
            >
                Experience
            </motion.h2>
            <div className="space-y-8 relative z-10">
                {experience.map((exp, i) => (
                    <Tilt
                        key={i}
                        tiltMaxAngleX={5}
                        tiltMaxAngleY={5}
                        perspective={1000}
                        transitionSpeed={500}
                        scale={1.02}
                        glareEnable={true}
                        glareMaxOpacity={0.2}
                        glareBorderRadius="1.5rem"
                        className="group overflow-hidden rounded-[1.5rem] bg-slate-950/70 shadow-[0_20px_70px_rgba(2,6,23,0.35)] ring-1 ring-white/10 backdrop-blur-xl"
                    >
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            variants={fadeInUp}
                            viewport={{ once: true }}
                            className="relative h-full overflow-hidden rounded-[1.5rem] border border-white/10 bg-gradient-to-br from-white/[0.06] via-slate-900/80 to-slate-950/90 p-8 transition duration-300 ease-out hover:-translate-y-1 hover:border-cyan-400/30 hover:shadow-[0_0_40px_rgba(34,211,238,0.08)]"
                        >
                            <div className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-white/10 to-transparent pointer-events-none" />
                            <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-slate-950/60 to-transparent pointer-events-none" />
                            <div className="absolute inset-0 rounded-[1.5rem] bg-[radial-gradient(circle_at_top_left,_rgba(34,211,238,0.12),_transparent_30%),radial-gradient(circle_at_bottom_right,_rgba(168,85,247,0.14),_transparent_38%)] opacity-90 pointer-events-none" />
                            <div className="relative z-10 flex justify-between items-start mb-4">
                                <div>
                                    <h3 className="text-xl font-semibold text-white">{exp.title}</h3>
                                    <p className="text-cyan-400 font-medium mt-1">{exp.company}</p>
                                </div>
                                <span className="text-sm text-slate-400 whitespace-nowrap ml-4">{exp.dates}</span>
                            </div>
                            <ul className="relative z-10 space-y-2">
                                {exp.responsibilities.map((resp, j) => (
                                    <li key={j} className="flex items-start text-sm text-slate-300 leading-7">
                                        <span className="text-cyan-400 mr-3 mt-1">•</span>
                                        <span>{resp}</span>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    </Tilt>
                ))}
            </div>
        </section>
    );
}