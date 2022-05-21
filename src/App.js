import React from 'react';
import './App.css';
import About from './components/about/About';
import Contact from './components/contact/Contact';
import Intro from './components/intro/Intro';
import ProjectsContainer from './components/projects/Projects.container';
import Techs from './components/techs/Techs';
import NotFound from './components/notFound/NotFound';
import { 
  BrowserRouter as Router, 
  Switch, 
  Route } 
from 'react-router-dom';
import Navbar from './components/navbar/Navbar';

const App = () => {
  
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path='/' index component={Intro} />
        <Route exact path='/about' component={About} />
        <Route exact path='/techs' component={Techs}/>
        <Route exact path='/projects' component={ProjectsContainer} />
        <Route exact path='/contact' component={Contact} />
        <Route path='*' component={NotFound} />
        
      </Switch>
    </Router>
    
  );
}

export default App;
