"use client";
import { motion } from "framer-motion";
import Skills from "./Skills";

export default function About() {
  return (
    <section id="about" className="min-h-screen flex flex-col items-center justify-center px-6 py-12">
      <motion.div className="max-w-3xl w-full liquid-glass p-8 glass-border" initial={{ y: 30, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ duration: 0.8 }}>
        <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
        <p className="text-white/80 mb-6">
          I am Mr Anas Nidir — building premium AI, technology, and digital experiences.
          I focus on modern web architecture, beautiful UI, and practical AI systems.
        </p>
        <p className="text-white/70">Based in Malaysia. Available for freelance & collaborations.</p>
      </motion.div>

      <div className="w-full max-w-6xl mt-12">
        <Skills />
      </div>
    </section>
  );
}