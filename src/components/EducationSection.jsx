'use client'

import { motion } from "motion/react";
import { Code2 } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const TITLE = { pt: "Formação", en: "Education" };

const FORMATION = [
  {
    institution: "Faculdade Senac",
    degree: { pt: "Análise e Desenvolvimento de Sistemas", en: "Systems Analysis and Development" },
    period: "2024 – 2026",
    description: {
      pt: "Graduação com foco em desenvolvimento de sistemas, engenharia de software e soluções tecnológicas aplicadas.",
      en: "Degree focused on systems development, software engineering and applied technological solutions."
    }
  },
  {
    institution: "Escola Estadual Cícero Dias",
    degree: { pt: "Técnico em Programação de Jogos Digitais", en: "Technical Degree in Digital Game Programming" },
    period: "2021 – 2023",
    description: {
      pt: "Formação técnica em lógica de programação, desenvolvimento de jogos e fundamentos de computação.",
      en: "Technical education in programming logic, game development and computing fundamentals."
    }
  },
  {
    institution: "Deloitte Recife",
    degree: { pt: "Bootcamp Presencial SAP – ABAP", en: "In-person SAP – ABAP Bootcamp" },
    period: "2025",
    description: {
      pt: "Bootcamp intensivo de 2 semanas com foco em programação ABAP e processos SAP em ambiente corporativo.",
      en: "Intensive 2-week bootcamp focused on ABAP programming and SAP processes in a corporate environment."
    }
  },
  {
    institution: "Softex Pernambuco",
    degree: { pt: "Bolsa Futuro Digital – Back End (TypeScript, Node.js)", en: "Futuro Digital Scholarship – Back End (TypeScript, Node.js)" },
    period: "2025",
    description: {
      pt: "Formação de 3 meses em desenvolvimento back end com TypeScript e Node.js aplicados a projetos reais.",
      en: "3-month program in back end development with TypeScript and Node.js applied to real projects."
    }
  },
  {
    institution: "Cesar School",
    degree: { pt: "Formação Acelerada em TechDesign (FAST) – Front End", en: "Accelerated TechDesign Program (FAST) – Front End" },
    period: "2024",
    description: {
      pt: "Programa de 3 meses com foco em desenvolvimento front end, design de interfaces e metodologias ágeis.",
      en: "3-month program focused on front end development, interface design and agile methodologies."
    }
  },
  {
    institution: "Softex Pernambuco",
    degree: { pt: "Formação Acelerada Softex Fap – Front End", en: "Softex Fap Accelerated Program – Front End" },
    period: "2024",
    description: {
      pt: "Formação de 6 meses em desenvolvimento front end com React, Next.js e Tailwind CSS.",
      en: "6-month program in front end development with React, Next.js and Tailwind CSS."
    }
  }
];

export default function EducationSection() {
  const { lang } = useLanguage();

  return (
    <section id="education" className="relative max-w-7xl mx-auto px-6 py-32 space-y-20">
      <header className="space-y-4">
        <span className="font-space text-[10px] tracking-[0.5em] text-red-500 uppercase">ACADEMIC_PATH</span>
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white uppercase">{TITLE[lang]}</h2>
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
              <p className="text-white/80 font-medium">{item.degree[lang]}</p>
              <p className="text-sm text-white/40 leading-relaxed font-light">{item.description[lang]}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
