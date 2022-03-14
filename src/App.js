import './App.css';
import About from './components/about/About';
import Contact from './components/contact/Contact';
import Intro from './components/intro/Intro';
import Techs from './components/techs/Techs';


function App() {
  return (
    <div className="App">
      <Intro/>
      <About/>
      <Techs/>
      <Contact />
    </div>
  );
}

export default App;
