import Hero from "./components/Hero.jsx";
import Navbar from "./components/Navbar.jsx";
import MainContent from "./components/MainContent.jsx";
import Banner from "./components/Banner.jsx";
import Pricing from "./components/Pricing.jsx";
import Footer from "./components/Footer.jsx";
import Faq from "./components/Faq.jsx";
import Feature from "./components/Feature.jsx";

function App() {
  return (
    <div className="bg-[#0F172A]">
      <Navbar />
      <Hero />
      <MainContent />
      <Feature />
      <Banner />
      <Pricing />
      <Faq />
      <Footer />
    </div>
  );
}

export default App;
