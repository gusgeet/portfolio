import './Projects.css';
import React from 'react';
import VetLite from '../../img/vetlite_demo.png';
import VetLite1 from '../../img/vetlite_demo2.png';
import VetLite2 from '../../img/vetlite_demo3.png';
import Slider from 'react-slick/lib/slider';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


export default class CustomArrows extends React.Component {
    render () {
    const settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        lazyLoad: true,
        centerMode: true,
        adaptiveHeight: false,
        arrows: false,
        fade: false,
        slide: '> div',
        autoplaySpeed: 7500,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    centerMode: false
                }
            }
        ]
      };

    return ( 
    <div className='slider-container'>
        <h1 className='projects-title'>Proyectos</h1>
        <h2 className='projects-title'>VetLite (C# y MS SQL)</h2>
        
        <Slider {...settings} className='slick-slider' >
          <div className='slick-slide'>
            <img className='carousel-img' src={VetLite} alt="" />
            <button className='carousel-button'>
                <p className='legend'>VetLite posee una interfaz sencilla e intuitiva, que permite reconocer cada elemento del programa sin mayores introducciones o tutoriales</p>
                <p className='legend'>Escuchando las necesidades de cada médico veterinario, se logró una herramienta accesible y de muy fácil uso.</p>
            </button>
          </div>
          <div className='slick-slide'>
            <img className='carousel-img' src={VetLite1} alt=""/>
            <button className='carousel-button'>
                <p className='legend'>Permite un control de los clientes, con sus datos y cada uno de los pacientes asociados a él.</p>
                <p className='legend'>A su vez, cada historia clínica puede tener ingresos individuales, con cargas de hasta 5 archivos de estudios clínicos.</p>
            </button>
            
          </div>
          <div className='slick-slide'>
            <img className='carousel-img' src={VetLite2} alt=""/>
            <button className='carousel-button'>
                <p className='legend'>Con funciones agregadas a través de actualizaciones, incluye funciones que permiten ahorrar tiempo invaluable para el profesional veterinario.</p>
                <p className='legend'>La agenda permite una integración con la aplicación de Whatsapp para Windows 10.</p>
                <p className='legend'>Con un click se puede enviar un aviso sobre tratamientos o vacunas y su estado</p>
            </button>
          </div>
        </Slider>
    </div>
  )
}
}
