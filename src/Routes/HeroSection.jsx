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
      <div id="project"><Project /></div>
      <div id="techstack"><Techstack /></div>
      <div><Footer /></div>
      </div>
    </>
  );
}

export default HeroSection;
