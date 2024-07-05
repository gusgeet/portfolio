import React from 'react';
import './App.css';
import Intro from './components/intro/Intro';
//import ProjectsContainer from './components/projects/Projects.container';
import Translate from './context/Translate';
import { 
  BrowserRouter as Router, 
  Switch, 
  } 
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
