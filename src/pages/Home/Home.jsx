import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Banner from "./UI/Banner/Banner";
import "./Home.css"
import About from "./UI/About/About";
import Services from "../../components/Services/Services";
import Projects from "./UI/Projects/Projects";
import News from "./UI/News/News";

import map from "../../assets/photo/Search.svg"

import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <div className="banner">
          <div className="dark-banner">
            <div className="main-container">
              <Banner />
            </div>
          </div>
        </div>
        <div className="main-container">
          <About />
          <Services text={"Наши услуги"} />
          <Projects />
          <News />
        </div>
        <div className="map-container">
          <div className="main-container">
            <h1 data-aos="fade-up" data-aos-duration="1000">НАШ ОФИС</h1>
            <img src={map} alt="map" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="100"/>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}