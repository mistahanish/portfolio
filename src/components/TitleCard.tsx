import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

type TitleCardProps = { title?: string };

export function TitleCard({ title = "HANISH" }: TitleCardProps) {
  const [stamp, setStamp] = useState("");

  useEffect(() => {
    const tick = () => {
      const now = new Date();
      const date = now.toLocaleDateString(undefined, { year: "2-digit", month: "2-digit", day: "2-digit" });
      const time = now.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
      setStamp(`${date}  ${time}`);
    };
    tick();
    const id = setInterval(tick, 60_000);
    return () => clearInterval(id);
  }, []);

  return (
    <header className="text-center">
      <h1 className="text-4xl md:text-5xl font-extrabold tracking-wide">
        <Link to="/">
          {title}
        </Link>
      </h1>
      <p className="mt-1 text-xs font-mono opacity-70">{stamp} EST</p>
    </header>
  );
}
