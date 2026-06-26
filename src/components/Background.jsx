'use client'

import { motion, useTransform } from "motion/react";

export default function Background({ scrollYProgress }) {
  const glowX1 = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]);
  const glowX2 = useTransform(scrollYProgress, [0, 1], ["20%", "-20%"]);
  const glowX3 = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <div className="cyber-bg">
      <motion.div style={{ x: glowX1 }} className="glow-purple" />
      <motion.div style={{ x: glowX2 }} className="glow-blue" />
      <motion.div style={{ x: glowX3 }} className="glow-green" />
      <motion.div style={{ x: glowX1 }} className="glow-red" />
      <div className="cyber-grid" />
      <div className="cyber-noise" />
      <div className="cyber-vignette" />
    </div>
  );
}
