import React from "react";
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
  Mail,
} from "lucide-react";
import { CarouselDemo } from "@/components/CarouselDemo";

const SectionCard = ({ icon, title, children }) => (
  <Card className="w-full md:w-[48%] bg-[#1C1C1C] border border-[#2D2D2D] text-white rounded-2xl shadow hover:shadow-lg transition-all duration-300">
    <CardHeader className="flex items-center gap-2">
      {icon}
      <CardTitle className="text-lg md:text-xl">{title}</CardTitle>
    </CardHeader>
    <CardContent>
      <div className="text-gray-300 text-sm md:text-base">{children}</div>
    </CardContent>
  </Card>
);

const AboutMe = () => {
  return (
    <div className="w-full min-h-screen px-4 py-16 bg-[#121212] text-white">
      {/* Carousel stays untouched */}
      <div className="mb-10">
        <CarouselDemo />
      </div>

      {/* Cards layout with flex */}
      <div className="flex flex-wrap justify-center gap-6">
        <SectionCard title="Who Am I?" icon={<User className="text-[#FF914D]" />}>
          I’m <strong>John Carlo Bagorio</strong>, a fresh graduate with a
          Bachelor of Science in Computer Engineering from Dr. Yanga’s Colleges
          Inc. I specialize in frontend development, UI/UX design, and web
          technologies like React.js and Tailwind CSS.
        </SectionCard>

        <SectionCard title="Career Objective" icon={<Target className="text-[#E879F9]" />}>
          I aim to apply my technical knowledge, problem-solving abilities, and
          passion for innovation in a real-world setting. I’m eager to join a
          forward-thinking team and contribute to system development, AI-powered
          solutions, or user-focused interfaces.
        </SectionCard>

        <SectionCard title="Featured Projects" icon={<Rocket className="text-[#A78BFA]" />}>
          <ul className="list-disc pl-5 space-y-1">
            <li><strong>GoSend E-Wallet App</strong> — UI/UX + frontend using React.js</li>
            <li><strong>Career Compass AI</strong> — AI-powered voice-based career guide using DSP</li>
            <li><strong>Trucking Scheduler Web App</strong> — PHP + MySQL logistics system</li>
            <li><strong>8-bit CPU Design</strong> — Simulated in Logisim</li>
            <li><strong>AI Traffic Light System</strong> — Detects pedestrian flow to control timers</li>
          </ul>
        </SectionCard>

        <SectionCard title="Tech & Tools" icon={<BadgeCheck className="text-[#4ADE80]" />}>
          React.js, Tailwind CSS, PHP, MySQL, Logisim, Python (basic), AutoCAD
          2D/3D, Git, Figma, Canva, and Microsoft Office Suite.
        </SectionCard>

        <SectionCard title="Let’s Connect" icon={<Mail className="text-[#60A5FA]" />}>
          You can reach me at{" "}
          <a href="mailto:jc.bagorio515@gmail.com" className="text-[#FF914D] underline">
            jc.bagorio515@gmail.com
          </a>{" "}
          or call me at 0969-478-7554. I’m open to collaboration and hiring opportunities.
        </SectionCard>
      </div>

      <footer className="bg-gray-800 mt-12 text-white p-4 text-center rounded-xl">
        <p>&copy; {new Date().getFullYear()} JC's Portfolio. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default AboutMe;
