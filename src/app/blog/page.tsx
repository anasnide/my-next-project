"use client";
import { motion } from "framer-motion";

const posts = [
  { title: "Building AI Systems", link: "#" },
  { title: "Next.js Advanced Techniques", link: "#" },
  { title: "Neon UI Design Tips", link: "#" }
];

export default function BlogPage() {
  return (
    <section className="min-h-screen px-6 py-16">
      <motion.h2 className="text-3xl md:text-4xl font-bold text-center mb-8" initial={{ y: -30, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ duration: 0.8 }}>
        Blog
      </motion.h2>

      <div className="grid md:grid-cols-3 gap-8">
        {posts.map((p, i) => (
          <motion.a key={i} href={p.link} className="liquid-glass p-6 rounded-xl" initial={{ y: 20, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ delay: i * 0.12, duration: 0.6 }}>
            <h3 className="text-xl font-semibold mb-2">{p.title}</h3>
            <p className="text-white/70">Short teaser for the post.</p>
          </motion.a>
        ))}
      </div>
    </section>
  );
}