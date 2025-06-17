import React from "react";
import ProfileImage from "../images/ProfileImage.png"; // Replace with your actual image
import DownloadCV from "../components/DownloadCV";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

function About() {
  return (
    <div className="w-full h-screen bg-[#1F1F1F] text-white flex flex-col items-center justify-center px-6">
      <div className="w-full h-full flex flex-col md:flex-row items-center justify-center max-w-7xl gap-12 p-8">
        <div className="relative flex justify-center md:justify-start">
          <img
            src={ProfileImage}
            alt="JC Bagorio"
            className="w-80 h-80 md:w-96 md:h-96 rounded-xl object-cover"
          />
        </div>

        <div className="flex flex-col gap-6 text-left max-w-lg">
          <h1 className="text-4xl md:text-5xl font-bold text-[#4169E1]">
            About Me
          </h1>

          <p className="text-gray-300 leading-relaxed">
            I'm <span className="font-semibold">JC Bagorio</span>, a passionate React.js developer and UI/UX designer
            dedicated to crafting seamless and engaging user experiences. With a keen eye for design and a strong foundation in front-end development,
            I create intuitive and visually appealing interfaces that enhance digital interactions.
          </p>

          <p className="text-gray-300 leading-relaxed">
            My expertise includes React.js, JavaScript, Tailwind CSS, and modern UI/UX principles. I'm always eager to learn and explore
            new technologies to stay ahead in the ever-evolving world of web development.
            <DownloadCV />
          </p>
          <Button asChild className="bg-cyan-500 text-white">
            <Link to="/learnmore">Learn More</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}

export default About;
