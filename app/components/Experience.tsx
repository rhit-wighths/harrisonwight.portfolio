"use client";

import { motion } from "framer-motion";
import { fadeInUp } from "../lib/animations";
// import { section } from "framer-motion/m";

const experience = [
    {
        title: "Software Consultant",
        company: "Edgile - a Wipro Company",
        dates: "June 2024–Present",
        responsibilities: [
                "Configured and maintained Edgile Decision Engine solutions within the ServiceNow ecosystem.",
                "Collaborated with business stakeholders to gather requirements, analyze business processes, and translate needs into technical solutions.",
                "Participated in Agile development cycles, including sprint planning, backlog refinement, and stakeholder demonstrations",
                "Utilized ServiceNow platform capabilities to configure workflows, forms, business rules, external API integrations, and process automation."
        ],
    },
    {
        title: "Software Engineer Intern",
        company: "Telemetry Sports",
        dates: "June 2022–August 2023",
        responsibilities: [
                "Developed responsive web application features using React.js, JavaScript, HTML, and CSS.",
                "Built reusable frontend components and optimized application performance for improved user experience.",
                "Consumed and integrated REST APIs to display live sports analytics and user-specific data for NFL clients.",
                "Assisted in troubleshooting and resolving bugs, ensuring a smooth and reliable application experience."
        ],
    }];


export default function Experience() {
    return (
        <section id="experience" className="max-w-6xl mx-auto px-12 py-24 relative overflow-hidden">
            <motion.h2
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                className="text-3xl md:text-4xl font-bold mb-12 text-white relative z-10"
            >
                Experience
            </motion.h2>
            <div className="space-y-16 relative z-10">
                {experience.map((exp, i) => (
                    <motion.div
                        key={i}
                        initial="hidden"
                        whileInView="visible"
                        variants={fadeInUp}
                        viewport={{ once: true }}
                        className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-slate-950/80  backdrop-blur-xl transition duration-300 ease-out hover:-translate-y-1 hover:border-cyan-400/30 hover:shadow-[0_35px_35px_rgba(34,211,238,0.12)]"
                    >
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(56,189,248,0.14),_transparent_26%),radial-gradient(circle_at_bottom_right,_rgba(168,85,247,0.12),_transparent_38%)] opacity-90 pointer-events-none" />
                        <div className="relative z-10 p-8 md:p-10">
                            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                                <div>
                                    <p className="text-xs uppercase tracking-[0.3em] text-cyan-300/80">Professional Experience</p>
                                    <h3 className="mt-3 text-2xl font-semibold text-white sm:text-3xl">{exp.title}</h3>
                                    <p className="mt-2 text-lg font-medium text-cyan-300">{exp.company}</p>
                                </div>
                                <span className="inline-flex items-center rounded-full border border-white/10 bg-slate-900/70 px-4 py-2 text-sm font-medium text-slate-300 shadow-sm shadow-black/20">
                                    {exp.dates}
                                </span>
                            </div>

                            <div className="mt-8 rounded-[1.75rem] border border-white/10 bg-slate-900/80 p-6 shadow-inner shadow-black/20">
                                <div className="mb-6 flex flex-wrap gap-3">
                                    <span className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-cyan-200">
                                        ServiceNow
                                    </span>
                                    <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-slate-300">
                                        Collaboration
                                    </span>
                                    <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-slate-300">
                                        Impact Focused
                                    </span>
                                </div>
                                <ul className="space-y-4">
                                    {exp.responsibilities.map((resp, j) => (
                                        <li key={j} className="flex gap-4 rounded-3xl border border-white/10 bg-slate-950/70 p-4 sm:p-5">
                                            <span className="mt-1 inline-flex h-3.5 w-3.5 shrink-0 rounded-full bg-cyan-400 shadow-[0_0_20px_rgba(34,211,238,0.2)]" />
                                            <p className="text-sm leading-7 text-slate-300 sm:text-base">{resp}</p>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}