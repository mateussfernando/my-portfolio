'use client'

import { motion } from "motion/react";
import { ExternalLink } from "lucide-react";

const PROJECTS = [
  {
    title: "Zêron AI",
    description: "Chatbot próprio especializado em tecnologia e programação, utilizando React.js, Next.js (PWA), Node.js e a API do OpenRouter com o modelo Claude 3 Haiku. Projeto full stack com foco em integração de LLMs e comunicação eficiente com APIs RESTful.",
    image: "/zenon-foto.jpg",
    tags: ["React", "Next.js", "Node.js"],
    link: "https://zenoniaopen.netlify.app/"
  },
  {
    title: "Pro Lidera Skills",
    description: "Teste de liderança desenvolvido em Next.js e Tailwind com 18 questões estratégicas para identificar perfil e nível de habilidades. Projeto final da Formação Acelerada Softex.",
    image: "/prolidera-foto.jpg",
    tags: ["Next.js", "Tailwind", "React"],
    link: "https://prolideraskills.netlify.app/"
  }
];

const ProjectCard = ({ project, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ delay: index * 0.1, duration: 0.8 }}
    viewport={{ once: true }}
    className="group relative glass-card p-4 rounded-xl overflow-hidden cursor-pointer"
    onClick={() => window.open(project.link, "_blank")}
  >
    <div className="relative aspect-video overflow-hidden rounded-lg mb-6 shadow-2xl">
      <motion.img
        src={project.image}
        alt={project.title}
        className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700 ease-out"
      />
      <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors duration-500" />
      <div className="absolute top-4 right-4 p-2 bg-black/80 rounded-full border border-white/10 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
        <ExternalLink size={16} />
      </div>
    </div>

    <div className="space-y-3">
      <div className="flex justify-between items-start">
        <h3 className="font-space text-[14px] font-semibold text-white group-hover:text-white transition-colors uppercase tracking-[0.05em]">
          {project.title}
        </h3>
        <span className="font-space text-[10px] text-white/20 uppercase">
          0{index + 1}
        </span>
      </div>
      <p className="text-[11px] text-white/40 leading-relaxed font-normal">
        {project.description}
      </p>
      <div className="flex gap-2 pt-2">
        {project.tags.map(tag => (
          <span key={tag} className="font-space text-[10px] tracking-widest text-white/40 uppercase border border-white/10 px-2 py-0.5 rounded">
            {tag}
          </span>
        ))}
      </div>
    </div>
  </motion.div>
);

export default function ProjectsSection() {
  return (
    <section id="projects" className="relative max-w-7xl mx-auto px-6 py-32 space-y-20">
      <header className="flex flex-col md:flex-row md:items-end justify-between gap-8">
        <div className="space-y-4">
          <span className="font-space text-[10px] tracking-[0.5em] text-red-500 uppercase">PROJETOS_SELECIONADOS</span>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white uppercase">Portifólio</h2>
        </div>

      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {PROJECTS.map((project, i) => (
          <ProjectCard key={project.title} project={project} index={i} />
        ))}
      </div>
    </section>
  );
}
