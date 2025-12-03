"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative flex flex-col items-center justify-start h-screen pt-28 md:pt-36 px-4 text-center hero-bg overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(58,111,248,0.18),transparent_55%)] pointer-events-none" />

      {/* logo */}
      <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.9 }} className="relative z-10 mb-6 w-[140px] h-[140px]">
        <Image src="https://anasnidir.com/assets/logo.jpg" alt="logo" fill unoptimized className="object-contain" />
      </motion.div>

      <motion.h1 initial={{ y: -30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.9 }} className="z-10 text-4xl md:text-6xl font-extrabold text-white drop-shadow-neon">
        Mr Anas Nidir
      </motion.h1>

      <motion.p initial={{ y: 10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.25, duration: 0.9 }} className="z-10 text-white/80 mt-4 max-w-xl">
        Building Premium AI, Technology & Digital Experiences.
      </motion.p>

      {/* scroll indicator */}
      <div className="scroll-indicator z-10">
        <span />
      </div>
    </section>
  );
}