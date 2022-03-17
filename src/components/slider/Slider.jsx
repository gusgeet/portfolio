import './Slider.scss';
import arrow from '../../img/arrow.png';
import {useState} from 'react';
import logo1 from '../../img/trio.png';
import logo2 from '../../img/react.png';
import logo3 from '../../img/csharp.png';
import logo4 from '../../img/sql.png';

export const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const data = [{
    id: 1,
    logo: logo1,
    text: "lorem ipsum lorem ipsum lorem ipsum lorem ipsum ",
    title: "HTML, CSS y Javascript"
  },{
    id: 2,
    logo: logo2,
    text: "lorem ipsum",
    title: "React"
  },{
    id: 3,
    logo: logo3,
    text: "lorem ipsum",
    title: "C#"
  },{
    id: 4,
    logo: logo4,
    text: "lorem ipsum",
    title: "MS SQL"
  }
  ]

  const handleClick = (way) => {
    way === "left"
    ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2)
    : setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0);
  }

  return (
    <div className='works' id='works'>
        <div className="slider" style={{transform: `translateX(-${currentSlide * 100}vw)`}}>
        {data.map((d) => (
          <div className="containerSlider">
            <div className="item">
              <div className="left">
                <div className="leftContainer">
                  <h2 className='leftText'>{d.title}</h2>
                </div>
              </div>
              <div className="right">
                <img
                  src={d.logo}
                  alt=""
                />
              </div>
            </div>
          </div>
        ))}
        </div>
        <img 
        src={arrow} 
        alt="" 
        className="arrow left" 
        onClick={() => handleClick("left")}/>
        
        <img 
        src={arrow} 
        alt="" 
        className="arrow right" 
        onClick={() => handleClick()}/>
    </div>
  )
}

export default Slider