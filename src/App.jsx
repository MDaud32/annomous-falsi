import Hero from "./components/Hero.jsx";
import Navbar from "./components/Navbar.jsx";
import MainContent from "./components/MainContent.jsx";
import Banner from "./components/Banner.jsx";
import Pricing from "./components/Pricing.jsx";
import Footer from "./components/Footer.jsx";
import Faq from "./components/Faq.jsx";

function App() {
  return (
    <div className="bg-[#1C3477]">
      <Navbar />
      <Hero />
      <MainContent />
      <Banner />
      <Pricing />
      <Faq />
      <Footer />
    </div>
  );
}

export default App;
