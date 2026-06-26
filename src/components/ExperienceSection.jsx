'use client'

import { motion } from "motion/react";
import { Code2, Boxes, ShieldCheck } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const TITLE = { pt: "Experiência", en: "Experience" };

const EXPERIENCES = [
  {
    role: { pt: 'Desenvolvedor Web', en: 'Web Developer' },
    company: 'Jogga Digital Performance',
    period: '2025 — Presente',
    tag: { pt: 'Full Stack', en: 'Full Stack' },
    icon: Code2,
    current: true,
    bullets: {
      pt: [
        'Desenvolvimento, teste e integração de landing pages e CRMs personalizados com JavaScript e Next.js.',
        'Consumo e criação de APIs RESTful.',
        'Modelagem e operação de bancos de dados PostgreSQL.',
        'Manutenção e implementação de novas funcionalidades em aplicações web com Node.js.',
        'Versionamento de código e revisões no GitHub.',
      ],
      en: [
        'Development, testing and integration of landing pages and custom CRMs with JavaScript and Next.js.',
        'Consumption and creation of RESTful APIs.',
        'Modeling and operation of PostgreSQL databases.',
        'Maintenance and implementation of new features in web applications with Node.js.',
        'Code versioning and reviews on GitHub.',
      ],
    },
  },
  {
    role: {
      pt: 'Residência Tecnológica - SAP MM Delloite',
      en: 'Technology Residency - SAP MM Delloite',
    },
    company: 'Porto Digital',
    period: '2024 — 2026',
    tag: { pt: 'SAP MM · Deloitte', en: 'SAP MM · Deloitte' },
    icon: Boxes,
    current: false,
    bullets: {
      pt: [
        'Vivência prática no módulo de Materiais (SAP MM) em ambiente corporativo de grande porte.',
        'Atuação em todo o ciclo de compras: requisição, pedido, MIGO e MIRO.',
        'Compreensão sólida dos fluxos de compras, gestão de estoque e processos logísticos integrados.',
      ],
      en: [
        'Hands-on experience with the Materials module (SAP MM) in a large-scale corporate environment.',
        'Involvement in the full procurement cycle: requisition, purchase order, MIGO and MIRO.',
        'Solid understanding of procurement flows, inventory management and integrated logistics processes.',
      ],
    },
  },
  {
    role: {
      pt: 'Residência Tecnológica - Testes de Qualidade (QA)',
      en: 'Technology Residency - Quality Assurance (QA)',
    },
    company: 'CESAR School',
    period: '2024',
    tag: { pt: 'Projeto Prático', en: 'Practical Project' },
    icon: ShieldCheck,
    current: false,
    bullets: {
      pt: [
        'Aplicação de testes funcionais e não funcionais em projeto prático.',
        'Documentação de bugs e elaboração de casos de teste.',
        'Uso de boas práticas de QA ao longo do ciclo de desenvolvimento.',
      ],
      en: [
        'Application of functional and non-functional testing in a practical project.',
        'Bug documentation and test case design.',
        'Use of QA best practices throughout the development cycle.',
      ],
    },
  },
]

export default function ExperienceSection() {
  const { lang } = useLanguage();

  return (
    <section id="experience" className="relative max-w-7xl mx-auto px-6 py-32 space-y-20">
      <header className="space-y-4">
        <span className="font-space text-[10px] tracking-[0.5em] text-red-500 uppercase">CAREER_LOG</span>
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white uppercase">{TITLE[lang]}</h2>
      </header>

      <div className="relative">
        {/* Linha vertical contínua com gradiente */}
        <div className="absolute left-2 md:left-[148px] top-2 bottom-2 w-0.5 bg-gradient-to-b from-red-500/60 via-white/15 to-transparent" />

        <div className="space-y-10">
          {EXPERIENCES.map(({ role, company, period, tag, icon: Icon, current, bullets }, i) => (
            <motion.div
              key={company}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              className="relative pl-10 md:pl-[180px]"
            >
              {/* Ponto na linha */}
              <span
                className={`absolute left-2 md:left-[148px] top-6 -translate-x-1/2 w-3.5 h-3.5 rounded-full ring-4 ring-black ${
                  current ? "bg-red-500 animate-pulse" : "bg-white/40"
                }`}
              />

              {/* Período (desktop, à esquerda da linha) */}
              <div className="absolute left-0 top-5 hidden md:block w-[120px] text-right">
                <span className="font-space text-xs text-red-500 tracking-widest">{period}</span>
                <p className="font-space text-[9px] text-white/30 mt-1 uppercase tracking-wider">{tag[lang]}</p>
              </div>

              {/* Card */}
              <div className="glass-card p-8 rounded-xl space-y-4">
                <div className="flex items-start justify-between gap-4">
                  <div className="space-y-1">
                    <span className="font-space text-[10px] text-red-500 tracking-widest md:hidden block">{period}</span>
                    <h3 className="text-xl font-bold text-white uppercase tracking-tight">{role[lang]}</h3>
                    <p className="text-red-500 font-space text-xs tracking-widest uppercase">{company}</p>
                  </div>
                  <Icon className="text-red-500 shrink-0" size={26} />
                </div>
                <ul className="space-y-2.5">
                  {bullets[lang].map((b, j) => (
                    <li key={j} className="flex gap-3 text-sm text-white/50 leading-relaxed font-light">
                      <span className="mt-2 w-1 h-1 rounded-full bg-red-500 shrink-0" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
