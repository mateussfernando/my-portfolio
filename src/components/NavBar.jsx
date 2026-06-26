'use client'

import { motion } from "motion/react";
import { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { Menu, X } from "lucide-react";

export default function NavBar() {
  const { lang, setLang } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  const navItems = ["INDEX", "SKILLS", "EXPERIENCE", "PROJECTS", "EDUCATION", "CONTACT"];

  const handleNavClick = (item) => {
    document.getElementById(item.toLowerCase())?.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 px-6 py-8 bg-gradient-to-b from-black/50 to-transparent backdrop-blur-sm">
      <div className="flex justify-between items-center md:justify-center">
        {/* Seletor de idioma - esquerda (desktop) */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="hidden md:absolute md:left-6 md:flex items-center gap-1.5 font-space text-[11px] tracking-widest"
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

        {/* Itens de navegação - centro (desktop) */}
        <div className="hidden md:flex gap-8">
          {navItems.map((item, i) => (
            <motion.button
              key={item}
              onClick={() => handleNavClick(item)}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="font-space text-xs tracking-[0.1em] text-white hover:text-white transition-colors uppercase cursor-pointer"
            >
              {item}
            </motion.button>
          ))}
        </div>

        {/* Menu hambúrguer - mobile */}
        <div className="md:hidden flex items-center gap-4 w-full justify-between">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex items-center gap-1.5 font-space text-[11px] tracking-widest"
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

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white hover:text-white/70 transition-colors"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Menu mobile dropdown */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="md:hidden absolute top-full left-0 w-full bg-black/90 backdrop-blur-md border-b border-white/10 py-4"
        >
          <div className="flex flex-col gap-4 px-6">
            {navItems.map((item) => (
              <button
                key={item}
                onClick={() => handleNavClick(item)}
                className="font-space text-sm tracking-[0.1em] text-white hover:text-white/70 transition-colors uppercase text-left"
              >
                {item}
              </button>
            ))}
          </div>
        </motion.div>
      )}
    </nav>
  );
}
