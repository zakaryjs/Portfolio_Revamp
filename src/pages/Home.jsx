import '../styles/Home.css';
import Header from '../components/Header';
import BackgroundParticles from '../components/BackgroundParticles';
import Footer from '../components/Footer';
import Palette from '../components/Palette';
// import Hamburger from './components/Hamburger';

function Home() {

  return (
    <div className="App">
      {/* <Hamburger /> */}
      
      <BackgroundParticles />
      <Palette />
      <Header />
      <Footer />
    </div>
  );
}

export default Home;
