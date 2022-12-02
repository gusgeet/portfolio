import './Techs.css'
import logocss from '../../assets/img/css.png';
import logohtml from '../../assets/img/html.png';
import logojs from '../../assets/img/js.png';
import logo1 from '../../assets/img/react.png';
import logo3 from '../../assets/img/sql.png';
import logo4 from '../../assets/img/csharp.png';
import logo5 from '../../assets/img/git.png';
import logo6 from '../../assets/img/firebase.png';
import logo7 from '../../assets/img/github.png';
import logo8 from '../../assets/img/vue.png';
import logo9 from '../../assets/img/redux.png';
import logo10 from '../../assets/img/vm.png';
import logo11 from '../../assets/img/jQuery.png';
import logo12 from '../../assets/img/netMVC.png';

import { useEffect, useContext, useState } from "react";
import {TranslateContext} from '../../context/Translate';
import Aos from 'aos';
import "aos/dist/aos.css";

const Techs = () => {
  useEffect(() => {
    Aos.init({ duration: 1500 })
  }, []);

  const [state, setState] = useContext(TranslateContext);
    
  const [lang, setLang ] = useState([]);

  useEffect(()=> {
      const Text_Esp = [
          'Habilidades'
      ]
      
      const Text_Eng = [
          'Skills'
      ]
      setLang(state ? Text_Eng : Text_Esp)
  },[state])

  return (
    <div className="techs-container" data-aos="fade-down">
        <div className="tech-holder">
            <div className="techs">
                <h1 className="techs-text">{lang[0]}</h1>
            </div>
            <div className="techs-img">
                <img src={logohtml} alt="logo html" className="tech-img" />
                <img src={logocss} alt="logo css" className="tech-img" />
                <img src={logojs} alt="logo javascript" className="tech-img" />
                <img src={logo1} alt="logo react" className="tech-img" />
                <img src={logo3} alt="logo sql" className="tech-img" />
                <img src={logo4} alt="logo c#" className="tech-img" />
                <img src={logo6} alt="logo firebase" className="tech-img" />
                <img src={logo7} alt="logo git" className="tech-img" />
                <img src={logo8} alt="logo git" className="tech-img" />
                <img src={logo9} alt="logo git" className="tech-img" />
                <img src={logo10} alt="logo git" className="tech-img" />
                <img src={logo11} alt="logo git" className="tech-img" />
            </div>
        </div>
    </div>
    
  )
}

export default Techs