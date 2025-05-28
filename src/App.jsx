import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import About from "./Components/About";
import Skills from "./Components/Skills";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";
import { Box } from "@chakra-ui/react";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import ExperienceTimeline from "./Components/Experience";

function App() {
  return (
    <Box style={{ marginTop: "0px" }}>
      <Navbar id="nav-menu" />
      <Home id="home" />
      <About id="about" class="about-section" />
      <Skills id="skills" />
      <ExperienceTimeline id="experience" />
      <Projects id="projects" />
      <Contact id="contact" />

</Box>
  );
}

export default App;
