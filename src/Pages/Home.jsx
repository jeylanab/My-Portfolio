import Hero from "../Components/Hero/Hero";
import About from "../Components/Experiences/Experiences";
import Skills from "../Components/Skills/Skills";
import Projects from "../Components/Project/Projects";
import Achievements from "../Components/Achievements/Achievements";
import Stats from "../Components/Stats/Stats";
import Contact from "../Components/Contact/Contact";

const Home = () => {
  return (
    <main>
      <Hero />
      <Stats />
      <About />
      <Skills />
      <Projects />
      <Achievements />
      <Contact />
    </main>
  );
};

export default Home;
