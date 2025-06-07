import React from "react";
import { motion } from "framer-motion";
import ProfileImage from "../images/ProfileImage.png"; // Replace with your actual image

function About() {
  return (
    <motion.div
      className="w-screen h-screen bg-[#1F1F1F] text-white flex flex-col items-center justify-center px-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="w-full h-full flex flex-col md:flex-row items-center justify-center max-w-7xl gap-12 p-8">
        <motion.div
          className="relative flex justify-center md:justify-start"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <img
            src={ProfileImage}
            alt="JC Bagorio"
            className="w-80 h-80 md:w-96 md:h-96 rounded-xl object-cover"
          />
        </motion.div>

        <div className="flex flex-col gap-6 text-left max-w-lg">
          <motion.h1
            className="text-4xl md:text-5xl font-bold text-[#4169E1]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            About Me
          </motion.h1>

          <motion.p
            className="text-gray-300 leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2 }}
          >
            I'm <span className="font-semibold">JC Bagorio</span>, a passionate React.js developer and UI/UX designer
            dedicated to crafting seamless and engaging user experiences. With a keen eye for design and a strong foundation in front-end development,
            I create intuitive and visually appealing interfaces that enhance digital interactions.
          </motion.p>
          
          <motion.p
            className="text-gray-300 leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.4 }}
          >
            My expertise includes React.js, JavaScript, Tailwind CSS, and modern UI/UX principles. I'm always eager to learn and explore
            new technologies to stay ahead in the ever-evolving world of web development.
          </motion.p>
        </div>
      </div>
    </motion.div>
  );
}

export default About;