'use client'

import { motion } from "motion/react";
import { Code2 } from "lucide-react";

const FORMATION = [
  {
    institution: "Faculdade Senac",
    degree: "Análise e Desenvolvimento de Sistemas",
    period: "2024 – 2026",
    description: "Graduação com foco em desenvolvimento de sistemas, engenharia de software e soluções tecnológicas aplicadas."
  },
  {
    institution: "Escola Estadual Cícero Dias",
    degree: "Técnico em Programação de Jogos Digitais",
    period: "2021 – 2023",
    description: "Formação técnica em lógica de programação, desenvolvimento de jogos e fundamentos de computação."
  },
  {
    institution: "Deloitte Recife",
    degree: "Bootcamp Presencial SAP – ABAP",
    period: "2025",
    description: "Bootcamp intensivo de 2 semanas com foco em programação ABAP e processos SAP em ambiente corporativo."
  },
  {
    institution: "Softex Pernambuco",
    degree: "Bolsa Futuro Digital – Back End (TypeScript, Node.js)",
    period: "2025",
    description: "Formação de 3 meses em desenvolvimento back end com TypeScript e Node.js aplicados a projetos reais."
  },
  {
    institution: "Cesar School",
    degree: "Formação Acelerada em TechDesign (FAST) – Front End",
    period: "2024",
    description: "Programa de 3 meses com foco em desenvolvimento front end, design de interfaces e metodologias ágeis."
  },
  {
    institution: "Softex Pernambuco",
    degree: "Formação Acelerada Softex Fap – Front End",
    period: "2024",
    description: "Formação de 6 meses em desenvolvimento front end com React, Next.js e Tailwind CSS."
  }
];

export default function EducationSection() {
  return (
    <section id="education" className="relative max-w-7xl mx-auto px-6 py-32 space-y-20">
      <header className="space-y-4">
        <span className="font-space text-[10px] tracking-[0.5em] text-red-500 uppercase">ACADEMIC_PATH</span>
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white uppercase">Formação</h2>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {FORMATION.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.2 }}
            viewport={{ once: true }}
            className="glass-card p-8 rounded-xl space-y-4"
          >
            <div className="flex justify-between items-start">
              <div className="space-y-1">
                <h3 className="font-space text-lg text-white uppercase tracking-tight">{item.institution}</h3>
                <p className="text-white/30 text-xs font-space">{item.period}</p>
              </div>
              <Code2 className="text-red-500" size={24} />
            </div>
            <div className="space-y-2">
              <p className="text-white/80 font-medium">{item.degree}</p>
              <p className="text-sm text-white/40 leading-relaxed font-light">{item.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
