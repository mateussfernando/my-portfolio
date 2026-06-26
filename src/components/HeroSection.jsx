'use client'

import { motion } from "motion/react";
import { useLanguage } from "@/context/LanguageContext";

const T = {
  role: { pt: "Desenvolvedor Web", en: "Web Developer" },
  desc: {
    pt: "Analista e Desenvolvedor de Sistemas, com foco em Desenvolvimento Web, focado em criar soluções tecnológicas que resolvem problemas reais.",
    en: "Systems Analyst and Developer focused on Web Development, building technological solutions that solve real problems."
  }
};

export default function HeroSection({ scale, opacity }) {
  const { lang } = useLanguage();

  return (
    <section
      id="index"
      className="relative h-screen flex items-center justify-center px-6 overflow-hidden max-w-7xl mx-auto"
    >
      <motion.div
        style={{ scale, opacity }}
        className="flex flex-col md:flex-row items-center gap-16 md:gap-32 z-10 w-full"
      >
        {/* Photo Left */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0, x: -50 }}
          animate={{ scale: 1, opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="shrink-0"
        >
          <div className="relative group">
            <div className="absolute inset-0 bg-red-500/20 blur-3xl rounded-full group-hover:bg-red-500/30 transition-all duration-700" />
            <div className="p-[5px] rounded-full bg-gradient-to-b from-red-500 to-blue-500 relative z-10 shadow-[0_0_50px_rgba(239,68,68,0.3)]">
              <img
                src="profile-img.jpg"
                alt="Mateus Fernando"
                className="w-[300px] h-[300px] rounded-full object-cover transition-all duration-500"
              />
            </div>
          </div>
        </motion.div>

        {/* Text Right */}
        <div className="text-center md:text-left space-y-6 flex-1">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.15, delayChildren: 0.2 },
              },
            }}
            className="space-y-3"
          >
            <motion.span
              variants={{
                hidden: { opacity: 0, y: 10 },
                visible: { opacity: 1, y: 0 },
              }}
              className="font-space text-[10px] tracking-[0.6em] text-green-400 uppercase block"
            >
              [ SYSTEMS_ONLINE ]
            </motion.span>

            <motion.h1
              variants={{
                hidden: { opacity: 0, x: -20 },
                visible: { opacity: 1, x: 0 },
              }}
              className="text-6xl md:text-5xl font-normal tracking-tighter text-white font-sans uppercase leading-[0.85]"
            >
              MATEUS FERNANDO
            </motion.h1>

            <motion.p
              variants={{
                hidden: { opacity: 0, y: 10 },
                visible: { opacity: 1, y: 0 },
              }}
              className="text-xl md:text-2xl font-space tracking-widest uppercase"
            >
              {T.role[lang]}
            </motion.p>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-sm md:text-base text-white/50 font-normal leading-relaxed max-w-[450px]"
          >
            {T.desc[lang]}
          </motion.p>

          {/* <motion.button
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.65 }}
            onClick={() =>
              document
                .getElementById('contact')
                ?.scrollIntoView({ behavior: 'smooth' })
            }
            className="bg-red-500 text-white font-space text-xs font-bold tracking-widest px-8 py-4 rounded-lg uppercase hover:bg-red-600 transition-all cursor-pointer shadow-[0_10px_20px_rgba(239,68,68,0.2)]"
          >
            Entre em contato
          </motion.button> */}
        </div>
      </motion.div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-30"
      >
        <span className="font-space text-[10px] tracking-widest uppercase text-white/50">
          Scroll
        </span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-white to-transparent" />
      </motion.div>
    </section>
  )
}
