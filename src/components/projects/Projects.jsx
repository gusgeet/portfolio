import './Projects.css';
import React from 'react';
import VetLite from '../../assets/img/vetlite/vetlite_demo.png';
import VetLite1 from '../../assets/img/vetlite/vetlite_demo2.png';
import VetLite2 from '../../assets/img/vetlite/vetlite_demo3.png';
import crwnImg from '../../assets/img/crwnStore/crwn_store.png';
import crwnImg1 from '../../assets/img/crwnStore/crwn_store1.png';
import crwnImg2 from '../../assets/img/crwnStore/crwn_store2.png';
import crwnImg3 from '../../assets/img/crwnStore/crwn_store3.png';
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
    arrows: true,
    fade: true,
    slide: '> div',
    autoplaySpeed: 4500,
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
      <div className="project-container">
        <h1 className='projects-title'>Proyectos</h1>
        <h2 className='projects-title'>VetLite (C# y MS SQL)</h2>
        
        <Slider {...settings} className='slick-slider' >
          <div className='slick-slide'>
            <img className='carousel-img' src={VetLite} alt="" />
            <p className='legend'>VetLite posee una interfaz sencilla e intuitiva, que permite reconocer cada elemento del programa sin mayores introducciones o tutoriales</p>
            <p className='legend'>Escuchando las necesidades de cada médico veterinario, se logró una herramienta accesible y de muy fácil uso.</p>
            <p className='legend'>Permite un control de los clientes, con sus datos y cada uno de los pacientes asociados a él.</p>
            
          </div>
          <div className='slick-slide'>
            <img className='carousel-img' src={VetLite1} alt=""/>
            <p className='legend'>A su vez, cada historia clínica puede tener ingresos individuales, con cargas de hasta 5 archivos de estudios clínicos.</p>
            <p className='legend'>Con funciones agregadas a través de actualizaciones, incluye funciones que permiten ahorrar tiempo invaluable para el profesional veterinario.</p>
          </div>
          <div className='slick-slide'>
            <img className='carousel-img' src={VetLite2} alt=""/>
            <p className='legend'>La agenda permite una integración con la aplicación de Whatsapp para Windows 10.</p>
            <p className='legend'>Con un click se puede enviar un aviso sobre tratamientos o vacunas y su estado</p>
          </div>
        </Slider>
      </div>
      {/* <div className="project-container">
        <h2 className='projects-title'><a href="https://app-4-weather.netlify.app/" className='projects-link'>Weather App(React)</a></h2>
        <Slider {...settings} className='slick-slider' >
          <div className='slick-slide'>
            <img className='carousel-img' src={Weather} alt=""/>
            <p className='legend'>Aplicación para verificar el clima en las principales ciudades del mundo.En el proyecto, se utiliza la API de MetaWeather.com.</p>
          </div>
          <div className='slick-slide'>
            <img className='carousel-img' src={Weather2} alt=""/>
            <p className='legend'>Según el clima, se muestra una imágen dinámica correspondiente al clima mostrado.</p>            
          </div>
          <div className='slick-slide'>
            <img className='carousel-img' src={Weather3} alt=""/>
            <p className='legend'>Según el clima, se muestra una imágen dinámica correspondiente al clima mostrado.</p>
          </div>
        </Slider>
      </div>  */}
      <div className="project-container">
        <a href="https://crwn-store-app.netlify.app/" className='projects-link'>
          <h2 className='projects-title' >CRWN Clothing Store App(React)
          </h2>
          
        </a> 
        
        <Slider {...settings} className='slick-slider' >
          <div className='slick-slide'>
            <img className='carousel-img' src={crwnImg} alt=""/>
            <p className='legend'>Proyecto de E-Commerce, incluyendo Redux y Styled components en su código.</p>
          </div>
          <div className='slick-slide'>
            <img className='carousel-img' src={crwnImg1} alt=""/>
            <p className='legend'>A través de Firebase y Firestore, se realiza el almacenamiento de la DDBB.</p>            
          </div>
          <div className='slick-slide'>
            <img className='carousel-img' src={crwnImg2} alt=""/>
            <p className='legend'>Las categorías de productos se obtienen mediante Firebase.</p>            
          </div>
          <div className='slick-slide'>
            <img className='carousel-img' src={crwnImg3} alt=""/>
            <p className='legend'>Contiene un checkout y carrito, hecho en Redux.</p>            
          </div>
        </Slider>
      </div>
    </div>
  )
}
}


// const [lang, setLang ] = useState([]);
    
//     useEffect(()=> {
//       const Text_Esp = [
//         'Iniciado en C# y SQL, logré desarrollar una herramienta que al día de hoy, se encuentra en venta en MercadoLibre: VetLite.',
//         'VetLite es un programa para Windows que cubre las principales necesidades de un médico veterinario: ',
//         'historia clínica, historial de clientes y sus pacientes a cargo, agenda de tratamientos y vacunas próximas a vencer, control de saldo deudor de cada uno de los clientes, y más. ',
//         'Incluso posee integración con Whatsapp para Escritorios para poder enviar un mensaje personalizable avisando sobre el vencimiento de la vacuna o tratamiento(ésta opción sólo se encuentra disponible para usuarios con Windows 10 instalado).',
//         'Al día de la fecha, me encuentro estudiando diferentes herramientas para desarrollo web. He finalizado la diplomatura en desarrollo web full stack en  ',
//         '. Subsecuentemente, me encuentro estudiando un curso de React de '
//     ]
    
//     const Text_Eng = [
//       'Having started in C# and SQL, I developed a tool that is actually on sale in MercadoLibre\'s site: VetLite.',
//       'VetLite is a Windows program that covers the main needs of a veterinarian: ',
//       'clinic history, client record and the pacients they have in charge, treatments agenda and vaccines, debtors record, and more.',
//       'It works with Whatsapp for desktop to send reminders about treatments and vaccines with their corresponding message if it\'s about to expire, expiring the very same day, or already expired(only available for users running Windows 10\'s OS in their computer).',
//       'Up until today, I\'m studying different tools for web development. I\'ve finished Bachelor in Full Stack Web Development at ',
//       '. After that, I\'m studying a React Course developed by '  
//     ]
//       setLang(state ? Text_Eng : Text_Esp)
//     },[state])


