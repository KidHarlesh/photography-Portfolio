import About from "./Components/About.jsx";
import Booking from "./Components/Booking.jsx";
import Footer from "./Components/Footer.jsx";
import Hero from "./Components/Hero.jsx"
import Navbar from "./components/Navbar.jsx"
import Portfolio from "./Components/Portfolio.jsx";
import Testimonal from "./Components/Testimonal.jsx";


function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About/>
      <Portfolio/>
      <Testimonal/>
      <Booking/>
      <Footer/>
    </div>
  );
}

export default App