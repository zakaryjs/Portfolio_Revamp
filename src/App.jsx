import './styles/App.css';
import Header from './components/Header';
import BackgroundParticles from './components/BackgroundParticles';
import Footer from './components/Footer';

function App() {

  return (
    <div className="App">
      <BackgroundParticles />
      <Header />
      <Footer />
    </div>
  );
}

export default App;
