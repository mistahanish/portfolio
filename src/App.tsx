import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { AccordionResources } from "./components/AccordionResources/AccordionResources";
import { ThemeProvider } from "@/components/theme-provider";
import {
  Card,
} from "@/components/ui/card";
import HanishImage from "@/assets/IMG_4083.jpeg";
import { Button } from "./components/ui/button";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Navbar />
      {/* <div className="flex flex-col justify-center items-center h-screen"> */}
      <div className="w-11/12 mx-auto p-4 border-r-1 border-l-1 border-b-1 flex flex-col justify-center items-center">
        <div className="flex flex-row max-w-3/4 min-w-3/4 gap-4">
          <Card className="max-w-2xl p-6 flex justify-center items-center text-center">
            <h1 className="text-3xl font-bold">Hey there, I'm Hanish 👋</h1>
          </Card>

          <Card className="overflow-hidden flex items-center justify-center relative max-w-74/100">
            <style>
              {`
      @keyframes marquee {
        0% { transform: translateX(0%); }
        100% { transform: translateX(-50%); }
      }
    `}
            </style>
            <div
              className="flex whitespace-nowrap text-muted-foreground text-9xl font-serif"
              style={{
                animation: "marquee 60s linear infinite",
              }}
            >
              {/* First copy (NO margin on last item) */}
              <span className="inline-block mr-12">
                🎧 Currently Listening: “City Pop Classics”
              </span>
              <span className="inline-block mr-12">
                🎮 Recently Playing: Elden Ring
              </span>
              <span className="inline-block mr-12">
                📚 Currently Reading: “The Island of Dr. Moreau” by H.G. Wells
              </span>

              {/* Duplicate copy (exact same, NO margin after last item) */}
              <span className="inline-block mr-12">
                🎧 Currently Listening: “City Pop Classics”
              </span>
              <span className="inline-block mr-12">
                🎮 Recently Playing: Elden Ring
              </span>
              <span className="inline-block mr-12">
                📚 Currently Reading: “The Island of Dr. Moreau” by H.G. Wells
              </span>
            </div>
          </Card>
        </div>
        <div className="flex flex-row max-w-3/4 min-w-3/4 gap-4 mt-4">
          <Card className="min-w-2xl p-6 flex justify-center items-center text-center">
            <p className="text-muted-foreground">
              A creative coder and gamer, passionate about designing efficient
              software that blends functionality with imagination 🎮. When I'm
              not building solutions, you'll find me exploring new languages,
              strumming my guitar, or sketching ideas to fuel my projects 🎨.
            </p>
          </Card>
          <Card className="min-w-30/100 p-6 flex flex-col justify-center items-center text-center">
            <img
              src={HanishImage}
              alt="Hanish"
              className="rounded-full border-4 w-24 h-24 md:w-68 md:h-68 object-cover"
            />
            <Button variant="ghost" className="font-bold cursor-pointer">
              About Me
            </Button>
          </Card>
        </div>

        <div className="max-w-3/4 min-w-3/4 mt-4">
          <AccordionResources />
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
