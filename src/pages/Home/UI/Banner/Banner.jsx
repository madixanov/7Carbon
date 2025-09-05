import "./Banner.css"
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

export default function Banner() {
  return (
    <div className="banner-container">
      <h1 data-aos="fade-up" data-aos-duration="1000">Производство и <br/> дизайн премиальных карбоновых деталей</h1>
      <p data-aos="fade-up" data-aos-duration="1000" data-aos-delay="100">Our Car Rental  online booking system designed to meet the specific needs of car rental business owners. This easy-to-use car rental software will let you manage.</p>
      <button data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">Наши услуги</button>
    </div>
  )
}