import Projects from "./Projects";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

const ProjectsContainer = () => {
  useEffect(()=> {
    Aos.init({ duration: 1500 })
  }, [])

  return (
    <div data-aos="fade-down">
        <Projects/>
    </div>
  )
}

export default ProjectsContainer;