"use client";
import { motion } from "framer-motion";

export default function LiquidCard({ title, children }: any) {
  return (
    <motion.div
      className="liquid-glass p-6 md:p-8 glass-border"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <h2 className="text-3xl font-bold mb-4 text-white drop-shadow-lg">
        {title}
      </h2>
      <p className="text-white/80 leading-relaxed">{children}</p>
    </motion.div>
  );
}