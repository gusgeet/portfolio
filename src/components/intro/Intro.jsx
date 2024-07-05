import './Intro.css';
import img from  '../../img/image.png';

const Intro = () => {
    const techs = [
        'C#',
        'Typescript / Javascript',
        'SQL / MongoDB / Firebird / Firebase',
        'ASP Net Core / ASP Net MVC',
        '.Net Framework',
        'React / Vue',
        'Git / Github',
        'Jira',
    ]

  return (
    <div className='i'>
        <div className="i-left">
            <div className="i-left-wrapper">
                <h2 className='i-intro'>Bienvenido, mi nombre es</h2>
                <h1 className='i-name'>Gustavo</h1>
                <div className="i-title">
                <div className="i-title-wrapper">
                    { techs.map(t => {
                        return (
                            <div className="i-title-item">{t}</div>
                            ) 
                        }) }
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