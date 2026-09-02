import { motion } from "framer-motion";

interface Project {
  number: string;
  title: string;
  category: string;
  description: string;
  githubUrl: string;
  tech: string[];
  metrics: { label: string; value: string }[];
}

const projects: Project[] = [
  {
    number: "01",
    title: "Agentic AI Document Intelligence Platform",
    category: "RAG / LANGGRAPH",
    description:
      "Fully local, privacy-preserving RAG platform using Sentence Transformers, Qdrant, GPT4All (LLaMA-3), and LangGraph for offline document intelligence over 100+ pages of research content. Async FastAPI microservices with Dockerized deployment.",
    githubUrl:
      "https://github.com/Yaswitha20/Agentic-AI-Document-Intelligence-Platform-using-RAG-and-LangGraph",
    tech: ["Python", "LangGraph", "Qdrant", "FastAPI", "Docker"],
    metrics: [
      { label: "RETRIEVAL", value: "+25% Relevance" },
      { label: "DEPLOYMENT", value: "Dockerized" },
      { label: "SCOPE", value: "100+ Pages" },
    ],
  },
  {
    number: "02",
    title: "Explainable Multimodal Alzheimer's Disease Prediction",
    category: "HEALTHCARE AI / XAI",
    description:
      "End-to-end ML pipeline on the ADNI dataset integrating MRI, PET, CSF biomarkers, and clinical data. Random Forest/XGBoost ensembles with SHAP-based explainability for clinically interpretable predictions.",
    githubUrl:
      "https://github.com/Yaswitha20/Explainable-Multimodal-Alzheimer-s-Disease-Prediction-using-Ensemble-Machine-Learning-ADNI-",
    tech: ["Scikit-learn", "XGBoost", "SHAP", "Python"],
    metrics: [
      { label: "MODELS", value: "RF + XGBoost" },
      { label: "DATA TYPES", value: "4 Modalities Fused" },
      { label: "EXPLAINABILITY", value: "SHAP-Based XAI" },
    ],
  },
  {
    number: "03",
    title: "ChatGPT Clone",
    category: "GENERATIVE AI",
    description:
      "Conversational AI application replicating core ChatGPT experience, exploring LLM orchestration, prompt handling, and real-time chat UX.",
    githubUrl: "https://github.com/Yaswitha20/Chatgpt-Clone",
    tech: ["Python", "LLMs", "Conversational AI"],
    metrics: [
      { label: "FOCUS", value: "LLM Orchestration" },
      { label: "UX", value: "Real-Time Chat" },
    ],
  },
];

const ProjectsSection: React.FC = () => {
  return (
    <section
      id="work"
      className="relative w-full bg-white text-[#0F172A] font-body pt-20 pb-32 px-6 sm:px-12 lg:px-20"
    >
      <div className="absolute top-1/4 left-1/3 w-[36rem] h-[36rem] bg-gold/5 rounded-full blur-[180px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[30rem] h-[30rem] bg-bronze/5 rounded-full blur-[170px] pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex items-center space-x-4 mb-5"
        >
          <span className="text-[11px] font-medium tracking-[0.35em] uppercase text-gold">
            04 / FEATURED WORK
          </span>
          <div className="w-20 h-[1px] bg-gradient-to-r from-gold/80 via-bronze/40 to-transparent" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-16"
        >
          <h2 className="font-display text-5xl sm:text-6xl md:text-7xl tracking-tight uppercase leading-[0.9]">
            <span className="block text-transparent bg-clip-text bg-gradient-to-b from-[#0F172A] via-[#1E293B] to-[#334155]">
              SYSTEMS I&apos;VE
            </span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-b from-[#3B82F6] via-[#2563EB] to-[#1D4ED8]">
              ENGINEERED.
            </span>
          </h2>
          <p className="text-xs sm:text-sm font-light text-[#475569] max-w-sm mt-4 md:mt-0 leading-relaxed">
            Three production AI/ML systems spanning agentic RAG, explainable
            healthcare ML, and generative conversational AI.
          </p>
        </motion.div>

        <div className="space-y-8">
          {projects.map((project, idx) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, delay: idx * 0.06 }}
              className="relative w-full rounded-2xl border border-bronze/30 bg-white p-8 sm:p-12 shadow-[0_20px_50px_rgba(15,23,42,0.08)] group overflow-hidden transition-colors duration-500 hover:border-gold"
            >
              <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-gold/80 to-transparent" />

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start relative z-10">
                <div className="lg:col-span-7 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center space-x-3 mb-4">
                      <span className="text-xs font-mono font-bold text-gold">
                        {project.number} //
                      </span>
                      <span className="text-[10.5px] font-mono tracking-[0.25em] uppercase text-[#475569]">
                        {project.category}
                      </span>
                    </div>
                    <h3 className="font-display text-4xl sm:text-5xl font-normal tracking-tight text-[#0F172A] mb-4 group-hover:text-gold transition-colors uppercase leading-[0.9]">
                      {project.title}
                    </h3>
                    <p className="text-xs sm:text-sm md:text-[14px] font-light text-[#475569] leading-[1.85] tracking-wide mb-8 max-w-2xl">
                      {project.description}
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-2 pt-6 border-t border-bronze/20">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="px-3 py-1 text-[10px] font-medium tracking-[0.16em] uppercase rounded-sm border border-bronze/30 bg-[#EFF6FF] text-[#1D4ED8] group-hover:border-gold/50 transition-all duration-300"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="lg:col-span-5 flex flex-col justify-between h-full">
                  <div className="grid grid-cols-1 gap-4 mb-8">
                    {project.metrics.map((m) => (
                      <div
                        key={m.label}
                        className="border-l-2 border-gold/50 pl-4"
                      >
                        <p className="text-[10px] font-mono tracking-[0.2em] uppercase text-[#64748B] mb-1">
                          {m.label}
                        </p>
                        <p className="text-sm font-medium text-[#0F172A]">
                          {m.value}
                        </p>
                      </div>
                    ))}
                  </div>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center space-x-3 px-6 py-3.5 border border-gold bg-gold hover:bg-[#1D4ED8] hover:border-[#1D4ED8] text-white text-[11px] font-medium tracking-[0.24em] uppercase transition-all duration-300"
                  >
                    <span>VIEW ON GITHUB</span>
                    <span className="text-xs">↗</span>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
