import { useEffect, useContext, useState } from 'react';
import { TranslateContext } from '../../context/Translate';

import './About.css';
import Aos from 'aos';
import "aos/dist/aos.css";

const About = () => {
  useEffect(() => {
    Aos.init({ duration: 3500 });
  }, [])

  
  const [state] = useContext(TranslateContext);
    
  const [lang, setLang ] = useState([]);
  
  useEffect(()=> {
    const Text_Esp = [
      'Iniciado en C# y SQL, logré desarrollar una herramienta que al día de hoy, se encuentra en venta en MercadoLibre: VetLite.',
      'Es un software para Windows que cubre las principales necesidades de un médico veterinario: ',
      'historia clínica, historial de clientes y sus pacientes a cargo, agenda de tratamientos y vacunas próximas a vencer, control de saldo deudor de cada uno de los clientes, y más. ',
      'Posee integración con Whatsapp para Escritorios para poder enviar un mensaje personalizable avisando sobre el vencimiento de la vacuna o tratamiento (ésta opción sólo se encuentra disponible para usuarios con Windows 10 instalado).',
      'Al día de la fecha, me encuentro trabajando como desarrollador web full stack en ',
      '.',
      'Sobre mí'
  ]
  
  const Text_Eng = [
    'Having started in C# and SQL, I developed a tool that is actually on sale in MercadoLibre\'s site: VetLite.',
    'VetLite is a Windows program that covers the main needs of a veterinarian: ',
    'clinic history, client record and the pacients they have in charge, treatments agenda and vaccines, debtors record, and more.',
    'It works with Whatsapp for desktop to send reminders about treatments and vaccines with their corresponding message if it\'s about to expire, expiring the very same day, or already expired(only available for users running Windows 10\'s OS in their computer).',
    'Up until today, I\'m studying different tools for web development. I\'ve finished Bachelor in Full Stack Web Development at ',
    '. After that, I\'m studying a React Course developed by ',
    'About me'
  ]
    setLang(state ? Text_Eng : Text_Esp)
  },[state])

  

  return (
    <div className='a-about-container' data-aos="fade-down" id="about">
      <h1 className="a-title" data-aos="zoom-in-down">{lang[6]}</h1>
        <div className="about">
              <div className="a-left">
                  <div className="a-card bg"></div>
                  <div className="a-card">
                      <img 
                      src="https://images.pexels.com/photos/160107/pexels-photo-160107.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" 
                      alt="" 
                      className="a-img" />
                      </div>
                  </div>
              <div className="a-right">                  
                  <p className="a-sub">{lang[0]}{lang[1]}{lang[2]}{lang[3]}</p>
                  <p className="a-desc">{lang[4]}
                  <a className='a-link-numen' rel="noreferrer noopener" target="_blanck" href="https://www.lenoxhr.com/">Lenox HR</a>{lang[5]}</p>
                  </div>
          </div>
      </div>
  )
}

export default About