import Hero from "./components/Hero.jsx";
import Navbar from "./components/Navbar.jsx";
import MainContent from "./components/MainContent.jsx";
import Banner from "./components/Banner.jsx";
import Pricing from "./components/Pricing.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <MainContent />
      <Banner />
      <Pricing />
      <Footer />
    </div>
  );
}

export default App;
