import React from "react";
import {
  Code,
  Database,
  Server,
  Palette,
  Globe,
  FileCode,
  Braces,
  FileText,
  Boxes,
  TerminalSquare,
} from "lucide-react";

const techItems = [
  { name: "React.js", icon: <Code className="w-12 h-12 text-[#4169E1]" /> },
  { name: "Tailwind CSS", icon: <Palette className="w-12 h-12 text-[#4169E1]" /> },
  { name: "MySQL", icon: <Database className="w-12 h-12 text-[#4169E1]" /> },
  { name: "Node.js", icon: <Server className="w-12 h-12 text-[#4169E1]" /> },
  { name: "PHP", icon: <TerminalSquare className="w-12 h-12 text-[#4169E1]" /> },
  { name: "WordPress", icon: <Globe className="w-12 h-12 text-[#4169E1]" /> },
  { name: "Python", icon: <Boxes className="w-12 h-12 text-[#4169E1]" /> },
  { name: "HTML", icon: <FileCode className="w-12 h-12 text-[#4169E1]" /> },
  { name: "CSS", icon: <FileText className="w-12 h-12 text-[#4169E1]" /> },
  { name: "JavaScript", icon: <Braces className="w-12 h-12 text-[#4169E1]" /> },
];

const Techstack = () => {
  return (
    <section className="w-full bg-[#1F1F1F] text-white py-20 px-6 flex flex-col items-center">
      <h2 className="text-3xl md:text-4xl font-bold text-[#4169E1] mb-12">
        My Tech Stack
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 max-w-6xl w-full">
        {techItems.map((item, index) => (
          <div
            key={index}
            className="bg-[#2B2B2B] p-6 rounded-xl shadow-md flex flex-col items-center hover:scale-105 transition-all"
          >
            {item.icon}
            <span className="mt-3 text-lg font-semibold">{item.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Techstack;
