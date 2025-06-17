import React, { useCallback, useEffect, useRef } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import useEmblaCarousel from "embla-carousel-react";

function ProjectCard({ title, description }) {
  return (
    <div className="bg-gray-900 border border-gray-700 rounded-xl p-6 shadow-lg hover:shadow-2xl transition duration-300 h-full hover:scale-105">
      <h2 className="text-2xl font-semibold text-[#4169E1]">{title}</h2>
      <p className="text-gray-300 mt-2">{description}</p>
    </div>
  );
}

function ProjectCarousel({ className = "" }) {
  const projects = [
    { title: "GoSend App", description: "An E-WALLET web app" },
    { title: "AI Bot for E-Wallet", description: "An AI chatbot for customer support" },
    { title: "Automated Waste Bin", description: "A smart bin with AI-powered waste detection" },
    { title: "Traffic Flow AI", description: "Data-driven traffic management for schools" },
  ];

  const autoplayDelay = 3000;
  const autoplayRef = useRef(null);
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  const autoplay = useCallback(() => {
    if (!emblaApi) return;
    if (emblaApi.canScrollNext()) {
      emblaApi.scrollNext();
    } else {
      emblaApi.scrollTo(0);
    }
  }, [emblaApi]);

  useEffect(() => {
    autoplayRef.current = setInterval(autoplay, autoplayDelay);
    return () => clearInterval(autoplayRef.current);
  }, [autoplay]);

  return (
    <div className={`w-full bg-[#1F1F1F] text-white flex flex-col items-center px-6 py-12 pb-24 m-0 ${className}`}>
      <h1 className="text-4xl md:text-5xl font-bold text-[#4169E1] mb-8">My Projects</h1>

      <div className="relative w-full max-w-4xl">
        <Carousel
          opts={{ loop: true }}
          orientation="horizontal"
          ref={emblaRef}
          className="w-full"
        >
          <CarouselContent className="-ml-4">
            {projects.map((project, index) => (
              <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3">
                <ProjectCard {...project} />
              </CarouselItem>
            ))}
          </CarouselContent>

          <CarouselPrevious className="absolute -left-16 top-1/2 -translate-y-1/2 z-10 bg-white text-black hover:bg-[#4169E1] hover:text-white p-2 rounded-full shadow-lg transition" />
          <CarouselNext className="absolute -right-16 top-1/2 -translate-y-1/2 z-10 bg-white text-black hover:bg-[#4169E1] hover:text-white p-2 rounded-full shadow-lg transition" />
        </Carousel>
      </div>
    </div>
  );
}

export default ProjectCarousel;
