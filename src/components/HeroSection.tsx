import { useState } from "react";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import heroPortrait from "../assets/hero-portrait.png";

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
    <section className="relative w-screen min-h-screen overflow-hidden bg-black font-body">
      {/* Portrait background layer */}
      <div className="absolute inset-0 flex justify-end pointer-events-none">
        <img
          src={heroPortrait}
          alt="Yaswitha Ramisetty"
          className="h-full w-auto max-w-none object-cover object-top origin-right opacity-90"
        />
      </div>
      <div className="absolute inset-y-0 left-0 w-2/3 bg-gradient-to-r from-black via-black/85 to-transparent pointer-events-none" />
      <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black via-black/40 to-transparent pointer-events-none" />

      {/* Ambient cinematic glows */}
      <motion.div
        animate={{ scale: [1, 1.15, 1], opacity: [0.12, 0.22, 0.12] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[-10%] right-[-10%] w-[42rem] h-[42rem] bg-gold rounded-full blur-[180px] pointer-events-none mix-blend-screen"
      />
      <motion.div
        animate={{ scale: [1.15, 1, 1.15], opacity: [0.08, 0.16, 0.08] }}
        transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-[-15%] left-[-10%] w-[38rem] h-[38rem] bg-bronze rounded-full blur-[170px] pointer-events-none mix-blend-screen"
      />

      <div className="relative z-10 flex flex-col justify-between min-h-screen w-full px-6 sm:px-12 lg:px-16 pt-6 pb-10">
        {/* Nav */}
        <header className="relative flex items-center justify-between w-full">
          <a
            href="#"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="text-xs sm:text-sm font-semibold tracking-[0.35em] uppercase text-[#EAD8C7] hover:opacity-75 transition-opacity"
          >
            YASWITHA.
          </a>
          <nav className="hidden md:flex items-center space-x-8 lg:space-x-10 text-[11px] tracking-[0.28em] font-light uppercase text-[#C4B5A5] absolute left-1/2 -translate-x-1/2">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="relative group py-1 transition-colors duration-300 hover:text-[#FFF5EB]"
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-gold/50 transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>
          <a
            href="#contact"
            className="group flex items-center space-x-2 text-[11px] tracking-[0.24em] font-light uppercase py-2 px-4 border border-bronze/50 hover:border-gold text-[#EAD8C7] transition-all duration-300 ml-auto md:ml-0"
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
                <span className="block text-transparent bg-clip-text bg-gradient-to-b from-white via-[#D5CBC0] to-[#605448] drop-shadow-[0_4px_12px_rgba(0,0,0,0.85)]">
                  I ENGINEER
                </span>
                <span className="block text-transparent bg-clip-text bg-gradient-to-b from-[#F7E7C4] via-[#C99E5D] to-[#543B1A] drop-shadow-[0_8px_25px_rgba(201,158,93,0.35)]">
                  INTELLIGENT
                </span>
                <span className="block text-transparent bg-clip-text bg-gradient-to-b from-[#DFBE8A] via-[#9B7640] to-[#342410] drop-shadow-[0_10px_30px_rgba(155,118,64,0.4)]">
                  AI SYSTEMS
                </span>
              </h1>
            </motion.div>

            <motion.div variants={fadeUpVariants} className="mb-4">
              <p className="text-[10px] sm:text-[11px] md:text-xs font-normal tracking-[0.28em] uppercase text-[#C4B29E]">
                AI/ML ENGINEER <span className="text-bronze mx-1">•</span> LLM
                &amp; RAG ARCHITECT <span className="text-bronze mx-1">•</span>{" "}
                DATA SCIENTIST
              </p>
            </motion.div>

            <motion.div
              variants={fadeUpVariants}
              className="text-xs sm:text-sm md:text-[13.5px] font-light text-[#A8988B] leading-[1.8] tracking-wide max-w-lg mb-8"
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
                className="relative inline-flex items-center space-x-3 px-6 sm:px-7 py-3.5 border border-bronze bg-[#120F0C]/80 hover:border-gold text-[#EAD8C7] hover:text-[#FFF5EB] text-[11px] font-medium tracking-[0.24em] uppercase transition-all duration-300 shadow-[0_0_25px_rgba(212,175,55,0.18)]"
              >
                <span>EXPLORE MY WORK</span>
                <span className="text-xs">↗</span>
              </motion.a>
              <motion.a
                href="/resume.html"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                className="relative inline-flex items-center space-x-2 px-6 sm:px-7 py-3.5 border border-bronze/40 hover:border-bronze text-[#BFA895] hover:text-[#EAD8C7] text-[11px] font-medium tracking-[0.24em] uppercase transition-all duration-300"
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
            <span className="text-xl text-[#C99E5D] leading-none font-serif mb-2">
              &ldquo;
            </span>
            <div className="text-[9.5px] font-medium tracking-[0.24em] uppercase text-[#E0D3C5] space-y-1 mb-3">
              <p>CODE IS MY CRAFT.</p>
              <p>IMPACT IS MY GOAL.</p>
            </div>
            <div className="w-28 h-[1px] bg-gradient-to-r from-gold via-[#E8D7C5]/70 to-transparent shadow-[0_0_8px_rgba(212,175,55,0.4)] mb-2" />
            <div className="text-[2.2rem] text-[#D8AB64] font-normal leading-none -ml-0.5 font-script">
              Yaswitha
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
