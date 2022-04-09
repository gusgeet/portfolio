import React from 'react';
import './App.css';
import About from './components/about/About';
import Contact from './components/contact/Contact';
import Intro from './components/intro/Intro';
import ProjectsContainer from './components/projects/Projects.container';
import Techs from './components/techs/Techs';
import NotFound from './components/notFound/NotFound';
import styled from 'styled-components';
import { 
  BrowserRouter as Router, 
  Switch, 
  Route } 
from 'react-router-dom';

import { Link } from 'react-router-dom';


const NavbarContainer = styled.div`
  width: 100%;
  height: 80px;
  z-index: 20;
  background: transparent;
`
const NavbarWrap = styled.div`
  width: 100%;
  height: 100%;
  margin: 0 auto;
  z-index: 20;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #ffb1b1;
  
`

const Nav = styled.nav`
  flex: 1;
  position: relative;  
`

const NavLink = styled(Link)`
  color: #000;
  padding: 0 40px;
  font-size: 16px;
  line-height: 150px;
  font-weight: 700;
  text-decoration: none;
  gap: 15px;
  justify-content: space-around;

  &:hover {
    text-shadow: 0px 3px 13px darkblue;
    transition: 0.5s ease-in-out;
  }

  @media (max-width: 750px){
    padding: 0 10px;
    margin: 0 auto;
    text-align: center;
    gap: 30px;
  }
`

const App = () => {
  
  return (
    <Router>
      <div>
          <NavbarContainer>
                <NavbarWrap>
                    <Nav>
                        <NavLink to='/'>Home</NavLink>
                        <NavLink to='/about'>Sobre mí</NavLink>
                        <NavLink to='/projects'>Proyectos</NavLink>
                        <NavLink to='/techs'>Skills</NavLink>
                        <NavLink to='/contact'>Contactos</NavLink>
                    </Nav>
                </NavbarWrap>
            </NavbarContainer>
        
      </div>
        <Switch>
            <Route exact path='/' component={Intro} />

            <Route path='/about' component={About} />
              
            <Route path='/techs' component={Techs}/>
             
            <Route path='/projects' component={ProjectsContainer} />
        
            <Route path='/contact' component={Contact} />
            
            <Route path='*' component={NotFound} />
            
          </Switch>
    </Router>
    
  );
}

export default App;
