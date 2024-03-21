import Image from "next/image";
import HeroSection from "./Components/HeroSection";
import { AchivementSection } from "./Components/achivementSection";
import Navbar from "./Components/Navbar";
import AboutSection from "./Components/AboutSection";
import ProjectSection from "./Components/ProjectSection";
import EmailSection from "./Components/EmailSection";
import { Footer } from "./Components/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212] bg-[url('/images/topography.svg')]">
      <Navbar />
      <div className="container mx-auto px-12 py-4">
        <HeroSection />
        <AchivementSection />
        <AboutSection />
        <ProjectSection />
        <EmailSection />
      </div>
      <Footer />
    </main>
  );
}
