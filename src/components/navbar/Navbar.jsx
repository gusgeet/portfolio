import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useState } from 'react/cjs/react.development';
import { css } from 'styled-components';


const Navbar = () => {
    const [display, setDisplay] = useState(false);
    const [status, setStatus] = useState('none')
    
    const clickHandler = () => {
        setDisplay(!display);
        const seeStatus = display ? 'none' : 'grid'
        setStatus(seeStatus)
    }


const NavbarContainer = styled.div`
    width: 100%;
    height: 70px;
    z-index: 20;
    
    @media screen and (max-width: 750px) {
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
   
    

    @media screen and (max-width: 750px) {
        ${({display}) => {
            return css`
            display: ${display ? 'grid' : 'none'};
            `;
        }}
        width: 100%;
        transition: width 1s ease;
        grid-template-columns: 1fr;
        top: 47px;
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

    @media (max-width: 750px){
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
    

    @media screen and (max-width: 750px) {
        display: block;
        position: absolute;
        left: 0;
        

        svg{
            width: 24px;
            height: 24px;
            
        }
    }
`
return (
    <div>
        <NavbarContainer>
                <NavbarWrap>
                    <NavBtn onClick={() => clickHandler()}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </NavBtn>
                    <Nav display={display}>
                        <NavLink to='/' onClick={() => {setDisplay(!display)}}>Home</NavLink>
                        <NavLink to='/about' onClick={() => {setDisplay(!display)}}>Sobre mí</NavLink>
                        <NavLink to='/projects' onClick={() => {setDisplay(!display)}}>Proyectos</NavLink>
                        <NavLink to='/techs' onClick={() => {setDisplay(!display)}}>Skills</NavLink>
                        <NavLink to='/contact' onClick={() => {setDisplay(!display)}}>Contactos</NavLink>
                    </Nav>
                </NavbarWrap>
            </NavbarContainer>
    </div>
  )
}

export default Navbar;






