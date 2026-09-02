import { motion } from "framer-motion";
import type { Variants } from "framer-motion";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.18, delayChildren: 0.15 },
  },
};

const fadeUpVariants: Variants = {
  hidden: { opacity: 0, y: 30, filter: "blur(10px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] },
  },
};

const stats = [
  { value: "4+ Years", label: "AI/ML Engineering Experience" },
  { value: "750K+", label: "Documents Indexed in RAG Platforms" },
  { value: "3 Clouds", label: "AWS, Azure & GCP Deployments" },
  { value: "5 Certs", label: "Google Cloud, AWS, IBM & DeepLearning.AI" },
];

const AboutSection: React.FC = () => {
  return (
    <section
      id="about"
      className="relative w-screen min-h-screen bg-white text-[#0F172A] font-body py-24 lg:py-32 px-6 sm:px-12 lg:px-20 overflow-hidden flex items-center"
    >
      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.06, 0.12, 0.06] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 left-1/6 w-[32rem] h-[32rem] bg-gold rounded-full blur-[160px] pointer-events-none"
      />

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="flex items-center space-x-4 mb-10"
        >
          <span className="text-[11px] font-medium tracking-[0.35em] uppercase text-gold">
            01 / ABOUT ME
          </span>
          <div className="w-20 h-[1px] bg-gradient-to-r from-gold/80 via-bronze/40 to-transparent" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="lg:col-span-7 flex flex-col justify-center"
          >
            <motion.div
              variants={fadeUpVariants}
              className="relative mb-6 select-none"
            >
              <h2 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-[5.2rem] tracking-tight uppercase leading-[0.88]">
                <span className="block text-transparent bg-clip-text bg-gradient-to-b from-[#0F172A] via-[#1E293B] to-[#334155] drop-shadow-[0_2px_6px_rgba(15,23,42,0.12)]">
                  I DON&apos;T JUST BUILD MODELS.
                </span>
                <span className="block text-transparent bg-clip-text bg-gradient-to-b from-[#3B82F6] via-[#2563EB] to-[#1D4ED8] drop-shadow-[0_4px_16px_rgba(37,99,235,0.2)]">
                  I ENGINEER INTELLIGENCE.
                </span>
              </h2>
            </motion.div>

            <motion.p
              variants={fadeUpVariants}
              className="text-xs sm:text-sm md:text-[14.5px] font-light text-[#475569] leading-[1.85] tracking-wide mb-6 max-w-xl"
            >
              AI/ML Engineer with 4+ years of experience building
              production-grade AI systems across banking, healthcare, and
              enterprise environments. I specialize in RAG, agentic AI, LLM
              applications, and scalable ML platforms, from data and model
              development through production deployment and MLOps.
            </motion.p>
            <motion.p
              variants={fadeUpVariants}
              className="text-xs sm:text-sm md:text-[14.5px] font-light text-[#475569] leading-[1.85] tracking-wide mb-10 max-w-xl"
            >
              My work focuses on turning complex AI capabilities into reliable
              systems that improve automation, information retrieval,
              decision-making, and operational efficiency.
            </motion.p>

            <motion.div
              variants={fadeUpVariants}
              className="flex flex-wrap gap-3 pt-6 pb-2 border-t border-bronze/25"
            >
              {[
                "RAG & LLM Systems",
                "Multi-Agent Orchestration",
                "MLOps at Scale",
                "Cloud-Native AI",
                "Data Engineering",
              ].map((tag) => (
                <span
                  key={tag}
                  className="px-3.5 py-1.5 text-[10.5px] font-medium tracking-[0.14em] uppercase rounded-sm border border-bronze/30 bg-[#EFF6FF] text-[#1D4ED8]"
                >
                  {tag}
                </span>
              ))}
            </motion.div>
          </motion.div>

          {/* Right: Avatar + facts card */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="lg:col-span-5 flex flex-col items-center"
          >
            <motion.div
              variants={fadeUpVariants}
              className="relative w-44 h-44 rounded-full flex items-center justify-center mb-8 border border-gold/50 shadow-[0_0_40px_rgba(37,99,235,0.2)]"
              style={{
                background: "linear-gradient(135deg, #1D4ED8, #38BDF8)",
              }}
            >
              <span className="font-display text-5xl text-white">YR</span>
            </motion.div>

            <motion.div
              variants={fadeUpVariants}
              className="w-full grid grid-cols-2 gap-6 border-t border-bronze/25 pt-6"
            >
              {stats.map((stat) => (
                <div key={stat.label} className="flex flex-col">
                  <span className="font-display text-3xl sm:text-4xl font-light text-[#0F172A] tracking-tight">
                    {stat.value}
                  </span>
                  <span className="text-[10px] font-medium tracking-[0.18em] uppercase text-[#64748B] mt-1">
                    {stat.label}
                  </span>
                </div>
              ))}
            </motion.div>

            <motion.p
              variants={fadeUpVariants}
              className="mt-8 text-[10px] font-medium tracking-[0.22em] uppercase text-gold text-center"
            >
              Banking &middot; Healthcare &middot; Enterprise
            </motion.p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
