'use client'

import { createContext, useContext, useEffect, useState } from "react";

const LanguageContext = createContext(undefined);

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState("pt");

  // Prioridade na inicialização: parâmetro ?en na URL > localStorage > pt
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (params.has("en")) {
      setLang("en");
      return;
    }
    const saved = window.localStorage.getItem("lang");
    if (saved === "en" || saved === "pt") {
      setLang(saved);
    }
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
