import { Navbar } from "../UI/Navbar";
import Footer from "../UI/Footer";
import Dokumenter from "../UI/Dokumenter";
import Contact from "../UI/Contact";
import HeroSection from "../UI/HeroSection";
import Pengurus from "../UI/Pengurus";
import Event from "../UI/Event";

const Home = () => {
  return (
    <div>
      <Navbar />

      {/* Hero section */}
      <section id="home" className="pt-2 mt-24 lg:mt-14">
        <HeroSection />
      </section>

      {/* Pengurus Inti */}
      <section id="pengurus" className="pt-36 pb-32">
        <Pengurus />
      </section>

      {/* event */}
      <section id="event pt-36 pb-32">
        <Event />
      </section>

      {/* Dokumenter */}
      <section id="dokumenter" className="pt-36 pb-32">
        <Dokumenter />
      </section>

      {/* Contact US */}
      <section id="contact" className="pt-8 pb-32">
        <Contact />
      </section>

      <Footer />
    </div>
  );
};

export default Home;
