import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Banner from "./UI/Banner/Banner";
import "./Home.css"
import About from "./UI/About/About";
import Services from "./UI/Services/Services";
import Projects from "./UI/Projects/Projects";
import News from "./UI/News/News";

import map from "../../assets/photo/Search.svg"

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
          <Services />
          <Projects />
          <News />
        </div>
        <div className="map-container">
          <div className="main-container">
            <h1>НАШ ОФИС</h1>
          </div>
          <div className="map">
            <img src={map} alt="map" />
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}