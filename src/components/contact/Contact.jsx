import './Contact.css';
import {useRef, useState, useEffect} from 'react';
import emailjs from '@emailjs/browser';
import Aos from "aos";
import "aos/dist/aos.css";


const Contact = () => {
    const formRef = useRef();
    const [done, setDone] = useState(false);
    const [done2, setDone2] = useState(false);
    const [done3, setDone3] = useState(false);
    const [load, setLoad] = useState(false);
    var conteo = 0;
        
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
        <h1 className="contact-title">Contacto</h1>
       
        <div className="contact-container-info">
            <div className="contact-left">
                <p className="contact-text">En caso de querer solicitar mis servicios, puede hacerlo a través del siguiente formulario.</p>
                <p className="contact-text">Estoy abierto a cualquier clase de proyectos, no sólo de soluciones para Windows, sino también de desarrollo web.
                </p>
                <p className="contact-text">Gracias por su interés.</p>
            </div>
            <div className="contact-right">
                <form className='contact-form' ref={formRef} onSubmit={handleSubmit}> 
                    <input type="text" placeholder='Su nombre' name='from_name'/>
                    <input type="email" id='email' placeholder='Su email'  name='email'/>
                    <textarea rows="5" placeholder='El motivo de su consulta o interés' name='message'/>
                    <button className='button'>Enviar</button>
                    {load && <div className="lds-dual-ring"></div>}
                </form>
              
                </div>
                
            </div>
        {done && <p className='contact-thanks'>Gracias por su solicitud. Será respondida a la brevedad.</p>}
        {done2 && <p className='contact-alert'>Debe ingresar un email válido.</p>}
        {done3 && <p className='contact-alert'>Ha intentado enviar un formulario más de 5 veces. Aguarde por favor la respuesta a su solicitud</p>}
        
    </div>
  )
}

export default Contact