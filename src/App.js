import React from 'react';
import './App.css';
import About from './components/about/About';
import Techs from './components/techs/Techs';
import Contact from './components/contact/Contact';
import Intro from './components/intro/Intro';
//import ProjectsContainer from './components/projects/Projects.container';
import NotFound from './components/notFound/NotFound';
import Translate from './context/Translate';
import { 
  BrowserRouter as Router, 
  Switch, 
  Route } 
from 'react-router-dom';
import Navbar from './components/navbar/Navbar';

const App = () => {
  
  return (
    <Router>
      <Translate>
        <Navbar />
        <Switch>
          <Intro />
        </Switch>
      </Translate>
    </Router>
    
  );
}

export default App;
