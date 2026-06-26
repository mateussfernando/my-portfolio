'use client'

import { motion } from "motion/react";
import { useLanguage } from "@/context/LanguageContext";

export default function NavBar() {
  const { lang, setLang } = useLanguage();

  return (
    <nav className="fixed top-0 left-0 w-full z-50 px-6 py-8 flex justify-center items-center bg-gradient-to-b from-black/50 to-transparent backdrop-blur-sm">
      {/* Seletor de idioma - esquerda */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="absolute left-6 flex items-center gap-1.5 font-space text-[11px] tracking-widest"
      >
        <button
          onClick={() => setLang("pt")}
          className={`cursor-pointer transition-colors ${lang === "pt" ? "text-white" : "text-white/30 hover:text-white/60"}`}
        >
          PT
        </button>
        <span className="text-white/20">/</span>
        <button
          onClick={() => setLang("en")}
          className={`cursor-pointer transition-colors ${lang === "en" ? "text-white" : "text-white/30 hover:text-white/60"}`}
        >
          EN
        </button>
      </motion.div>

      {/* Itens de navegação - centro */}
      <div className="flex gap-8">
        {["INDEX", "SKILLS", "EXPERIENCE", "PROJECTS", "EDUCATION", "CONTACT"].map((item, i) => (
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
