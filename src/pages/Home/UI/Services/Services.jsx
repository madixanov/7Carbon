import "./Services.css"
import part from "../../../../assets/photo/part.svg"
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

export default function Services() {
  const services = [
    {name: "Тюнинг выхлопной системы", price: "100$", discount: true},
    {name: "Тюнинг выхлопной системы", price: "100$", discount: false},
    {name: "Тюнинг выхлопной системы", price: "100$", discount: false},
    {name: "Тюнинг выхлопной системы", price: "100$", discount: false},
    {name: "Тюнинг выхлопной системы", price: "100$", discount: false},
    {name: "Тюнинг выхлопной системы", price: "100$", discount: false},
  ]


  return (
    <div className="services-container">
      <h1 data-aos="fade-up" data-aos-duration="1000">Наши услуги</h1>
      <div className="service-row" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="100">
        {services.map((service) => {
          return (
            <div className={`service ${service.discount && "service-discount"}`}>
              <div className="service-header">
                <span>{service.name}</span>
                {service.discount && <div className="discount-container">АКЦИЯ</div>}
              </div>
              <p>от <span>{service.price}</span></p>
              <img src={part} alt="part" />
            </div>
          )
        })}
      </div>
    </div>
  )
}