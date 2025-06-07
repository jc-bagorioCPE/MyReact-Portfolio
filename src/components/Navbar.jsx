import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react"; // Import icons
import { Button } from "@/components/ui/button"; // Shadcn Button

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-gray-800 text-[#4169E1] p-4 shadow-md z-50">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <h1 className="text-xl font-bold ml-20">
          <Link to="/">JC</Link>
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
        <ul className="hidden md:flex gap-8 mr-20">
          <li>
            <Link to="/" className="hover:text-white transition">Home</Link>
          </li>
          <li>
            <Link to="/about" className="hover:text-white transition">About</Link>
          </li>
          <li>
            <Link to="/projects" className="hover:text-white transition">Projects</Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-white transition">Contact</Link>
          </li>
        </ul>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="md:hidden flex flex-col bg-gray-900 text-white p-4 gap-4">
          <li>
            <Link to="/" className="hover:text-gray-400" onClick={() => setIsOpen(false)}>Home</Link>
          </li>
          <li>
            <Link to="/about" className="hover:text-gray-400" onClick={() => setIsOpen(false)}>About</Link>
          </li>
          <li>
            <Link to="/projects" className="hover:text-gray-400" onClick={() => setIsOpen(false)}>Projects</Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-gray-400" onClick={() => setIsOpen(false)}>Contact</Link>
          </li>
        </ul>
      )}
    </nav>
  );
}

export default Navbar;
