import HomeDesign from "./components/HomeDesign";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Experiences from "./components/Experiences";

function App() {
  return (
    <div>
      <Navbar />
      <HomeDesign />
      <Skills />
      <About />
      <Experiences />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
