import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface RouteStop {
  id: string;
  year: string;
  title: string;
  organization: string;
  metrics: string[];
  achievements: string[];
}

const journey: RouteStop[] = [
  {
    id: "01",
    year: "JAN 2026 – PRESENT",
    title: "AI / MACHINE LEARNING ENGINEER",
    organization: "COMERICA, DALLAS, TX",
    metrics: ["20M+ transactions", "10TB+ data", "500K+ documents"],
    achievements: [
      "Engineered fraud detection, risk scoring, and financial forecasting models across 20M+ banking transactions, improving AUC-ROC by 15 points.",
      "Architected Spark-based ETL pipelines processing 10TB+ financial data with PySpark, Airflow, PostgreSQL, and MongoDB, reducing processing time by 40%.",
      "Architected enterprise RAG and GenAI platforms using LangChain, LangGraph, FAISS, and Pinecone across 500K+ documents, cutting retrieval time by 60%.",
      "Deployed multi-agent AI systems and FastAPI inference services on AWS SageMaker, EC2, S3, and Lambda, eliminating 150+ manual hours weekly.",
      "Established MLOps/LLMOps infrastructure with MLflow, Kubeflow, Docker, Kubernetes, and Responsible AI frameworks (SHAP/LIME), reducing deployment cycles by 35%.",
    ],
  },
  {
    id: "02",
    year: "FEB 2025 – DEC 2025",
    title: "MACHINE LEARNING ENGINEER",
    organization: "DELL, ROUND ROCK, TX",
    metrics: ["15TB+ data", "3 clouds", "250K+ documents"],
    achievements: [
      "Built forecasting and optimization models using XGBoost, LightGBM, PyTorch, and Reinforcement Learning, improving forecasting accuracy by 20% across global supply-chain operations.",
      "Ran production ML workloads across AWS SageMaker, GCP Vertex AI/BigQuery, and Azure Machine Learning, cutting model experimentation cycles by 30%.",
      "Architected GenAI/RAG solutions with citation-grounded search across 250K+ documents using LangChain, FAISS, and Pinecone, cutting retrieval time by 60%.",
      "Designed LangGraph multi-agent workflows for technical support automation, reducing manual resolution effort by 40% and response times by 35%.",
      "Implemented end-to-end MLOps/LLMOps with MLflow, Kubeflow, Docker, Kubernetes, Jenkins, and GitHub Actions, reducing deployment cycles by 35%.",
    ],
  },
  {
    id: "03",
    year: "APR 2023 – JUN 2024",
    title: "DATA SCIENTIST",
    organization: "SOUTH INDIAN BANK, HYDERABAD",
    metrics: ["50M+ records", "+18% accuracy", "+15% conversion"],
    achievements: [
      "Analyzed 50M+ customer and transaction records delivering risk, lending, portfolio, and customer analytics across business functions.",
      "Built fraud detection, loan default, and customer segmentation models improving prediction accuracy by 18% and campaign conversion by 15%.",
      "Built NLP-driven document intelligence platforms using BERT, Transformers, spaCy, and NLTK, reducing manual review effort by 45%.",
      "Designed scalable analytics ecosystems with Power BI and Tableau, reducing model development cycles by 30% and reporting effort by 40%.",
    ],
  },
  {
    id: "04",
    year: "JAN 2021 – MAR 2023",
    title: "DATA SCIENTIST",
    organization: "GEBBS HEALTHCARE SOLUTIONS, HYDERABAD",
    metrics: ["20M+ EHR records", "15+ facilities", "8+ programs"],
    achievements: [
      "Developed predictive analytics across 20M+ EHR, claims, and patient records, improving risk prediction accuracy by 15%.",
      "Built RCM, denial prevention, and claims optimization platforms reducing claim processing errors by 20% across 8+ healthcare programs.",
      "Developed NLP-powered clinical intelligence using BERT and Transformers on physician notes and medical records, reducing manual review by 45%.",
      "Delivered HIPAA-compliant dashboards across 15+ healthcare facilities using Power BI, Tableau, and SQL.",
    ],
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
      className="relative w-full bg-white text-[#0F172A] font-body py-24 lg:py-32 px-6 sm:px-12 lg:px-20"
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
            <span className="block text-transparent bg-clip-text bg-gradient-to-b from-[#0F172A] via-[#1E293B] to-[#334155]">
              CAREER
            </span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-b from-[#3B82F6] via-[#2563EB] to-[#1D4ED8]">
              MILESTONES.
            </span>
          </h2>
        </motion.div>

        <div className="relative w-full">
          <div className="absolute left-[19px] md:left-[140px] top-4 bottom-8 w-[1px] bg-bronze/20" />
          <motion.div
            style={{ height: lineHeight }}
            className="absolute left-[19px] md:left-[140px] top-4 w-[2px] bg-gradient-to-b from-gold via-bronze to-bronze/10 shadow-[0_0_10px_#2563EB] origin-top"
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
                  <div className="w-3 h-3 rounded-full bg-gold shadow-[0_0_10px_#2563EB]" />
                </div>

                <div className="pl-10 md:pl-10">
                  <span className="md:hidden block text-[10px] font-mono tracking-[0.2em] text-bronze mb-1">
                    {stop.year}
                  </span>
                  <h3 className="font-display text-2xl sm:text-3xl uppercase text-[#0F172A] tracking-tight mb-1">
                    {stop.title}
                  </h3>
                  <p className="text-[11px] font-medium tracking-[0.2em] uppercase text-gold mb-3">
                    {stop.organization}
                  </p>
                  <div className="flex flex-wrap gap-x-4 gap-y-1 mb-4">
                    {stop.metrics.map((m) => (
                      <span
                        key={m}
                        className="text-[11px] sm:text-xs font-semibold text-[#1D4ED8]"
                      >
                        {m}
                      </span>
                    ))}
                  </div>
                  <ul className="space-y-1.5 max-w-xl">
                    {stop.achievements.map((a) => (
                      <li
                        key={a}
                        className="text-xs sm:text-sm font-light text-[#475569] leading-relaxed pl-4 relative before:content-['→'] before:absolute before:left-0 before:text-gold"
                      >
                        {a}
                      </li>
                    ))}
                  </ul>
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
