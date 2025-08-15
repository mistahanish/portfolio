export type LinkItem = { href: string; label: string };

type PageLinksProps = {
  items: LinkItem[];
  align?: "left" | "center";
};

export function PageLinks({ items, align = "center" }: PageLinksProps) {
  const alignCls =
    align === "left" ? "items-start text-left" : "items-center text-center";

  return (
    <nav aria-label="primary" className={`mt-8 space-y-2 ${alignCls}`}>
      {items.map((l) => (
        <a
          key={l.href}
          href={l.href}
          className="block text-lg md:text-xl font-semibold rounded-none px-1 py-0.5 transition
                     hover:bg-foreground hover:text-background"
        >
          {l.label}
        </a>
      ))}
    </nav>
  );
}
