import './Contact.css';
import {useRef, useState, useEffect, useContext} from 'react';
import emailjs from '@emailjs/browser';
import Aos from "aos";
import { TranslateContext } from '../../context/Translate';
import "aos/dist/aos.css";


const Contact = () => {
    const formRef = useRef();
    const [done, setDone] = useState(false);
    const [done2, setDone2] = useState(false);
    const [done3, setDone3] = useState(false);
    const [load, setLoad] = useState(false);
    var conteo = 0;

    const [state, setState] = useContext(TranslateContext);
    const [lang, setLang] = useState([]);

    useEffect(()=> {
        const Text_Esp = [
            'Contacto',
            'En caso de querer solicitar mis servicios, puede hacerlo a través del siguiente formulario.',
            'Estoy abierto a cualquier clase de proyectos, no sólo de soluciones para Windows, sino también de desarrollo web.',
            'Gracias por su interés.',
            'Nombre',
            'Email',
            'El motivo de su consulta o interés',
            'Enviar',
            'Gracias por su solicitud. Será respondida a la brevedad.',
            'Debe ingresar un email válido.',
            'Ha intentado enviar un formulario más de 5 veces. Aguarde por favor la respuesta a su solicitud'
        ]
        
        const Text_Eng = [
            'Contact',
            'In case you want to adquire my services, you can do it through this form.',
            'I\'m open to any kind of projects, not only of Windows based solutions, but also for web development.',
            'Thank you for your interest.',
            'Name',
            'Email address',
            'The reason of your consultation',
            'Send',
            'Thank you for applying. You\'ll get a response as soon as possible.',
            'A valid email address is required.',
            'You\'ve tried to send a form more than 5 times. Please, wait for the answer to your request.'
        ]
        setLang(state ? Text_Eng: Text_Esp)
    },[state])
        
    const handleSubmit = (e) => {
        e.preventDefault();
       
        var emailContent = document.getElementById('email').value;
        var validation = /^([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]{2,})$/i
        

        if(!emailContent){
            if(done === true){
                setDone(false)
            }
            return setDone2(true)
        }
        
        if(done3 === true){
            return setDone3(true)
        }

        if(!emailContent.match(validation)){
            if(done === true){
                setDone(false)
            }
            return (setDone2(true), setLoad(false))
        }
        if(conteo === 3){
            return (setDone3(true), setLoad(false))
        }

        if(done2 === true){
            setDone2(false)
        }
        
        setLoad(true)
        emailjs.sendForm
        
        (process.env.REACT_APP_SERVICE_ID, 
        process.env.REACT_APP_TEMPLATE_ID, 
        formRef.current, 
        process.env.REACT_APP_USER_ID)
        .then((result) => {
            conteo += 1;
            setDone(true)
            setLoad(false)
        }, (error) => {
            
        });
    }
    useEffect(() => {
        Aos.init({ duration:1500 })
    }, []);

  return (
    <div className='contact-container' data-aos="fade-down">
        <h1 className="contact-title">{lang[0]}</h1>
       
        <div className="contact-container-info">
            <div className="contact-left">
                <p className="contact-text">{lang[1]}</p>
                <p className="contact-text">{lang[2]}
                </p>
                <p className="contact-text">{lang[3]}</p>
            </div>
            <div className="contact-right">
                <form className='contact-form' ref={formRef} onSubmit={handleSubmit}> 
                    <input type="text" placeholder={lang[4]} name='from_name'/>
                    <input type="email" id='email' placeholder={lang[5]}  name='email'/>
                    <textarea rows="5" placeholder={lang[6]} name='message'/>
                    <button className='button'>{lang[7]}</button>
                    {load && <div className="lds-dual-ring"></div>}
                </form>
              
                </div>
                
            </div>
        {done && <p className='contact-thanks'>{lang[8]}</p>}
        {done2 && <p className='contact-alert'>{lang[9]}</p>}
        {done3 && <p className='contact-alert'>{lang[10]}</p>}
        
    </div>
  )
}

export default Contact