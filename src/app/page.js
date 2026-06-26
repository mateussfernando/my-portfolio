/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

'use client'

import { useScroll, useTransform } from "motion/react";
import { useRef } from "react";

import Background from "@/components/Background";
import NavBar from "@/components/NavBar";
import HeroSection from "@/components/HeroSection";
import SkillsSection from "@/components/SkillsSection";
import ExperienceSection from "@/components/ExperienceSection";
import EducationSection from "@/components/EducationSection";
import ProjectsSection from "@/components/ProjectsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 1.1]);
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  return (
    <div ref={containerRef} className="relative min-h-screen selection:bg-purple-500/30">
      <Background scrollYProgress={scrollYProgress} />
      <NavBar />
      <HeroSection scale={scale} opacity={opacity} />
      <SkillsSection />
      <ExperienceSection />
      <EducationSection />
      <ProjectsSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
