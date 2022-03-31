import './Techs.css'
import logocss from '../../img/css.png';
import logohtml from '../../img/html.png';
import logojs from '../../img/js.png';
import logo1 from '../../img/react.png';
import logo3 from '../../img/sql.png';
import logo4 from '../../img/csharp.png';
import logo6 from '../../img/firebase.png';
import logo5 from '../../img/git.png';
import { useEffect } from "react";
import Aos from 'aos';
import "aos/dist/aos.css";

const Techs = () => {
  useEffect(() => {
    Aos.init({ duration: 1500 })
  }, []);

  return (
    <div className="techs-container" data-aos="fade-down">
        <div className="tech-holder">
            <div className="techs">
                <h1 className="techs-text">Skills</h1>
            </div>
            <div className="techs-img">
                <img src={logohtml} alt="logo html" className="tech-img" />
                <img src={logocss} alt="logo css" className="tech-img" />
                <img src={logojs} alt="logo javascript" className="tech-img" />
                <img src={logo1} alt="logo react" className="tech-img" />
                <img src={logo3} alt="logo sql" className="tech-img" />
                <img src={logo4} alt="logo c#" className="tech-img" />
                <img src={logo6} alt="logo firebase" className="tech-img" />
                <img src={logo5} alt="logo git" className="tech-img" />
            </div>
        </div>
    </div>
    
  )
}

export default Techs