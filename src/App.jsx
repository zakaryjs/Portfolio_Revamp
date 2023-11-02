import './styles/App.css';
import Header from './components/Header';
import BackgroundParticles from './components/BackgroundParticles';
import Footer from './components/Footer';
import Hamburger from './components/Hamburger';

function App() {

  return (
    <div className="App">
      <Hamburger />
      <BackgroundParticles />
      <Header />
      <Footer />
    </div>
  );
}

export default App;
