import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";

export function HomeButton() {
  const { pathname } = useLocation();
  if (pathname === "/") return null; // hide on home
  return (
    <div className="fixed top-4 left-4 z-50">
      <Button asChild variant="outline" size="icon" className="font-mono" title="Home">
        <Link to="/" aria-label="Home">
          <Home className="h-[1.1rem] w-[1.1rem]" />
        </Link>
      </Button>
    </div>
  );
}
