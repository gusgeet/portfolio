import './App.css';
import { useContext } from 'react';
import { TranslateContext } from './context/Translate';
import About from './components/about/About';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import Intro from './components/intro/Intro';
import Navbar from './components/navbar/Navbar';
import Projects from './components/projects/Projects';
import Techs from './components/techs/Techs';
import { getSiteContent, socialLinks } from './content/siteContent';

function App() {
  const [isEnglish] = useContext(TranslateContext);
  const content = getSiteContent(isEnglish);

  return (
    <div className="App">
      <Navbar content={content.nav} socialLinks={socialLinks} />
      <main className="app-shell">
        <Intro content={content.hero} heroImage={content.heroImage} />
        <About content={content.experience} />
        <Projects content={content.projects} media={content.projectsMedia} />
        <Techs content={content.stack} />
        <Contact content={content.contact} socialLinks={socialLinks} />
      </main>
      <Footer content={content.footer} socialLinks={socialLinks} />
    </div>
  );
}

export default App;
