import './Techs.css'
import logo1 from '../../img/react.png';
import logo2 from '../../img/trio.png';
import logo3 from '../../img/sql.png';
import logo4 from '../../img/csharp.png';
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
                <img src={logo1} alt="" className="tech-img" />
                <img src={logo2} alt="" className="tech-img" />
                <img src={logo3} alt="" className="tech-img" />
                <img src={logo4} alt="" className="tech-img" />
            </div>
        </div>
    </div>
    
  )
}

export default Techs