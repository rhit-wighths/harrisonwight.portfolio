"use client";

import { motion } from "framer-motion";
import { fadeInUp } from "../lib/animations";

export default function Experience() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-24">
      <motion.h2
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
        className="text-3xl font-bold mb-12"
      >
        Experience
      </motion.h2>

      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={fadeInUp}
        viewport={{ once: true }}
      >
        <h3 className="font-semibold">Software Engineer</h3>
        <p className="text-gray-400">2023–Present</p>
        <ul className="list-disc ml-6 mt-2 text-gray-300">
          <li>Improved API performance by 35%</li>
          <li>Built analytics tools</li>
        </ul>
      </motion.div>
    </section>
  );
}