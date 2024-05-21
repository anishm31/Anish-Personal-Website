import HomeDesign from "./components/HomeDesign";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import About from "./components/About";
import Projects from "./components/Projects";

function App() {
  return (
    <div>
      <Navbar />
      <HomeDesign />
      <Skills />
      <About />
      <Projects />
    </div>
  );
}

export default App;
