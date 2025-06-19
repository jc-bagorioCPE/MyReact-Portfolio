import { useState, useEffect } from "react";
import { useLocation, useNavigate, Link } from "react-router-dom";
import { Menu, X, CodeXml } from "lucide-react";
import { Button } from "@/components/ui/button";

const sections = ["home", "about", "project", "techstack"];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";

    const handleScroll = () => {
      for (let id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const top = el.getBoundingClientRect().top;
          if (top <= 100 && top >= -200) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
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

  const navLinkClass = (id) =>
    `cursor-pointer px-2 py-1 rounded-md transition duration-300 ${location.pathname === "/" && activeSection === id
      ? "text-white underline underline-offset-4"
      : "text-[#00BFFF] hover:text-white"
    }`;


  return (
    <nav className="fixed top-0 left-0 w-full bg-gray-900 p-4 shadow-md z-50">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <h1
          className="text-2xl font-bold ml-4 md:ml-20 cursor-pointer text-[#00BFFF] hover:text-white transition"
          onClick={() => handleScroll("home")}
        >
          <CodeXml className="w-6 h-6 inline mr-2" />
        </h1>

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          className="md:hidden text-[#00BFFF]"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </Button>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 mr-4 md:mr-20 text-lg font-medium">
          {sections.map((id) => (
            <li key={id} className={navLinkClass(id)} onClick={() => handleScroll(id)}>
              {id.charAt(0).toUpperCase() + id.slice(1)}
            </li>
          ))}
          <li
            className={`cursor-pointer px-2 py-1 rounded-md transition duration-300 ${location.pathname === "/contact"
                ? "text-white underline underline-offset-4"
                : "text-[#00BFFF] hover:text-white"
              }`}
          >
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </div>
      {/* Mobile Menu */}
      {isOpen && (
        <ul className="md:hidden flex flex-col bg-gray-900 text-lg font-medium p-4 gap-4">
          {sections.map((id) => (
            <li
              key={id}
              className={navLinkClass(id)}
              onClick={() => handleScroll(id)}
            >
              {id.charAt(0).toUpperCase() + id.slice(1)}
            </li>
          ))}
          <li>
            <Link
              to="/contact"
              className="hover:text-white"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
          </li>
        </ul>
      )}
    </nav>
  );
}

export default Navbar;
