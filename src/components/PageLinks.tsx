import { Link } from "react-router-dom";

export type LinkItem = { href: string; label: string };

type PageLinksProps = {
  items: LinkItem[];
  align?: "left" | "center";
};

// Move this OUTSIDE the component so it persists! (๑•̀ㅂ•́)و
let clickCount = 0;

export function PageLinks({ items, align = "center" }: PageLinksProps) {
  const playClickSound = () => {
    clickCount += 1;
    
    const soundFile = clickCount % 2 === 1
      ? "/sounds/straycat1.mp3"
      : "/sounds/straycat2.mp3";
    
    const audio = new Audio(soundFile);
    audio.volume = 0.5;
    audio.play().catch((err) => console.log("Audio play failed:", err));
  };

  const alignCls =
    align === "left" ? "items-start text-left" : "items-center text-center";

  // Helper to detect external/pdf links
  const isExternal = (href: string) => {
    return (
      href.startsWith("http") ||
      href.startsWith("mailto:") ||
      href.endsWith(".pdf")
    );
  };

  return (
    <nav aria-label="primary" className={`mt-8 space-y-2 ${alignCls}`}>
      {items.map((l) => {
        const external = isExternal(l.href);

        if (external) {
          return (
            <a
              key={l.href}
              href={l.href}
              target={l.href.endsWith(".pdf") ? "_blank" : undefined}
              rel="noopener noreferrer"
              onMouseDown={playClickSound}
              className="block text-lg md:text-xl font-semibold rounded-none px-1 py-0.5 transition
                         hover:bg-foreground hover:text-background"
            >
              {l.label}
            </a>
          );
        }

        return (
          <Link
            key={l.href}
            to={l.href}
            onMouseDown={playClickSound}
            className="block text-lg md:text-xl font-semibold rounded-none px-1 py-0.5 transition
                       hover:bg-foreground hover:text-background"
          >
            {l.label}
          </Link>
        );
      })}
    </nav>
  );
}