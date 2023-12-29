import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Skills from './components/Skills';
import Work from './components/Work';
import Education from './components/Education';
import './styles/App.css';
import 'animate.css';
function App() {

  return (
    <div className="">
      <Navbar />
      <Home />
      <About />
      <Skills />
      
      <Education/> 
      <Work />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
