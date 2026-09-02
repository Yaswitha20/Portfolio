import { motion } from "framer-motion";
import type { Variants } from "framer-motion";

const bentoCategories = [
  {
    title: "GENERATIVE AI & LLMS",
    badge: "CORE PILLAR",
    items: [
      "LangChain",
      "LangGraph",
      "OpenAI",
      "Hugging Face",
      "RAG",
      "PEFT/LoRA",
      "AI Agents",
    ],
    description:
      "Building agentic AI systems, RAG pipelines, and fine-tuned LLMs for enterprise document intelligence.",
    stat: "500K+ DOCS INDEXED",
    colSpan: "lg:col-span-7",
  },
  {
    title: "ML FRAMEWORKS",
    badge: "MODELING",
    items: ["PyTorch", "TensorFlow", "Scikit-learn", "XGBoost", "LightGBM"],
    description:
      "Fraud detection, forecasting, and predictive models across banking and healthcare datasets.",
    stat: "20M+ RECORDS",
    colSpan: "lg:col-span-5",
  },
  {
    title: "VECTOR DATABASES & RETRIEVAL",
    badge: "SEARCH",
    items: [
      "Qdrant",
      "FAISS",
      "Pinecone",
      "Azure AI Search",
      "ChromaDB",
      "Hybrid Search",
    ],
    description:
      "Dense and hybrid retrieval pipelines with reranking for citation-grounded search.",
    stat: "60% FASTER RETRIEVAL",
    colSpan: "lg:col-span-5",
  },
  {
    title: "DATA ENGINEERING & BIG DATA",
    badge: "SCALE",
    items: ["Apache Spark", "PySpark", "Databricks", "Kafka", "Airflow"],
    description:
      "ETL pipelines processing 10TB+ of structured and unstructured enterprise data.",
    stat: "10TB+ PROCESSED",
    colSpan: "lg:col-span-7",
  },
  {
    title: "MLOPS & DEPLOYMENT",
    badge: "PRODUCTION",
    items: ["MLflow", "Kubeflow", "Docker", "Kubernetes", "FastAPI", "CI/CD"],
    description:
      "End-to-end MLOps/LLMOps infrastructure with model registries and automated retraining.",
    stat: "35% FASTER DEPLOYS",
    colSpan: "lg:col-span-6",
  },
  {
    title: "CLOUD PLATFORMS",
    badge: "INFRASTRUCTURE",
    items: [
      "AWS SageMaker",
      "Bedrock",
      "Vertex AI",
      "BigQuery",
      "Azure AI Foundry",
      "AKS",
    ],
    description:
      "Production AI services deployed across AWS, GCP, and Azure for enterprise users.",
    stat: "3 CLOUD PLATFORMS",
    colSpan: "lg:col-span-6",
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.14, delayChildren: 0.1 },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30, filter: "blur(6px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] },
  },
};

const SkillsSection: React.FC = () => {
  return (
    <section
      id="skills"
      className="relative w-screen bg-[#F8FAFC] text-[#0F172A] font-body pt-8 pb-24 px-6 sm:px-12 lg:px-20 overflow-hidden flex flex-col justify-center"
    >
      <div className="absolute top-1/3 left-1/4 w-[34rem] h-[34rem] bg-gold/5 rounded-full blur-[170px] pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-[28rem] h-[28rem] bg-bronze/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex items-center space-x-4 mb-7"
        >
          <span className="text-[11px] font-medium tracking-[0.35em] uppercase text-gold">
            02 / TECH MATRIX
          </span>
          <div className="w-20 h-[1px] bg-gradient-to-r from-gold/80 via-bronze/40 to-transparent" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="mb-10"
        >
          <h2 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] tracking-tight uppercase leading-[0.85] select-none">
            <span className="block text-transparent bg-clip-text bg-gradient-to-b from-[#0F172A] via-[#1E293B] to-[#334155] drop-shadow-[0_2px_6px_rgba(15,23,42,0.12)]">
              ARCHITECTURAL MASTERY.
            </span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-b from-[#3B82F6] via-[#2563EB] to-[#1D4ED8] drop-shadow-[0_4px_16px_rgba(37,99,235,0.2)]">
              PRECISION APPLIED.
            </span>
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-6"
        >
          {bentoCategories.map((block) => (
            <motion.div
              key={block.title}
              variants={cardVariants}
              className={`group relative rounded-sm border border-bronze/20 bg-white shadow-sm p-7 hover:border-gold/50 hover:shadow-md transition-all duration-500 ${block.colSpan}`}
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-[10px] font-mono tracking-[0.2em] uppercase text-gold">
                  {block.badge}
                </span>
                <span className="text-[10px] font-mono tracking-[0.16em] uppercase text-[#64748B]">
                  {block.stat}
                </span>
              </div>
              <h3 className="font-display text-2xl sm:text-3xl uppercase text-[#0F172A] mb-3 tracking-tight">
                {block.title}
              </h3>
              <p className="text-xs font-light text-[#475569] leading-relaxed mb-5">
                {block.description}
              </p>
              <div className="flex flex-wrap gap-2 pt-4 border-t border-bronze/15">
                {block.items.map((tech) => (
                  <span
                    key={tech}
                    className="px-3.5 py-1.5 text-[10.5px] font-medium tracking-[0.16em] uppercase rounded-sm border border-bronze/25 bg-[#EFF6FF] text-[#1D4ED8] group-hover:border-gold/60 group-hover:bg-gold group-hover:text-white transition-all duration-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
