import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HeroSection from "./Routes/HeroSection";
import Contact from "./pages/Contact";
import AboutMe from "./pages/Aboutme";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<HeroSection />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/learnmore" element={<AboutMe />} />
      </Routes>
    </Router>
  );
}

export default App;
