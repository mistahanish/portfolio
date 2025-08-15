import { Suspense, lazy } from "react";
import { Routes, Route, Outlet } from "react-router-dom";
import { ThemeProvider } from "@/components/theme-provider";
import { HomeButton } from "@/components/HomeButton";

function Layout() {
  return (
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      <main className="min-h-svh grid place-items-center">
        <HomeButton /> {/* <-- here, not in a page */}
        <section className="w-full max-w-xl px-6 py-10 text-center">
          <Outlet />
        </section>
        <footer className="fixed bottom-3 left-1/2 -translate-x-1/2 text-xs opacity-70 font-mono">
          © {new Date().getFullYear()} hanish vadlamudi
        </footer>
      </main>
    </ThemeProvider>
  );
}

const Home = lazy(() => import("@/pages/Home"));
const Projects = lazy(() => import("@/pages/Projects"));
const Gallery = lazy(() => import("@/pages/Gallery"));
const Experience = lazy(() => import("@/pages/Experience"));
const About = lazy(() => import("@/pages/About"));
const NotFound = lazy(() => import("@/pages/NotFound"));

function Loading() {
  return <div className="text-sm opacity-70">loading…</div>;
}

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="projects" element={<Projects />} />
        <Route
          path="gallery"
          element={
            <Suspense fallback={<Loading />}>
              <Gallery />
            </Suspense>
          }
        />
        <Route path="experience" element={<Experience />} />
        <Route
          path="about"
          element={
            <Suspense fallback={<Loading />}>
              <About />
            </Suspense>
          }
        />
        <Route
          path="*"
          element={
            <Suspense fallback={<Loading />}>
              <NotFound />
            </Suspense>
          }
        />
      </Route>
    </Routes>
  );
}
