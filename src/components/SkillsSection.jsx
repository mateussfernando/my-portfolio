'use client'

import { motion } from "motion/react";
import {
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs,
  FaBootstrap, FaPython, FaGitAlt, FaGithub, FaDocker, FaLinux
} from "react-icons/fa";
import {
  SiTypescript, SiNextdotjs, SiTailwindcss, SiExpress,
  SiPostgresql, SiMongodb, SiSap, SiBruno, SiVercel
} from "react-icons/si";
import { TbBrandVscode, TbBrandAzure } from "react-icons/tb";

const SKILLS = [
  { name: "HTML5", icon: FaHtml5, color: "#E34F26" },
  { name: "CSS3", icon: FaCss3Alt, color: "#1572B6" },
  { name: "JavaScript", icon: FaJs, color: "#F7DF1E" },
  { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
  { name: "React", icon: FaReact, color: "#61DAFB" },
  { name: "Next.js", icon: SiNextdotjs, color: "#FFFFFF" },
  { name: "Node.js", icon: FaNodeJs, color: "#5FA04E" },
  { name: "Express", icon: SiExpress, color: "#FFFFFF" },
  { name: "Tailwind", icon: SiTailwindcss, color: "#06B6D4" },
  { name: "Bootstrap", icon: FaBootstrap, color: "#7952B3" },
  { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
  { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
  { name: "Python", icon: FaPython, color: "#3776AB" },
  { name: "SAP ABAP", icon: SiSap, color: "#0FAAFF" },
  { name: "Git", icon: FaGitAlt, color: "#F05032" },
  { name: "GitHub", icon: FaGithub, color: "#FFFFFF" },
  { name: "Docker", icon: FaDocker, color: "#2496ED" },
  { name: "Vercel", icon: SiVercel, color: "#FFFFFF" },
  { name: "VS Code", icon: TbBrandVscode, color: "#007ACC" },
  { name: "Azure", icon: TbBrandAzure, color: "#0078D4" },
  { name: "Bruno", icon: SiBruno, color: "#F4AA41" },
  { name: "Linux", icon: FaLinux, color: "#FCC624" }
];

export default function SkillsSection() {
  return (
    <section id="skills" className="relative max-w-7xl mx-auto px-6 py-32 space-y-12">
      <header className="space-y-4">
        <span className="font-space text-[10px] tracking-[0.5em] text-red-500 uppercase">TECH_STACK</span>
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white uppercase">Tecnologias e Ferramentas USADAS</h2>
      </header>

      <div className="flex flex-wrap gap-3">
        {SKILLS.map(({ name, icon: Icon, color }, i) => (
          <motion.div
            key={name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.04, duration: 0.4 }}
            viewport={{ once: true }}
            className="flex items-center gap-3 px-5 py-3 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 hover:border-white/20 transition-all duration-300"
          >
            <Icon size={20} style={{ color }} />
            <span className="font-space text-xs tracking-widest uppercase text-white/80">{name}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
