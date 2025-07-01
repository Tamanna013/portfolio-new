import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Certifications from "./components/Certifications";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ScrollVelocityComponent from "./components/ScrollVelocityComponent";
import Background from "./components/Background";
function App() {
  return(
    <>
      <Background />
      <Navbar />
      <Hero />
      <ScrollVelocityComponent />
      <About />
      <Skills />
      <Projects />
      <Certifications />
      <Experience />
      <Contact />
      <Footer />
    </>
  );
}

export default App
