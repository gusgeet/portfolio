import { useEffect, useState,useContext } from 'react';
import { TranslateContext } from '../../context/Translate';

import './Intro.css';
import img from  '../../assets/img/fondo.png';
import Aos from 'aos';
import About from '../about/About';
import Techs from '../techs/Techs';
import Contact from '../contact/Contact.jsx';
import "aos/dist/aos.css";

const Intro = () => {
    //comienza la traduccion
    const [state] = useContext(TranslateContext);
    
    const [lang, setLang ] = useState([]);

    useEffect(()=> {
        const Text_Esp = [
            'Bienvenido, mi nombre es',
            'Desarrollador de soluciones para Windows basadas en C# y SQL, desarrollador de páginas web a través de React, apasionado por los avances y crecimientos de las nuevas tecnologías.',
        ]
        
        const Text_Eng = [
            'Welcome, my name is',
            'Windows-based solutions maker through C# and SQL, React developer, and a passionate person for the growth and advances of the new techs.',
        ]
        setLang(state ? Text_Eng : Text_Esp)
    },[state])


    useEffect(()=> {
        Aos.init({ duration: 1500 })
    }, [])

  return (
    <div className='i' data-aos="fade-down" id='wrapper'>
        <section id="wrapper-section">
            <div className="i-left">
                <div className="i-left-wrapper">
                    <h2 className='i-intro'>{lang[0]}</h2>
                    <h1 className='i-name'>Gustavo Gonzalez</h1>
                    <div className="i-title">
                    <div className="i-title-wrapper">
                        <div className="i-title-item">C# developer</div>
                        <div className="i-title-item">Front end</div>
                        <div className="i-title-item">Back end</div>
                        <div className="i-title-item">SQL mantainer</div>
                        <div className="i-title-item">Social media manager</div>
                            </div>
                        </div>
                        <p className="i-description">
                            {lang[1]}
                            </p>
                    </div>
                </div>
            <div className="i-right">
                <div className="i-bg">
                    <img src={img} alt="" className="i-image" />
                </div>
            </div>
        </section>

        <About />
        <Techs />
        <Contact />
    </div>
  )
}

export default Intro