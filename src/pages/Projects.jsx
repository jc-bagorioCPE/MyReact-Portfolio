import React from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { ChevronLeft, ChevronRight } from "lucide-react";

function ProjectCard({ title, description }) {
  return (
    <Card className="bg-[#1E1E2F] border border-gray-700 rounded-xl p-6 shadow-md hover:shadow-xl transition-transform duration-300 hover:scale-105 min-w-[280px] max-w-xs mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl font-semibold text-[#4169E1]">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-gray-300">{description}</p>
      </CardContent>
    </Card>
  );
}

const projectsData = [
  { title: "GoSend App", description: "An E-WALLET web app" },
  { title: "AI Bot for E-Wallet", description: "An AI chatbot for customer support" },
  { title: "Career Compass AI", description: "AI-powered career assistant with voice input" },
  { title: "Trucking Scheduler", description: "Logistics scheduling system using PHP and MySQL" },
  { title: "8-bit CPU Design", description: "Simulated CPU built with Logisim" },
  { title: "AI Traffic Light System", description: "Smart traffic controller with Python" },
];

function Projects() {
  return (
    <div className="min-h-screen w-full bg-[#1F1F1F] text-white flex flex-col items-center justify-center px-6 py-12">
      <h1 className="text-4xl md:text-5xl font-bold text-[#4169E1] mb-10">My Projects</h1>

      <div className="relative w-full max-w-6xl">
        <Carousel loop>
          <CarouselContent className="space-x-6">
            {projectsData.map(({ title, description }, index) => (
              <CarouselItem key={index} className="inline-block">
                <ProjectCard title={title} description={description} />
              </CarouselItem>
            ))}
          </CarouselContent>

          <CarouselPrevious
            className="absolute top-1/2 left-0 -translate-y-1/2 p-2 rounded-full bg-[#4169E1] text-white hover:bg-[#254eda] shadow-lg cursor-pointer"
            aria-label="Previous"
          >
            <ChevronLeft size={24} />
          </CarouselPrevious>
          <CarouselNext
            className="absolute top-1/2 right-0 -translate-y-1/2 p-2 rounded-full bg-[#4169E1] text-white hover:bg-[#254eda] shadow-lg cursor-pointer"
            aria-label="Next"
          >
            <ChevronRight size={24} />
          </CarouselNext>
        </Carousel>
      </div>
    </div>
  );
}

export default Projects;
