import "./Location.css"
import darkmap from "../../assets/photo/darkmap.svg"

import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

export default function Location() {
  return (
    <div className="map-container" data-aos="fade-up" data-aos-duration="1000">
      <h1>Наш офис</h1>
      <img src={darkmap} alt="map" />
    </div>
  )
}