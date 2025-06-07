import React from "react";
import { motion } from "framer-motion";
import { Facebook, Github, Linkedin, Code, Database, Server, Palette } from "lucide-react";
import Hero from "../images/Hero.png";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import TypingAnimation from "@/components/typingAnimation";

function Home() {
  return (
    <div className="min-h-screen w-screen bg-[#1F1F1F] text-white flex flex-col items-center justify-center px-4 mt-10">
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center m-10">
        {/* Left: Avatar Image */}
        <motion.div
          className="relative flex justify-center md:justify-start"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <div className="absolute w-100 h-100 bg-[#4169E1] rounded-full -z-10" />
          <img
            src={Hero}
            alt="John Carlo Bagorio"
            className="w-100 h-100 object-cover rounded-full shadow-lg border-4 border-[#4169E1] bg-black p-1"
          />
        </motion.div>

        {/* Right: Text Content */}
        <div className="flex flex-col gap-4 text-left">
          <motion.h1
            className="text-4xl md:text-5xl font-bold"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Hello, I'm
          </motion.h1>

          <motion.h2
            className="text-2xl md:text-3xl font-semibold text-[#4169E1]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            John Carlo Bagorio
          </motion.h2>

          <motion.p
            className="text-gray-300 leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2 }}
          >
            <TypingAnimation />
          </motion.p>

          {/* Social Media Icons */}
          <motion.div
            className="flex items-center justify-start gap-6 mt-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.2 }}
          >
            <a href="https://facebook.com/" target="_blank" rel="noopener noreferrer" className="hover:text-[#4169E1] transition">
              <Facebook className="w-8 h-8" />
            </a>
            <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="hover:text-[#4169E1] transition">
              <Github className="w-8 h-8" />
            </a>
            <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" className="hover:text-[#4169E1] transition">
              <Linkedin className="w-8 h-8" />
            </a>
          </motion.div>

          <motion.div className="mt-6" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.4 }}>
            <Link to="/projects">
              <Button>View Projects</Button>
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Tech Stack Section */}
      <motion.div className="mt-20 text-center w-full" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.5 }}>
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#4169E1]">My Tech Stack</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="flex flex-col items-center">
            <Code className="w-14 h-14 text-white" />
            <span className="mt-2 text-lg font-semibold">React.js</span>
          </div>
          <div className="flex flex-col items-center">
            <Palette className="w-14 h-14 text-white" />
            <span className="mt-2 text-lg font-semibold">Tailwind CSS</span>
          </div>
          <div className="flex flex-col items-center">
            <Database className="w-14 h-14 text-white" />
            <span className="mt-2 text-lg font-semibold">MySQL</span>
          </div>
          <div className="flex flex-col items-center">
            <Server className="w-14 h-14 text-white" />
            <span className="mt-2 text-lg font-semibold">Node.js</span>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default Home;
