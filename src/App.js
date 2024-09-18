import logo from './logo.svg';
import './App.css';
import Navbar from './Layout/Header/Navbar';
import About from './Pages/About';
import Details from './Pages/Details';
import Ourpage from './Pages/Ourpage';
import OurProduct from './Pages/OurProduct';
import Contact from './Pages/Contact';
import Footer from './Layout/Footer/Footer';

function App() {
  return (
   <>
   <Navbar/>
   <About/>
   <Details/>
   <Ourpage/>
   <OurProduct/>
   <Contact/>
   <Footer/>
   </>
  );
}

export default App;
