import Services from '../../../components/Services/Services'
import Location from '../../../components/Location/Location'
import Link from '../../../components/Link/Link'
import ServiceDescription from './ServiceDescription/ServiceDescription'
import ServicecProcess from './ServiceProcess/ServicecProcess'
import { useNavigate } from 'react-router-dom'
import './ServiceDetailsMain.css'

import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

export default function ServiceDetailsMain() {
  const navigate = useNavigate();
  return (
    <main className="service-details-main">
      <div className="main-container">
        <div className="service-details-sub-container">
          <Link />
          <ServiceDescription  />
          <ServicecProcess  />
        </div>
        <Services text="Наши Услуги"/>
        <div className="button-div" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
          <button className='back-button' onClick={() => navigate("/")}>ВЕРНУТЬСЯ НАЗАД</button>
        </div>
        <Location />
      </div>
    </main>
  )
}