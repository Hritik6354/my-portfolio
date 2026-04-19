import Navbar from "./components/Navbar";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Skills from "./components/sections/Skills";
import Projects from "./components/sections/Projects";
import Experience from "./components/sections/Experience";
import Contact from "./components/sections/Contact";
import Stars from "./components/canvas/Stars";

function App() {
  return (
    <>
      <Stars />
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
    </>
  );
}

export default App;