'use client'

import { Mail, Phone, FileText } from "lucide-react";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { useLanguage } from "@/context/LanguageContext";

const T = {
  title: { pt: <>Vamos construir <br /> o futuro?</>, en: <>Let&apos;s build <br /> the future?</> },
  desc: {
    pt: "Estou sempre aberto a novos desafios e colaborações inovadoras. Se você busca alguém para construir algo de impacto, vamos conversar.",
    en: "I'm always open to new challenges and innovative collaborations. If you're looking for someone to build something impactful, let's talk."
  },
  resume: { pt: "Currículo (PDF)", en: "Resume (PDF)" }
};

const CONTACTS = [
  { icon: Mail, label: "mateusfss368@gmail.com" },
  { icon: Phone, label: "(81) 99989-8306" },
  { icon: FaWhatsapp, label: "WhatsApp", href: "https://wa.me/5581999898306" }
];

export default function ContactSection() {
  const { lang } = useLanguage();

  const LINKS = [
    { icon: FaGithub, label: "GitHub", href: "https://github.com/mateussfernando" },
    { icon: FaLinkedin, label: "LinkedIn", href: "https://linkedin.com/in/mateusfernando" },
    { icon: FileText, label: T.resume[lang], href: "https://drive.google.com/file/d/1zoNVkt1BqDA2C0OpsRX76k51ghFnx3bp/view?usp=sharing" }
  ];

  return (
    <footer
      id="contact"
      className="relative pt-16 pb-32 bg-gradient-to-b from-transparent to-red-500/5"
    >
      <div className=" mx-auto px-6 space-y-16">
        <header className="text-center space-y-6">
          <span className="font-space text-[10px] tracking-[0.5em] text-red-500 uppercase">
            CONTACT_CHANNEL
          </span>
          <h3 className="text-4xl md:text-6xl font-bold uppercase tracking-tight leading-[0.9]">
            {T.title[lang]}
          </h3>
        </header>

          <p className="text-white text-center leading-relaxed">
            {T.desc[lang]}
          </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contatos */}
          <div className="space-y-4">
            {CONTACTS.map(({ icon: Icon, label, href }) =>
              href ? (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 px-6 py-4 rounded-xl border border-white/10 text-white/70 hover:text-white hover:border-red-500/50 hover:bg-white/5 transition-all duration-300"
                >
                  <Icon size={18} />
                  <span className="font-space text-xs tracking-widest uppercase">
                    {label}
                  </span>
                </a>
              ) : (
                <div
                  key={label}
                  className="flex items-center gap-3 px-6 py-4 rounded-xl border border-white/10 text-white/70"
                >
                  <Icon size={18} />
                  <span className="font-space text-xs tracking-widest uppercase">
                    {label}
                  </span>
                </div>
              ),
            )}
          </div>

          {/* Links / Redes */}
          <div className="space-y-4">
            {LINKS.map(({ icon: Icon, label, href }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel={
                  href.startsWith('http') ? 'noopener noreferrer' : undefined
                }
                className="flex items-center gap-3 px-6 py-4 rounded-xl border border-white/10 text-white/70 hover:text-white hover:border-red-500/50 hover:bg-white/5 transition-all duration-300"
              >
                <Icon size={18} />
                <span className="font-space text-xs tracking-widest uppercase">
                  {label}
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
