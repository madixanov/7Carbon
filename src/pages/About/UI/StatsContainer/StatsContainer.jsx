import "./StatsContainer.css"
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

export default function StatsContainer() {
  return (
    <div className="stats-container" data-aos="fade-up" data-aos-duration="1000">
      <div className="stats">
        <h1>20+</h1>
        <span>Клиентских проектов</span>
      </div>
      <div className="stats">
        <h1>7</h1>
        <span>Личных проектов</span>
      </div>
      <div className="stats">
        <h1>500+</h1>
        <span>Изготовленных деталей</span>
      </div>
      <div className="stats">
        <h1>11+</h1>
        <span>Крупных партнёров</span>
      </div>
    </div>
  )
}