"use client"

import { motion } from "framer-motion";

export default function Contact() {
  return (
    <motion.section
      id="contact"
      className="max-w-5xl mx-auto p-6 text-center"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <h2 className="text-3xl font-bold mb-4 glow">Contact Me</h2>
      <p className="text-gray-300 mb-6">Let's work together! Reach out via email:</p>
      <motion.a
        href="mailto:ceo@anasnidir.com"
        className="px-8 py-3 bg-pink-500 glow rounded-lg hover:bg-pink-400 transition"
        whileHover={{ scale: 1.1, boxShadow: "0 0 20px #ff00ff" }}
      >
        Email Me
      </motion.a>
    </motion.section>
  );
}