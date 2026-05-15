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
        <section className="max-w-6xl mx-auto px-6 py-24">
            <motion.h2
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                className="text-4xl font-bold mb-16 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent"
            >
                Experience
            </motion.h2>
            <div className="space-y-8">
                {experience.map((exp, i) => (
                    <motion.div
                        key={i}
                        initial="hidden"
                        whileInView="visible"
                        variants={fadeInUp}
                        viewport={{ once: true }}
                        className="group p-6 rounded-lg border border-gray-700 hover:border-purple-500 bg-gray-900/50 hover:bg-gray-900/80 transition-all duration-300"
                    >
                        <div className="flex justify-between items-start mb-3">
                            <div>
                                <h3 className="text-xl font-semibold text-white group-hover:text-purple-400 transition-colors">{exp.title}</h3>
                                <p className="text-purple-400 font-medium">{exp.company}</p>
                            </div>
                            <span className="text-sm text-gray-400 whitespace-nowrap ml-4">{exp.dates}</span>
                        </div>
                        <ul className="space-y-2">
                            {exp.responsibilities.map((resp, j) => (
                                <li key={j} className="flex items-start text-gray-300 text-sm">
                                    <span className="text-purple-400 mr-3 mt-1">•</span>
                                    <span>{resp}</span>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}