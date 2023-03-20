import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useState, useContext, useEffect } from 'react';
import {ReactComponent as svg} from '../../assets/img/menu.svg';
import {ReactComponent as World} from '../../assets/img/world.svg';
import { TranslateContext } from '../../context/Translate';

const Navbar = () => {
    
    //maneja el mobile responsiveness
    const [display, setDisplay] = useState(false);

    //comienza la traduccion
    const [state, setState] = useContext(TranslateContext);
    
    const [lang, setLang ] = useState([]);
    const [rotate, setRotate] = useState(false);

    const handleClick = () => {
        setRotate(!rotate)
        setState(!state)
    }

    useEffect(()=> {
        const Text_Esp = [
            'Inicio',
            'Sobre mí',
            'Proyectos',
            'Habilidades',
            'Contacto',
            'ESP'
        ]
        
        const Text_Eng = [
            'Home',
            'About me',
            'Projects',
            'Skills',
            'Contact',
            'ENG'
        ]
        setLang(state ? Text_Eng: Text_Esp)
    },[state])

    
const NavbarContainer = styled.div`
    width: 100%;
    height: 60px;
    z-index: 20;
    
    @media screen and (max-width: 950px) {
        position: fixed;
        top: 0;
    }
`
const NavbarWrap = styled.div`
    width: 100%;
    height: 100%;
    margin: 0 auto;
    z-index: 20;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgb(2,0,36);
    background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%); 
`

const Nav = styled.nav`
    flex: 1;
    position: relative;
    
    @media screen and (max-width: 950px) {
        display: ${display ? 'grid' : 'none'};
        width: 100%;
        transition: width 1s ease;
        grid-template-columns: 1fr;
        top: 27px;
        height: 25px;
                 
    }
`

const NavLink = styled(Link)`
    color: #000;
    font-size: 16px;
    font-weight: 700;
    color: white;
    text-decoration: none;
    padding: 40px 2rem;
        

    &:hover {
        text-shadow: 0px 10px 8px white;
        transition: 0.9s all;
    }

    @media (max-width: 950px){
        height: 0.1em;
        width: 100%;
        padding: 40px 0rem;
        text-align: center;
        background: rgb(2,0,36);
        background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%);
    }
`

const NavBtn = styled.button`
    display: none;
    width: 50px;
    height: 50px;
    background-color: transparent;
    

    @media screen and (max-width: 950px) {
        display: block;
        position: absolute;
        top: -5px;
        left: 0;
    }
`

const SvgIcon = styled(svg)`
    width: 24px;
    height: 24px;
    color: white;

    @media (max-width: 950px){
        top: 25px;
    }
`

const TranslateSpan = styled.span`
    position: absolute;
    color: white;
    right: 60px;
    font-weight: 700;
    top: 20px;

    @media (max-width: 950px){
        top: 20px;
    }
`

const WorldIcon = styled(World)`
    color: white;
    width: 30px;
    height: 30px;
    position: absolute;
    right: 15px;
    top: 18px;
    cursor: pointer;
    float: right;
    transform: rotate(0deg);
    overflow: hidden;
    transition: all 0.4s ease-out;
    transform: ${props=> (props.rotate ? `rotate(180deg)` : "")};

    @media (max-width: 950px){
        top: 16px; 
    }
`

return (
    <div>
        <NavbarContainer>
                <NavbarWrap>
                    <NavBtn onClick={() => setDisplay(!display)}>
                        <SvgIcon />
                    </NavBtn>
                    <Nav $display={display}>
                        <NavLink to='/' onClick={() => {setDisplay(!display)}}>{lang[0]}</NavLink>
                        <NavLink to='/about' onClick={() => {setDisplay(!display)}}>{lang[1]}</NavLink>
                        {/* <NavLink to='/projects' onClick={() => {setDisplay(!display)}}>{lang[2]}</NavLink> */}
                        <NavLink to='/techs' onClick={() => {setDisplay(!display)}}>{lang[3]}</NavLink>
                        <NavLink to='/contact' onClick={() => {setDisplay(!display)}}>{lang[4]}</NavLink>
                    </Nav>
                    <TranslateSpan>{lang[5]}</TranslateSpan>
                    <WorldIcon rotate={rotate} onClick={handleClick}></WorldIcon>
                </NavbarWrap>
            </NavbarContainer>
    </div>
  )
}

export default Navbar;






