import { useEffect } from 'react';

import './About.css';
import Aos from 'aos';
import "aos/dist/aos.css";

const About = () => {
  useEffect(() => {
    Aos.init({ duration: 3500 });
  }, [])
  

  return (
    <div className='a-about-container' data-aos="fade-down" >
      <h1 className="a-title" data-aos="zoom-in-down">Sobre mí</h1>
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
                  
                  <p className="a-sub">Iniciado en C# y SQL, logré desarrollar una herramienta que al día de hoy, se encuentra en venta en MercadoLibre: VetLite. VetLite es un programa para Windows 
                  que cubre las principales necesidades de un médico veterinario: historia clínica, historial de clientes y sus pacientes a cargo, agenda de tratamientos y vacunas próximas a vencer, 
                  control de saldo deudor de cada uno de los clientes, e incluso integración con Whatsapp para Escritorios para poder enviar un mensaje personalizable avisando sobre el vencimiento 
                  de la vacuna o tratamiento(ésta opción sólo se encuentra disponible para usuarios con Windows 10 instalado).</p>
                  <p className="a-desc">Al día de la fecha, me encuentro estudiando diferentes herramientas para desarrollo web. He finalizado la diplomatura en desarrollo web full stack en  
                  <a className='a-link-numen' rel="noreferrer noopener" target="_blanck" href="https://ar.academianumen.com/"> Academia Numen</a>. Subsecuentemente, me encuentro estudiando un curso de <a className='a-link-ztm' rel="noreferrer noopener" target="_blanck" href="https://zerotomastery.io/">Zero To Mastery(ZTM)</a>: React Js.</p>
                  </div>
          </div>
      </div>
  )
}

export default About