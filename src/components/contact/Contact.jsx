import './Contact.css';
import {useRef, useState, useEffect} from 'react';
import emailjs from '@emailjs/browser';
import Aos from "aos";
import "aos/dist/aos.css";


const Contact = () => {
    const formRef = useRef();
    const [done, setDone] = useState(false);
        
    const handleSubmit = (e) => {
        e.preventDefault();
        emailjs.sendForm
        (process.env.REACT_APP_SERVICE_ID, 
        process.env.REACT_APP_TEMPLATE_ID, 
        formRef.current, 
        process.env.REACT_APP_USER_ID)
        .then((result) => {
            console.log(formRef.current)
            setDone(true)
        }, (error) => {
            console.log(error.text);            
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
                    <input type="email" placeholder='Su email'  name='email'/>
                    <textarea rows="5" placeholder='El motivo de su consulta o interés' name='message'/>
                    <button className='button'>Enviar</button>
                    {done && <p>Gracias por su solicitud. Será respondida en breve.</p>}
                </form>
                </div>
            </div>
    </div>
  )
}

export default Contact