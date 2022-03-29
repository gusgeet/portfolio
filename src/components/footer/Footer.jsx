import "./Footer.css";
import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
 
const Footer = () => {
    useEffect(() => {
        Aos.init({ duration:1500 })
    }, []);

    return (
        <div className="footer">
            <div className="footer-container">
                <h1 className="footer-title">Redes</h1>
                    <li><a className='f-link' rel="noreferrer noopener" target="_blanck" href="https://www.linkedin.com/in/gustavo-gonzalez-0b1331178/">Linkedin</a></li>
                    <li><a className='f-link' rel="noreferrer noopener" target="_blanck" href="https://github.com/gusgeet">GitHub</a></li>
            </div>
        </div>
    )
}

export default Footer