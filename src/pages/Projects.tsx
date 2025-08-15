import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

const PROJECTS = [
  {
    id: "chipless",
    title: "Chipless",
    link: "https://github.com/mistahanish/chipless",
    year: "2025",
    description:
      "poker for when u don't have chips, but want to play with a physical deck.",
    popover:
      "I built chipless because me and my friends were in many situations where we wanted to play poker with a physical deck but had no chips. We hated using online poker because in many cases you can find the website being biased and not being completely random. The app includes features like real-time updates, user authentication, side pot tracking, and detailed player statistics to enhance the gaming experience.",
  },
  {
    id: "circa",
    title: "Circa",
    link: "https://guanglinwei.github.io/circa/",
    year: "2025",
    description: "circadian rhythm tracker.",
    popover:
      "With a friend, I built a daily energy tracking app using React (Vite), Firebase, and TailwindCSS, enabling users to log and visualize their energy levels across a 24-hour cycle. Implemented real-time data storage with Firebase Firestore, updating user graphs dynamically as new entries are added. Designed a clean, mobile-responsive UI to promote seamless daily input and personalized pattern recognition.",
  },
  {
    id: "linky",
    title: "Linky",
    link: "https://github.com/mistahanish/buildathon",
    year: "2025",
    description:
      "multiplayer semantic word association game.",
    popover:
      "built with a friend for a competition, however not my best work",
  },
  {
    id: "portfolio",
    title: "Portfolio",
    link: "https://hanishv.com",
    year: "2025",
    description:
      "the website you are on rn :0",
    popover:
      "my portfolio showcasing not only my computer projects, but also showcasing me and who i am :D",
  },
  {
    id: "cashclaw",
    title: "Cash Claw",
    link: "https://github.com/guanglinwei/CashClaw",
    year: "2024",
    description:
      "ok literally don't even look at this project",
    popover:
      "i actually do not know what my teammates were thinking when they entered this into a hackathon.",
  },
  {
    id: "pokerflip",
    title: "Poker Flip",
    link: "https://github.com/guanglinwei/CashClaw",
    year: "2023",
    description:
      "god i guess i really do love poker. simple poker hand flipping app.",
    popover:
      "bitcamp 2023 project with a friend.",
  },
];

export default function Projects() {
  return (
    <div>
      <h1 className="mb-8 text-xl font-semibold">projects</h1>
      <ul className="space-y-4 text-center max-w-lg mx-auto">
        {PROJECTS.map((project) => (
          <li key={project.id} className="text-sm">
            <Popover>
              <PopoverTrigger asChild>
                <button className="w-full text-left p-2 rounded focus:outline-none focus:ring">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="font-medium hover:opacity-70"
                  >
                    {project.title}
                  </a>
                  <div className="text-neutral-500">{project.year}</div>
                  <p className="text-neutral-400 text-xs">
                    {project.description}
                  </p>
                </button>
              </PopoverTrigger>
              <PopoverContent className="max-w-sm p-4">
                <div className="text-sm font-mono">
                  {project.popover}
                </div>
              </PopoverContent>
            </Popover>
          </li>
        ))}
      </ul>
    </div>
  );
}
