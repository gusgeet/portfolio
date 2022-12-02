import Projects from "./Projects";
import { useEffect, useState, useContext } from "react";
import { TranslateContext } from "../../context/Translate";
import Aos from "aos";
import "aos/dist/aos.css";

const ProjectsContainer = () => {
  useEffect(()=> {
    Aos.init({ duration: 1500 })
  }, [])

  const [state] = useContext(TranslateContext);
    
  const [lang, setLang ] = useState([]);

  useEffect(()=> {
      const Text_Esp = [
          'Bienvenido, mi nombre es',
          'Desarrollador de soluciones para Windows basadas en C# y SQL, desarrollador de páginas web a través de React, apasionado por los avances y crecimientos de las nuevas tecnologías.',
      ]
      
      const Text_Eng = [
          'Welcome, my name is',
          'Windows-based solutions made in C# and SQL, React developer, and a passionate person for the growth and advances of the new techs.',
      ]
      setLang(state ? Text_Eng : Text_Esp)
  },[state])


  

  return (
    <div className='projects-container' data-aos="fade-down">
        <Projects/>
    </div>
  )
}

export default ProjectsContainer;