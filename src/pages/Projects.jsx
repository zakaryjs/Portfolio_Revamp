import '../styles/Home.css';
import BackgroundParticles from '../components/BackgroundParticles';
import Footer from '../components/Footer';
import Palette from '../components/Palette';
import ProjectsHeader from '../components/ProjectsHeader';
// import Hamburger from './components/Hamburger';

function Contact() {

  return (
    <div className="App">
      {/* <Hamburger /> */}
      <BackgroundParticles />
      <Palette />
      <ProjectsHeader />
      <Footer />
    </div>
  );
}

export default Contact;
