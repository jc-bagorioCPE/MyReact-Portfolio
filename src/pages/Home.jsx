import React from "react";
import { Facebook, Github, Linkedin } from "lucide-react";
import Hero from "../images/Hero.png";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import TypingAnimation from "@/components/typingAnimation";

function Home() {
  return (
    <div className="min-h-screen w-full bg-[#1F1F1F] text-white flex flex-col items-center justify-center px-4 mt-10">
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center m-10">
        {/* Left: Avatar Image */}
        <div className="relative flex justify-center md:justify-start">
          <div className="absolute w-100 h-100 bg-[#4169E1] rounded-full -z-10" />
          <img
            src={Hero}
            alt="John Carlo Bagorio"
            className="w-100 h-100 object-cover rounded-full shadow-lg border-4 border-[#4169E1] bg-black p-1"
          />
        </div>

        {/* Right: Text Content */}
        <div className="flex flex-col gap-4 text-left">
          <h1 className="text-4xl md:text-5xl font-bold">
            Hello, I'm
          </h1>

          <h2 className="text-2xl md:text-3xl font-semibold text-[#4169E1]">
            John Carlo Bagorio
          </h2>

          <p className="text-gray-300 leading-relaxed">
            <TypingAnimation />
          </p>

          {/* Social Media Icons */}
          <div className="flex items-center justify-start gap-6 mt-4">
            <a href="https://facebook.com/" target="_blank" rel="noopener noreferrer" className="hover:text-[#4169E1] transition">
              <Facebook className="w-8 h-8" />
            </a>
            <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="hover:text-[#4169E1] transition">
              <Github className="w-8 h-8" />
            </a>
            <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" className="hover:text-[#4169E1] transition">
              <Linkedin className="w-8 h-8" />
            </a>
          </div>

          <div className="mt-6">
            <Link to="/projects">
              <Button>View Projects</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
