import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/mode-toggle";

function GitHubMark(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fill="currentColor"
        d="M12 .5C5.73.5.5 5.73.5 12c0 5.1 3.29 9.43 7.86 10.96.58.1.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.69-3.88-1.54-3.88-1.54-.53-1.35-1.29-1.71-1.29-1.71-1.05-.72.08-.71.08-.71 1.16.08 1.77 1.19 1.77 1.19 1.03 1.76 2.7 1.25 3.36.96.1-.75.4-1.25.73-1.54-2.56-.29-5.26-1.28-5.26-5.69 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.47.11-3.06 0 0 .97-.31 3.18 1.18.92-.26 1.9-.39 2.88-.39.98 0 1.96.13 2.88.39 2.2-1.5 3.17-1.18 3.17-1.18.63 1.59.23 2.77.11 3.06.74.81 1.19 1.84 1.19 3.1 0 4.42-2.7 5.39-5.27 5.67.41.35.78 1.04.78 2.1 0 1.52-.01 2.74-.01 3.11 0 .31.21.67.8.56A10.5 10.5 0 0 0 23.5 12C23.5 5.73 18.27.5 12 .5z"
      />
    </svg>
  );
}

function MailIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
         strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M3 7l9 6 9-6" />
    </svg>
  );
}

type ActionsBarProps = {
  githubUrl?: string;
  contactUrl?: string; // e.g., "mailto:you@example.com"
};

export function ActionsBar({
  githubUrl = "https://github.com/mistahanish",
  contactUrl = "mailto:me@hanishv.com",
}: ActionsBarProps) {
  return (
    <div className="mt-8 flex items-center justify-center gap-3">
      <ModeToggle />
      <Button asChild variant="outline" size="icon" className="font-mono" title="GitHub">
        <a href={githubUrl} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
          <GitHubMark className="h-[1.2rem] w-[1.2rem]" />
        </a>
      </Button>
      <Button asChild variant="outline" size="icon" className="font-mono" title="Email">
        <a href={contactUrl} aria-label="Email">
          <MailIcon className="h-[1.2rem] w-[1.2rem]" />
        </a>
      </Button>
    </div>
  );
}
