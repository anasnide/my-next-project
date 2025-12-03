"use client";
import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";

const projects = [
  { title: "AI Assistant", desc: "Premium AI for enterprises", link: "#" },
  { title: "Neon Portfolio", desc: "Interactive web experiences", link: "#" },
  { title: "3D Web Design", desc: "Immersive 3D web apps", link: "#" }
];

export default function Projects() {
  return (
    <section className="min-h-screen px-6 py-16">
      <motion.h2 className="text-3xl md:text-4xl font-bold text-center mb-10" initial={{ y: -30, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ duration: 0.8 }}>
        Projects
      </motion.h2>

      <div className="grid md:grid-cols-3 gap-8">
        {projects.map((p, i) => (
          <ProjectCard key={i} title={p.title} desc={p.desc} link={p.link} index={i} />
        ))}
      </div>
    </section>
  );
}