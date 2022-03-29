import { useContext } from 'react';
import './App.css';
import About from './components/about/About';
import Contact from './components/contact/Contact';
import Intro from './components/intro/Intro';
import ProjectsContainer from './components/projects/Projects.container';
import Techs from './components/techs/Techs';
import Toggle from './components/toggle/Toggle';
import { ThemeContext } from './context';

function App() {
  const theme = useContext(ThemeContext)
  const darkMode = theme.state.darkMode;
  

  return (
    <div style={{background:darkMode ? "#2b333d" : "linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(23,221,196,1) 100%, rgba(0,0,255,1) 100%)", color: darkMode && "white"}} className="App">
      <Toggle />
      <Intro/>
      <About/>
      <Techs/>
      <ProjectsContainer />
      <Contact />
      
    </div>
  );
}

export default App;
