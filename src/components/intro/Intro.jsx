import './Intro.css';
import img from  '../../img/fondo.png';

const Intro = () => {
  return (
    <div className='i'>
        <div className="i-left">
            <div className="i-left-wrapper">
                <h2 className='i-intro'>Bienvenido, mi nombre es</h2>
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
                        Desarrollador de soluciones para Windows basadas en C# y SQL, desarrollador 
                        de páginas web a través de React, apasionado por los avances y 
                        crecimientos de las nuevas tecnologías.
                        </p>
                </div>
               
            </div>
        <div className="i-right">
            <div className="i-bg">
                <img src={img} alt="" className="i-image" />
                </div>
            </div>
    </div>
  )
}

export default Intro