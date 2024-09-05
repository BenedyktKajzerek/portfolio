import "./App.css";
import { About } from "./components/sections/about";
import { Contact } from "./components/sections/contact";
import { Hero } from "./components/sections/hero";
import { Navbar } from "./components/sections/navbar";
import { Projects } from "./components/sections/projects";
import { Skills } from "./components/sections/skills";
import { SpeedInsights } from "@vercel/speed-insights/react";

function App() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>

      <SpeedInsights />
    </>
  );
}

export default App;
