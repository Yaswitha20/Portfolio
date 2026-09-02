import Marquee from "react-fast-marquee";
import {
  SiPython,
  SiPytorch,
  SiTensorflow,
  SiLangchain,
  SiHuggingface,
  SiFastapi,
  SiApachespark,
  SiDocker,
  SiKubernetes,
  SiScikitlearn,
  SiGooglecloud,
  SiTypescript,
  SiReact,
  SiMongodb,
  SiPostgresql,
} from "react-icons/si";

const techIcons = [
  { icon: SiPython, label: "Python" },
  { icon: SiPytorch, label: "PyTorch" },
  { icon: SiTensorflow, label: "TensorFlow" },
  { icon: SiLangchain, label: "LangChain" },
  { icon: SiHuggingface, label: "Hugging Face" },
  { icon: SiFastapi, label: "FastAPI" },
  { icon: SiApachespark, label: "Apache Spark" },
  { icon: SiDocker, label: "Docker" },
  { icon: SiKubernetes, label: "Kubernetes" },
  { icon: SiScikitlearn, label: "Scikit-learn" },
  { icon: SiGooglecloud, label: "GCP" },
  { icon: SiTypescript, label: "TypeScript" },
  { icon: SiReact, label: "React" },
  { icon: SiMongodb, label: "MongoDB" },
  { icon: SiPostgresql, label: "PostgreSQL" },
];

const TechStack: React.FC = () => {
  return (
    <section className="relative w-full bg-black py-10 border-y border-bronze/20 overflow-hidden">
      <Marquee
        gradient
        gradientColor="#000000"
        gradientWidth={120}
        speed={40}
        pauseOnHover
      >
        {techIcons.map(({ icon: Icon, label }) => (
          <div
            key={label}
            className="flex items-center gap-3 mx-8 text-[#A8988B] hover:text-gold transition-colors"
          >
            <Icon size={28} />
            <span className="text-xs font-medium tracking-[0.18em] uppercase">
              {label}
            </span>
          </div>
        ))}
      </Marquee>
    </section>
  );
};

export default TechStack;
