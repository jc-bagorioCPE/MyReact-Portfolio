import * as React from "react";
import { useRef } from "react";
import Autoplay from "embla-carousel-autoplay"; // npm install embla-carousel-autoplay
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export function CarouselDemo() {
  const plugin = useRef(
    Autoplay({ delay: 3000, stopOnInteraction: false, stopOnMouseEnter: true })
  );

  const images = [
    "image1.jpg",
    "image2.jpg",
    "image3.jpg",
    "image4.jpg",
    "image5.jpg",
    "image6.jpg",
  ];

  return (
    <div className="mt-5 flex justify-center items-center ">
      <Carousel
        plugins={[plugin.current]}
        opts={{
          align: "center",
          loop: true,
        }}
        className="w-full max-w-7xl h-full"
      >
        <CarouselContent className="h-full">
          {images.map((img, index) => (
            <CarouselItem
              key={index}
              className="basis-full sm:basis-1/2 lg:basis-1/4 px-4 h-full"
            >
              <Card className="bg-gray-1000 text-white shadow-lg h-full flex flex-col">
                <CardContent className="flex flex-col items-center justify-center p-2 h-full">
                  <img
                    src={`/images/${img}`}
                    alt={`Slide ${index + 1}`}
                    className="w-full h-full object-cover rounded-lg"
                  />
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="text-black" />
        <CarouselNext className="text-black" />
      </Carousel>
    </div>
  );
}
