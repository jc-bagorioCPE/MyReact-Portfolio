import About from "../pages/About"
import Project from "../components/ProjectCarousel"
import Home from "../pages/Home";
import Techstack from "@/components/Techstack";
import Footer from "@/components/Footer";

function HeroSection() {
  return (
    <>
      <div className="w-full h-full">
      <div id="home"><Home /></div>
      <div id="about"><About /></div>
      <div id="project" className="bg-[#1F1F1F] min-h-screen pt-20"><Project /></div>
      <div id="techstack" className="bg-[#1F1F1F] min-h-screen pt-20"><Techstack /></div>
      <div><Footer /></div>
      </div>
    </>
  );
}

export default HeroSection;
