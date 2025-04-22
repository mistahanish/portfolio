import { useEffect, useState } from "react";
import { Button } from "./ui/button";

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  //   A creative coder and gamer, passionate about designing efficient
  //   software that blends functionality with imagination 🎮. When I'm not
  //   building solutions, you'll find me exploring new languages,
  //   strumming my guitar, or sketching ideas to fuel my projects 🎨.
  useEffect(() => {
    const timeout = setTimeout(() => setIsVisible(true), 100); // slight delay
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div
      className={`transition-opacity duration-1000 ease-out ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className="flex flex-col items-center text-center">
        <h1 className="top-[40%] text-6xl font-bold mb-3">
          Hey, I'm Hanish 👋
        </h1>
        <p className="text-muted-foreground max-w-xl mt-3">
          A creative coder and gamer, passionate about designing efficient
          software that blends functionality with imagination 🎮. When I'm not
          building solutions, you'll find me exploring new languages, strumming
          my guitar, or sketching ideas to fuel my projects 🎨.
        </p>
        <Button
          variant="outline"
          className="mt-7 cursor-pointer"
          onClick={() => window.open('./Hanish.pdf', '_blank')}
        >
          resume
        </Button>
      </div>
    </div>
  );
}
