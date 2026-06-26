'use client'

import { motion } from "motion/react";

export default function NavBar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 px-6 py-8 flex justify-center items-center bg-gradient-to-b from-black/50 to-transparent backdrop-blur-sm">
      <div className="flex gap-8">
        {["INDEX", "SKILLS", "PROJECTS", "EDUCATION", "CONTACT"].map((item, i) => (
          <motion.button
            key={item}
            onClick={() => document.getElementById(item.toLowerCase())?.scrollIntoView({ behavior: 'smooth' })}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="font-space text-xs tracking-[0.1em] text-white hover:text-white transition-colors uppercase cursor-pointer"
          >
            {item}
          </motion.button>
        ))}
      </div>
    </nav>
  );
}
