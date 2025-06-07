import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "../pages/About";
import Projects from "../pages/Projects";
import Contact from "../pages/Contact";
import Navbar from "../components/Navbar";
import HeroSection from "./HeroSection";


function NavRoute() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HeroSection />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default NavRoute;
