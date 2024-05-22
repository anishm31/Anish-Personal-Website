import HomeDesign from "./components/HomeDesign";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  return (
    <div>
      <Navbar />
      <HomeDesign />
      <Skills />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
