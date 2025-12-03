"use client";
import { motion } from "framer-motion";

const skills = ["Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion", "AI", "Node.js", "Design"];

export default function Skills() {
  return (
    <div id="skills" className="grid grid-cols-2 md:grid-cols-4 gap-6 px-4">
      {skills.map((s, i) => (
        <motion.div key={s} className="liquid-glass p-4 rounded-lg text-center" initial={{ y: 20, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ delay: i * 0.08, duration: 0.6 }}>
          <div className="text-lg font-semibold">{s}</div>
          <div className="text-sm text-white/70 mt-2">Pro level</div>
        </motion.div>
      ))}
    </div>
  );
}