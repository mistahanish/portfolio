import { Link } from "react-router-dom";
import GitHubIcon from "@/assets/github.svg"; // Using <img> for now
import { Separator } from "@/components/ui/separator";
import { Button } from "../ui/button";
import { ModeToggle } from "../mode-toggle";

export default function Navbar() {
  return (
    <header className="border-1 bg-background">
      <div className="p-4 flex items-center justify-between">
        {/* Left: Logo */}
        <div className="flex items-center gap-2">
          <Link to="/portfolio/" className="flex items-center gap-2">
            {/* Logo dots (optional): */}
            <Button
              variant="outline"
              className="h-8 px-4 py-2 text-sm font-bold"
            >
              hanish.
            </Button>
          </Link>
        </div>

        {/* Right: Buttons + Icons */}
        <div className="flex items-center gap-3.5">
          {/* Mode Toggle Button */}
          <ModeToggle />
          {/* Separator */}
          <Separator orientation="vertical" className="h-8 w-px" />
          {/* GitHub Icon Link */}
          <a
            href="https://github.com/mistahanish"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm font-bold"
          >
            <img src={GitHubIcon} alt="GitHub" className="size-6" />
          </a>

          {/* Separator */}
          <Separator orientation="vertical" className="h-8 w-px" />

          {/* resume Button */}
          <Button
            className="h-8 px-4 py-2 text-sm font-bold"
            onClick={() => window.open("./Hanish.pdf", "_blank")}
          >
            resume
          </Button>
        </div>
      </div>
    </header>
  );
}
