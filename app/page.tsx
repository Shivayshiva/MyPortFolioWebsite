import Navbar from "@/components/Navbar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Experience from "@/components/sections/Experience";
import OfficialProjects from "@/components/sections/OfficialProjects";
import PersonalProjects from "@/components/sections/PersonalProjects";
import Skills from "@/components/sections/Skills";
import Education from "@/components/sections/Education";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative page-enter">
      <Navbar />
      <div className="section-reveal section-reveal-1"><Hero /></div>
      <div className="section-reveal section-reveal-2"><About /></div>
      <div className="section-reveal section-reveal-3"><Experience /></div>
      <div className="section-reveal section-reveal-4"><OfficialProjects /></div>
      <div className="section-reveal section-reveal-5"><PersonalProjects /></div>
      <div className="section-reveal section-reveal-6"><Skills /></div>
      <div className="section-reveal section-reveal-7"><Education /></div>
      <div className="section-reveal section-reveal-8"><Contact /></div>
      <div className="section-reveal section-reveal-9"><Footer /></div>
    </main>
  );
}
  