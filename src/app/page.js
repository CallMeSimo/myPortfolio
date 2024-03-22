import HeroSection from "./Components/HeroSection";
import { AchivementSection } from "./Components/AchivementSection";
import AboutSection from "./Components/AboutSection";
import ProjectSection from "./Components/ProjectSection";
import EmailSection from "./Components/EmailSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212] bg-[url('/images/topography.svg')]">
      <div className="container mx-auto px-12 py-4">
        <HeroSection />
        <AchivementSection />
        <AboutSection />
        <ProjectSection />
        <EmailSection />
      </div>
    </main>
  );
}
