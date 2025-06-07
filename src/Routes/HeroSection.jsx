import About from "../pages/About"
import Project from "../components/ProjectCarousel"
import Contact from "../pages/Contact"
import Home from "../pages/Home";


function HeroSection() {
  return (
    <>
        <Home />
        <About />
        <Project className="mt-0" />
        <Contact className="mt-0"/>
    </>
  );
}

export default HeroSection;
