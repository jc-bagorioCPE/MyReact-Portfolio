import { useState, useEffect } from "react";
import { useLocation, useNavigate, Link } from "react-router-dom";
import { Menu, X, CodeXml } from "lucide-react";
import { Button } from "@/components/ui/button";


function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
  }, []);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleScroll = (sectionId) => {
    setIsOpen(false);
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        scrollToSection(sectionId);
      }, 100);
    } else {
      scrollToSection(sectionId);
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-gray-900 text-[#00BFFF] p-4 shadow-md z-50">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <h1
          className="text-2xl font-bold ml-4 md:ml-20 cursor-pointer hover:text-white transition"
          onClick={() => handleScroll("home")}
        >
          <CodeXml className="w-6 h-6 inline mr-2" />
        </h1>

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </Button>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 mr-4 md:mr-20 text-lg font-medium">
          <li className="cursor-pointer text-[#00BFFF] hover:text-white transition" onClick={() => handleScroll("home")}>Home</li>
          <li className="cursor-pointer text-[#00BFFF] hover:text-white transition" onClick={() => handleScroll("about")}>About</li>
          <li className="cursor-pointer text-[#00BFFF] hover:text-white transition" onClick={() => handleScroll("project")}>Projects</li>
          <li className="cursor-pointer text-[#00BFFF] hover:text-white transition" onClick={() => handleScroll("techstack")}>Techstack</li>
          <li>
            <Link to="/contact" className="text-[#00BFFF] hover:text-white transition">Contact</Link>
          </li>
        </ul>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="md:hidden flex flex-col bg-gray-900 text-[#00BFFF] p-4 gap-4 text-xl font-medium">
          <li className="cursor-pointer hover:text-white" onClick={() => handleScroll("home")}>Home</li>
          <li className="cursor-pointer hover:text-white" onClick={() => handleScroll("about")}>About</li>
          <li className="cursor-pointer hover:text-white" onClick={() => handleScroll("project")}>Projects</li>
          <li className="cursor-pointer hover:text-white" onClick={() => handleScroll("techstack")}>Techstack</li>
          <li>
            <Link to="/contact" className="hover:text-white" onClick={() => setIsOpen(false)}>Contact</Link>
          </li>
        </ul>
      )}
    </nav>
  );
}

export default Navbar;
