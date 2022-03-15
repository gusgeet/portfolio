import { useContext } from 'react';
import { ThemeContext } from '../../context';

import Moon from '../../img/moon.png';
import Sun from '../../img/sun.png';
import './Toggle.css';


const Toggle = () => {
    const theme = useContext(ThemeContext)
    const handleClick = () => {
        theme.dispatch({type: "TOGGLE"});
    }

    return (
        <div className='t'>
            <img src={Sun} alt="" className="t-icon" />
            <img src={Moon} alt="" className="t-icon" />
            <div className="t-button" onClick={handleClick} style={{left: theme.state.darkMode ? "25px" : "0px", color: theme.state.darkMode ? "black" : "white"}}></div>
        </div>
    )
    }

export default Toggle