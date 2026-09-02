import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import SkillsSection from "./components/SkillsSection";
import TechStack from "./components/TechStack";
import ExperienceSection from "./components/ExperienceSection";
import ProjectsSection from "./components/ProjectsSection";
import ContactSection from "./components/ContactSection";
import CustomCursor from "./components/CustomCursor";

function App() {
  return (
    <div className="w-full min-h-screen bg-black text-[#E8DFD8] font-body selection:bg-[#cbb59d] selection:text-black lg:cursor-none">
      <CustomCursor />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <TechStack />
      <ExperienceSection />
      <ProjectsSection />
      <ContactSection />
    </div>
  );
}

export default App;
