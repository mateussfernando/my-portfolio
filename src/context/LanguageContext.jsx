'use client'

import { createContext, useContext, useEffect, useState } from "react";

const LanguageContext = createContext(undefined);

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState("pt");

  // Prioridade na inicialização: subdomínio > parâmetro ?en > localStorage > pt
  useEffect(() => {
    // 1. Detectar subdomínio (en.mateusfernando.com ou pt.mateusfernando.com)
    const host = window.location.hostname;
    const subdomain = host.split('.')[0];

    if (subdomain === 'en') {
      setLang("en");
      window.localStorage.setItem("lang", "en");
      return;
    }
    if (subdomain === 'pt') {
      setLang("pt");
      window.localStorage.setItem("lang", "pt");
      return;
    }

    // 2. Detectar parâmetro ?en na URL
    const params = new URLSearchParams(window.location.search);
    if (params.has("en")) {
      setLang("en");
      window.localStorage.setItem("lang", "en");
      return;
    }

    // 3. Usar localStorage se disponível
    const saved = window.localStorage.getItem("lang");
    if (saved === "en" || saved === "pt") {
      setLang(saved);
      return;
    }

    // 4. Padrão: português
    setLang("pt");
  }, []);

  const changeLang = (next) => {
    setLang(next);
    window.localStorage.setItem("lang", next);
  };

  const toggleLang = () => changeLang(lang === "pt" ? "en" : "pt");

  return (
    <LanguageContext.Provider value={{ lang, setLang: changeLang, toggleLang }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage deve ser usado dentro de <LanguageProvider>");
  return ctx;
}
