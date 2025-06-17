import React from "react";

function ProjectCard({ title, description }) {
  return (
    <div className="bg-gray-900 border border-gray-700 rounded-xl p-6 shadow-lg hover:shadow-2xl transition duration-300 hover:scale-105">
      <h2 className="text-2xl font-semibold text-[#4169E1]">{title}</h2>
      <p className="text-gray-300 mt-2">{description}</p>
    </div>
  );
}

function Projects() {
  return (
    <div className="min-h-screen w-full bg-[#1F1F1F] text-white flex flex-col items-center justify-center px-6 py-12">
      <h1 className="text-4xl md:text-5xl font-bold text-[#4169E1] mb-8">My Projects</h1>
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-6">
        <ProjectCard title="GoSend App" description="An E-WALLET web app" />
        <ProjectCard title="AI Bot for E-Wallet" description="An AI chatbot for customer support" />
      </div>
    </div>
  );
}

export default Projects;
