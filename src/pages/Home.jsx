import '../styles/Home.css';
import Header from '../components/Header';
import BackgroundParticles from '../components/BackgroundParticles';
import Footer from '../components/Footer';
// import Hamburger from './components/Hamburger';

function Home() {

  return (
    <div className="App">
      {/* <Hamburger /> */}
      <BackgroundParticles />
      <Header />
      <Footer />
    </div>
  );
}

export default Home;
