import { useState } from "react";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import AgentsScene from "./scene/AgentsScene";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.16, delayChildren: 0.2 },
  },
};

const fadeUpVariants: Variants = {
  hidden: { opacity: 0, y: 18, filter: "blur(6px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 1.1, ease: [0.16, 1, 0.3, 1] },
  },
};

const navItems = [
  { name: "ABOUT", href: "#about" },
  { name: "SKILLS", href: "#skills" },
  { name: "EXPERIENCE", href: "#experience" },
  { name: "PROJECTS", href: "#work" },
  { name: "CONTACT", href: "#contact" },
];

const HeroSection: React.FC = () => {
  const [, setIsHovered] = useState(false);

  return (
    <section className="relative w-screen min-h-screen overflow-hidden bg-white font-body">
      {/* AI/ML multi-agent 3D scene layer */}
      <AgentsScene />

      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_20%,rgba(255,255,255,0.55)_65%,rgba(255,255,255,0.92)_100%)] pointer-events-none z-[6]" />
      <div className="absolute inset-y-0 left-0 w-2/3 bg-gradient-to-r from-white via-white/90 to-transparent pointer-events-none" />
      <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-white via-white/50 to-transparent pointer-events-none" />

      {/* Ambient blue glows */}
      <motion.div
        animate={{ scale: [1, 1.15, 1], opacity: [0.1, 0.18, 0.1] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[-10%] right-[-10%] w-[42rem] h-[42rem] bg-gold rounded-full blur-[180px] pointer-events-none"
      />
      <motion.div
        animate={{ scale: [1.15, 1, 1.15], opacity: [0.08, 0.14, 0.08] }}
        transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-[-15%] left-[-10%] w-[38rem] h-[38rem] bg-bronze rounded-full blur-[170px] pointer-events-none"
      />

      <div className="relative z-10 flex flex-col justify-between min-h-screen w-full px-6 sm:px-12 lg:px-16 pt-6 pb-10">
        {/* Nav */}
        <header className="relative flex items-center justify-between w-full">
          <a
            href="#"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="text-xs sm:text-sm font-semibold tracking-[0.35em] uppercase text-[#0F172A] hover:opacity-75 transition-opacity"
          >
            YASWITHA.
          </a>
          <nav className="hidden md:flex items-center space-x-8 lg:space-x-10 text-[11px] tracking-[0.28em] font-light uppercase text-[#334155] absolute left-1/2 -translate-x-1/2">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="relative group py-1 transition-colors duration-300 hover:text-gold"
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-gold/60 transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>
          <a
            href="#contact"
            className="group flex items-center space-x-2 text-[11px] tracking-[0.24em] font-light uppercase py-2 px-4 border border-bronze/50 hover:border-gold text-[#0F172A] transition-all duration-300 ml-auto md:ml-0"
          >
            <span>LET&apos;S TALK</span>
            <span className="transform transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-xs">
              ↗
            </span>
          </a>
        </header>

        {/* Main hero content */}
        <div className="relative flex flex-col md:flex-row items-center justify-between w-full pt-4 pb-2 my-auto">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="max-w-sm sm:max-w-md md:max-w-lg lg:max-w-[42rem] z-20"
          >
            <motion.div
              variants={fadeUpVariants}
              className="relative mb-3.5 select-none"
            >
              <h1 className="font-display text-6xl sm:text-7xl md:text-8xl lg:text-[6.6rem] tracking-tight uppercase leading-[0.85]">
                <span className="block text-transparent bg-clip-text bg-gradient-to-b from-[#0F172A] via-[#1E293B] to-[#334155] drop-shadow-[0_2px_6px_rgba(15,23,42,0.15)]">
                  I ENGINEER
                </span>
                <span className="block text-transparent bg-clip-text bg-gradient-to-b from-[#3B82F6] via-[#2563EB] to-[#1D4ED8] drop-shadow-[0_4px_16px_rgba(37,99,235,0.25)]">
                  INTELLIGENT
                </span>
                <span className="block text-transparent bg-clip-text bg-gradient-to-b from-[#0EA5E9] via-[#0284C7] to-[#075985] drop-shadow-[0_4px_16px_rgba(14,165,233,0.25)]">
                  AI SYSTEMS
                </span>
              </h1>
            </motion.div>

            <motion.div variants={fadeUpVariants} className="mb-4">
              <p className="text-[10px] sm:text-[11px] md:text-xs font-normal tracking-[0.28em] uppercase text-[#475569]">
                AI/ML ENGINEER <span className="text-bronze mx-1">•</span> LLM
                &amp; RAG ARCHITECT <span className="text-bronze mx-1">•</span>{" "}
                DATA SCIENTIST
              </p>
            </motion.div>

            <motion.div
              variants={fadeUpVariants}
              className="text-xs sm:text-sm md:text-[13.5px] font-light text-[#475569] leading-[1.8] tracking-wide max-w-lg mb-8"
            >
              <p>
                Building production-grade RAG platforms, multi-agent systems,
                and MLOps pipelines that turn AI research into reliable,
                scalable products across banking, healthcare, and enterprise.
              </p>
            </motion.div>

            <motion.div
              variants={fadeUpVariants}
              className="flex flex-row items-center gap-4 sm:gap-6"
            >
              <motion.a
                href="#work"
                whileHover={{ scale: 1.02 }}
                className="relative inline-flex items-center space-x-3 px-6 sm:px-7 py-3.5 border border-gold bg-gold text-white hover:bg-[#1D4ED8] hover:border-[#1D4ED8] text-[11px] font-medium tracking-[0.24em] uppercase transition-all duration-300 shadow-[0_8px_24px_rgba(37,99,235,0.3)]"
              >
                <span>EXPLORE MY WORK</span>
                <span className="text-xs">↗</span>
              </motion.a>
              <motion.a
                href="/resume.html"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                className="relative inline-flex items-center space-x-2 px-6 sm:px-7 py-3.5 border border-bronze/40 hover:border-gold text-[#0F172A] hover:text-gold text-[11px] font-medium tracking-[0.24em] uppercase transition-all duration-300"
              >
                <span>DOWNLOAD RESUME</span>
                <span className="text-xs">↓</span>
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right: floating quote card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="hidden lg:flex flex-col items-start pointer-events-auto pr-8 xl:pr-16 z-20 select-none"
          >
            <span className="text-xl text-gold leading-none font-serif mb-2">
              &ldquo;
            </span>
            <div className="text-[9.5px] font-medium tracking-[0.24em] uppercase text-[#1E293B] space-y-1 mb-3">
              <p>CODE IS MY CRAFT.</p>
              <p>IMPACT IS MY GOAL.</p>
            </div>
            <div className="w-28 h-[1px] bg-gradient-to-r from-gold via-bronze/70 to-transparent shadow-[0_0_8px_rgba(37,99,235,0.3)] mb-2" />
            <div className="text-[2.2rem] text-gold font-normal leading-none -ml-0.5 font-script">
              Yaswitha
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
