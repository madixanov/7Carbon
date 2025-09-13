import details2 from "../../../../assets/photo/details2.svg"
import details3 from "../../../../assets/photo/details3.svg"
import details4 from "../../../../assets/photo/details4.svg"
import details5 from "../../../../assets/photo/details5.svg"
import details6 from "../../../../assets/photo/details6.svg"
import "./ServiceProcess.css"

import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

export default function ServicecProcess() {
  return (
    <div className="service-process">
      <h1 data-aos="fade-up" data-aos-duration="1000">Рабочий <span>процесс</span></h1>
      <div className="photo-grid">
        <div className="photo-upper-grid" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
          <img src={details3} alt="details2" />
          <img src={details2} alt="details3" />
        </div>
        <div className="photo-lower-grid" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="400">
          <div className="left-grid">
            <img src={details5} alt="details4" />
            <img src={details4} alt="details5" />
          </div>
          <img src={details6} alt="details6" />
        </div>       
      </div>
    </div>
  )
}