"use client";
import { motion } from "framer-motion";

export default function ProjectCard({ title, desc, link, index }: { title: string; desc: string; link: string; index: number; }) {
  return (
    <motion.a href={link} className="liquid-glass glass-border p-6 rounded-xl block" initial={{ y: 20, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ delay: index * 0.12, duration: 0.6 }}>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-white/80">{desc}</p>
    </motion.a>
  );
}