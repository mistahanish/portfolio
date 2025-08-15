import { TitleCard } from "@/components/TitleCard";
import { PageLinks, type LinkItem } from "@/components/PageLinks";
import { ActionsBar } from "@/components/ActionsBar";
import Updates from "@/pages/Updates";


const LINKS: LinkItem[] = [
  { href: "#/projects", label: "☾⋆⁺₊ projects ₊⁺⋆☽" },
  { href: "#/experience", label: "✦༓ experience ༓✦" },
  { href: "#/about", label: "⟅ about me ⟆" },
  { href: "#/gallery", label: "༺ gallery ༻" },
  { href: "/Hanish.pdf", label: "『✣ resume ✣』" }, // in /public
];

export default function Home() {
  return (
    <>
      <Updates />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginBottom: "1rem",
        }}
      >
        <img
          src="/thinker.png"
          alt="Thinker"
          style={{ maxWidth: "45%", height: "auto" }}
        />
      </div>
      <TitleCard title="HANISH" />
      <PageLinks items={LINKS} />
      <ActionsBar
        githubUrl="https://github.com/mistahanish"
        contactUrl="mailto:me@hanishv.com"
      />
    </>
  );
}
