import React from "react";
import Footer from "@/components/Footer";
import { CarouselDemo } from "@/components/CarouselDemo";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "@/components/ui/card";
import {
  User,
  Target,
  Rocket,
  BadgeCheck,
  Briefcase,
  Scroll,
} from "lucide-react";

const DialogCard = ({ title, icon, description, details }) => (
  <Dialog>
    <DialogTrigger asChild>
      <Card className="cursor-pointer bg-[#1C1C1C] border border-[#2D2D2D] rounded-xl shadow-sm hover:shadow-lg transition-transform transform hover:scale-[1.03] duration-300 flex flex-col items-center justify-center p-6 text-center min-h-[180px]">
        <div className="mb-3 text-[#FF914D] dark:text-[#FF914D]">
          {React.cloneElement(icon, { size: 28 })}
        </div>
        {/* Title text with bright accent color */}
        <CardTitle className="text-lg font-semibold mb-2 text-[#FF914D] dark:text-[#FF914D]">
          {title}
        </CardTitle>
        <CardContent className="text-gray-300 text-sm leading-relaxed">{description}</CardContent>
      </Card>
    </DialogTrigger>
    <DialogContent className="bg-[#1C1C1C] text-white border border-[#2D2D2D] max-w-xl">
      <DialogHeader>
        {/* DialogTitle with accent color */}
        <DialogTitle className="text-2xl font-bold text-[#FF914D] dark:text-[#FF914D]">
          {title}
        </DialogTitle>
        <DialogDescription className="text-gray-400 mb-4">{description}</DialogDescription>
      </DialogHeader>
      <div className="text-sm text-gray-300 space-y-3">{details}</div>
    </DialogContent>
  </Dialog>
);

const AboutMe = () => {
  return (
    <div className="w-full min-h-screen bg-[#121212] text-white flex flex-col">
      <main className="flex-grow px-6 py-16 max-w-7xl mx-auto">
        <div className="mb-14">
          <CarouselDemo />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <DialogCard
            title="Who Am I?"
            icon={<User className="text-[#FF914D]" />}
            description="Click to learn more about me."
            details={
              <div>
                <p>
                  I’m <strong>John Carlo Bagorio</strong>, a passionate and driven graduate with a Bachelor of Science in Computer Engineering from Dr. Yanga’s Colleges Inc.
                </p>
                <p className="mt-2">
                  I enjoy building modern web interfaces and solving real-world problems using technology.
                </p>
                <ul className="list-disc pl-5 mt-3 text-sm space-y-1">
                  <li>Frontend development using React.js</li>
                  <li>UI/UX design with Tailwind CSS and Figma</li>
                  <li>Collaborative projects using Git and GitHub</li>
                </ul>
              </div>
            }
          />

          <DialogCard
            title="Career Objective"
            icon={<Target className="text-[#E879F9]" />}
            description="My goals and passion in tech."
            details={
              <div>
                <p>
                  My objective is to grow as a software engineer by contributing to innovative, user-centric digital solutions.
                </p>
                <ul className="list-disc pl-5 mt-3 text-sm space-y-1">
                  <li>Web system development and full-stack solutions</li>
                  <li>AI integration for smarter apps</li>
                  <li>Solving user problems through elegant UI/UX</li>
                </ul>
                <p className="mt-2">
                  I'm open to internships, junior roles, and freelance opportunities that allow me to learn and build meaningful software.
                </p>
              </div>
            }
          />

          <DialogCard
            title="Featured Projects"
            icon={<Rocket className="text-[#A78BFA]" />}
            description="Click to view my highlighted projects."
            details={
              <ul className="list-disc pl-5 space-y-2 text-sm">
                <li>
                  <strong>GoSend E-Wallet App</strong> — React-based UI with smart chatbot and real-time notifications.
                </li>
                <li>
                  <strong>Career Compass AI</strong> — AI-powered career assistant using voice input and digital signal processing.
                </li>
                <li>
                  <strong>Trucking Scheduler Web App</strong> — A logistics system built using PHP and MySQL to optimize delivery schedules.
                </li>
                <li>
                  <strong>8-bit CPU Design</strong> — Simulated an 8-bit CPU using Logisim for educational purposes.
                </li>
                <li>
                  <strong>AI Traffic Light System</strong> — A smart traffic controller using pedestrian detection and Python logic.
                </li>
              </ul>
            }
          />

          <DialogCard
            title="Tech & Tools"
            icon={<BadgeCheck className="text-[#4ADE80]" />}
            description="Explore my tech stack."
            details={
              <div>
                <p>I have hands-on experience with a diverse set of technologies and tools:</p>
                <ul className="list-disc pl-5 mt-3 text-sm space-y-1">
                  <li>
                    <strong>Frontend:</strong> React.js, Tailwind CSS, HTML5, CSS3, JavaScript
                  </li>
                  <li>
                    <strong>Backend:</strong> PHP, Python (basic), MySQL
                  </li>
                  <li>
                    <strong>Tools:</strong> Git, Figma, Canva, AutoCAD 2D/3D
                  </li>
                  <li>
                    <strong>Others:</strong> Logisim, XAMPP, Visual Studio, PyCharm
                  </li>
                </ul>
              </div>
            }
          />

          <DialogCard
            title="OJT Experience"
            icon={<Briefcase className="text-[#38BDF8]" />}
            description="My internship journey and experience."
            details={
              <div>
                <p>I completed my On-the-Job Training at a local tech firm, where I:</p>
                <ul className="list-disc pl-5 mt-3 text-sm space-y-1">
                  <li>Assisted in building React components for client dashboards</li>
                  <li>Learned Git for version control in team environments</li>
                  <li>Participated in weekly sprints and agile tasks</li>
                </ul>
                <p className="mt-2">
                  This experience helped me apply my academic skills to real-world projects and improve my technical communication.
                </p>
              </div>
            }
          />

          <DialogCard
            title="Certificates"
            icon={<Scroll className="text-[#FBBF24]" />}
            description="My completed trainings and certifications."
            details={
              <ul className="list-disc pl-5 space-y-2 text-sm">
                <li>
                  <strong>React Basics –</strong> Meta via Coursera
                </li>
                <li>
                  <strong>Responsive Web Design –</strong> freeCodeCamp
                </li>
                <li>
                  <strong>Python for Beginners –</strong> Sololearn
                </li>
                <li>
                  <strong>UI/UX Design Essentials –</strong> Udemy
                </li>
              </ul>
            }
          />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AboutMe;
