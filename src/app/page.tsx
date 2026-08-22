import BackgroundSystem from "@/components/BackgroundSystem";
import ScrollProgress from "@/components/ScrollProgress";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import LeadershipAchievements from "@/components/LeadershipAchievements";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <div className="relative isolate">
      <BackgroundSystem />
      <ScrollProgress />
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <LeadershipAchievements />
      <Contact />
    </div>
  );
}
