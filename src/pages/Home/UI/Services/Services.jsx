import "./Services.css"
import part from "../../../../assets/photo/part.svg"

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
      <h1>Наши услуги</h1>
      <div className="service-row">
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