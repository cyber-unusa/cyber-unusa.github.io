import Navbar from "../UI/Navbar";
import Footer from "../UI/Footer";
import Dokumenter from "../UI/Dokumenter";
import HeroSection from "../UI/HeroSection";
import Pengurus from "../UI/Pengurus";
import Event from "../UI/Kegiatan";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Home = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.location.href = "https://cyber-unusa.netlify.app";
  });

  return (
    <div>
      <Navbar />

      {/* Hero section */}
      <section id="home" className="pt-2 mt-14">
        <HeroSection />
      </section>

      {/* Pengurus Inti */}
      <section id="pengurus" className="pt-32 pb-32">
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

      <Footer />
    </div>
  );
};

export default Home;
