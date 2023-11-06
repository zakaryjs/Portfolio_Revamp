import '../styles/Home.css';
import BackgroundParticles from '../components/BackgroundParticles';
import Footer from '../components/Footer';
import Palette from '../components/Palette';
import SkillsHeader from '../components/SkillsHeader';
// import Hamburger from './components/Hamburger';

function Skills() {

  return (
    <div className="App">
      {/* <Hamburger /> */}
      
      <BackgroundParticles />
      <Palette />
      <SkillsHeader />
      <Footer />
    </div>
  );
}

export default Skills;
