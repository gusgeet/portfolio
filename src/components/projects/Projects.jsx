import './Projects.css';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';
import React from 'react';
import VetLite from '../../img/vetlite_demo.png';
import VetLite1 from '../../img/vetlite_demo2.png';
import VetLite2 from '../../img/vetlite_demo3.png';


class Projects extends React.Component {
   render () {
   return ( 

    <div className="projects">
        <h1 className='projects-title'>Proyectos</h1>
        <h2 className='projects-subtitle'>VetLite</h2>
        <Carousel>
            <div className='carousel-div'>
                <img className='carousel-img' src={VetLite} />
                <p className="legend">VetLite posee una interfaz sencilla e intuitiva, que permite reconocer cada elemento del programa sin mayores introducciones o tutoriales</p>
            </div>
            <div className='carousel-div'>
                <img className='carousel-img' src={VetLite1} />
                <p className="legend">Permite un control de los clientes, con sus datos y cada uno de los pacientes asociados a él. A su vez, cada historia clínica puede tener ingresos individuales, con cargas de hasta 5 archivos de estudios clínicos.</p>
            </div>
            <div className='carousel-div'>
                <img className='carousel-img' src={VetLite2} />
                <p className="legend">Con integración de la aplicación Whatsapp para Escritorios (disponible en la tienda de Windows 10), está preparado para generar avisos de vencimientos de vacunas y tratamientos con sólo un click.</p>
            </div>
        </Carousel>
    </div>
  )
}
}

export default Projects