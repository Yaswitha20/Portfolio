import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface RouteStop {
  id: string;
  year: string;
  title: string;
  organization: string;
  description: string;
}

const journey: RouteStop[] = [
  {
    id: "01",
    year: "JAN 2026 – PRESENT",
    title: "AI / MACHINE LEARNING ENGINEER",
    organization: "COMERICA, DALLAS, TX",
    description:
      "Architected enterprise RAG and multi-agent platforms across 500K+ financial documents; fine-tuned LLMs with LoRA/PEFT, cutting retrieval time by 60%.",
  },
  {
    id: "02",
    year: "APR 2025 – DEC 2025",
    title: "MACHINE LEARNING ENGINEER",
    organization: "DELL, ROUND ROCK, TX",
    description:
      "Built GenAI/RAG solutions and LangGraph multi-agent workflows on AWS and GCP Vertex AI, deploying 20+ ML and GenAI applications.",
  },
  {
    id: "03",
    year: "APR 2023 – JUN 2024",
    title: "DATA SCIENTIST",
    organization: "SOUTH INDIAN BANK, HYDERABAD",
    description:
      "Analyzed 50M+ transaction records for fraud detection and loan default prediction, improving accuracy by 18% with NLP-driven compliance analytics.",
  },
  {
    id: "04",
    year: "OCT 2021 – MAR 2023",
    title: "DATA SCIENTIST",
    organization: "GEBBS HEALTHCARE SOLUTIONS, HYDERABAD",
    description:
      "Delivered predictive analytics across 20M+ EHR and claims records, and HIPAA-compliant dashboards across 15+ healthcare facilities.",
  },
];

const ExperienceSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.8", "end 0.4"],
  });
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section
      id="experience"
      ref={containerRef}
      className="relative w-full bg-black text-[#E8DFD8] font-body py-24 lg:py-32 px-6 sm:px-12 lg:px-20"
    >
      <div className="max-w-5xl mx-auto w-full relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex items-center space-x-4 mb-7"
        >
          <span className="text-[11px] font-medium tracking-[0.35em] uppercase text-gold">
            03 / EXPERIENCE
          </span>
          <div className="w-20 h-[1px] bg-gradient-to-r from-gold/80 via-bronze/40 to-transparent" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="mb-16"
        >
          <h2 className="font-display text-5xl sm:text-6xl md:text-7xl tracking-tight uppercase leading-[0.85] select-none">
            <span className="block text-transparent bg-clip-text bg-gradient-to-b from-white via-[#D5CBC0] to-[#605448]">
              CAREER
            </span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-b from-[#F7E7C4] via-[#C99E5D] to-[#543B1A]">
              MILESTONES.
            </span>
          </h2>
        </motion.div>

        <div className="relative w-full">
          <div className="absolute left-[19px] md:left-[140px] top-4 bottom-8 w-[1px] bg-bronze/20" />
          <motion.div
            style={{ height: lineHeight }}
            className="absolute left-[19px] md:left-[140px] top-4 w-[2px] bg-gradient-to-b from-gold via-[#C99E5D] to-bronze/10 shadow-[0_0_10px_#D4AF37] origin-top"
          />

          <div className="space-y-12">
            {journey.map((stop, idx) => (
              <motion.div
                key={stop.id}
                initial={{ opacity: 0, x: -15 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.7, delay: idx * 0.08 }}
                className="relative flex flex-col md:flex-row items-start group"
              >
                <div className="hidden md:block w-[140px] shrink-0 pr-8 pt-0.5 text-right">
                  <span className="text-[10px] font-mono tracking-[0.2em] text-bronze group-hover:text-gold transition-colors">
                    {stop.year}
                  </span>
                </div>

                <div className="absolute left-[19px] md:left-[140px] top-1.5 -translate-x-1/2 flex items-center justify-center">
                  <div className="w-3 h-3 rounded-full bg-gold shadow-[0_0_10px_#D4AF37]" />
                </div>

                <div className="pl-10 md:pl-10">
                  <span className="md:hidden block text-[10px] font-mono tracking-[0.2em] text-bronze mb-1">
                    {stop.year}
                  </span>
                  <h3 className="font-display text-2xl sm:text-3xl uppercase text-white tracking-tight mb-1">
                    {stop.title}
                  </h3>
                  <p className="text-[11px] font-medium tracking-[0.2em] uppercase text-gold mb-3">
                    {stop.organization}
                  </p>
                  <p className="text-xs sm:text-sm font-light text-[#A8988B] leading-relaxed max-w-xl">
                    {stop.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
