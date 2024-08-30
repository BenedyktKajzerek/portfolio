import "./App.css";
import { About } from "./components/sections/about";
import { Contact } from "./components/sections/contact";
import { Hero } from "./components/sections/hero";
import { Navbar } from "./components/sections/navbar";
import { Skills } from "./components/sections/skills";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        {/* <Projects /> */}
        <Contact />
      </main>
    </>
  );
}

export default App;
