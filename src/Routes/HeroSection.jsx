import About from "../pages/About"
import Project from "../components/ProjectCarousel"
import Home from "../pages/Home";
import Techstack from "@/components/Techstack";

function HeroSection() {
  return (
    <>
      <div id="home"><Home /></div>
      <div id="about"><About /></div>
      <div id="project"><Project /></div>
      <div id="techstack"><Techstack /></div>
    </>
  );
}

export default HeroSection;
