import '../styles/Home.css';
import BackgroundParticles from '../components/BackgroundParticles';
import Footer from '../components/Footer';
import AboutMeHeader from '../components/AboutMeHeader';
// import Hamburger from './components/Hamburger';

function AboutMe() {

  return (
    <div className="App">
      {/* <Hamburger /> */}
      <BackgroundParticles />
      <AboutMeHeader />
      <Footer />
    </div>
  );
}

export default AboutMe;
