import Navbar from "./navbar";
import Hero from "./hero";
import Service from "./service";
import ServiceTitle from "./servicetitle";
import About from "./about";
import ProjectsTitle from "./projectstitle";
import Projects from "./projects";
import Skills from "./skills";
import Contact  from "./contact";
import Footer from "./footer";
import BackToTop from "./backtotop";

export default function Home() {
  return (
    <>
      <Navbar/>
      <Hero/>
      <About/>
      <Skills/>
      <ServiceTitle/>
      <Service/>
      <ProjectsTitle/>
      <Projects/>
      <Contact/>
      <Footer/>
      <BackToTop/>
    </>
  );
}
