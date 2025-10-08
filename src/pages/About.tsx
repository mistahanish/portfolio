import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

export default function About() {
  return (
    <div className="max-w-xl mx-auto p-4">
      <Carousel
        orientation="horizontal"
        className="mb-6"
        opts={{ loop: true }}
        plugins={[
          Autoplay({
            delay: 3000, // 3 seconds between slides
            stopOnInteraction: false, // keeps autoplay running unless hovered
          }),
        ]}
      >
        <CarouselContent>
          <CarouselItem>
            <div className="w-full aspect-[11/9]">
              <img
                src="/me.jpeg"
                alt="picture1"
                className="w-full h-full object-cover shadow-md rounded-lg"
              />
            </div>
          </CarouselItem>
          <CarouselItem>
            <div className="w-full aspect-[11/9]">
              <img
                src="/me2.png"
                alt="picture2"
                className="w-full h-full object-cover shadow-md rounded-lg"
              />
            </div>
          </CarouselItem>
          <CarouselItem>
            <div className="w-full aspect-[11/9]">
              <img
                src="/me3.jpeg"
                alt="picture3"
                className="w-full h-full object-cover shadow-md rounded-lg"
              />
            </div>
          </CarouselItem>
        </CarouselContent>
      </Carousel>

      {/* About Me Text Section */}
      <div className="text-left space-y-4">
        <h1 className="text-xl font-bold tracking-wide text-left">about</h1>
        <p className="leading-relaxed">
          Hey, I’m Hanish — a developer, designer, and student at the University
          of Maryland. I enjoy building minimal, functional applications that
          blend aesthetics with usability.
        </p>
        <p className="leading-relaxed">
          When I’m not coding, you’ll probably find me bouldering, sketching new
          ideas, working on creative projects, or diving deep into anime and
          gaming. I’m passionate about exploring new technologies, sharpening my
          skills, and crafting experiences that genuinely resonate with people.
        </p>
        <p className="leading-relaxed">
          And above all, I really love my friends and family!
        </p>
      </div>
    </div>
  );
}
