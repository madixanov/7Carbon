import "./Services.css"
import service from "../../../../assets/photo/service.svg"
import discountService from "../../../../assets/photo/discount-service.svg"

export default function Services() {
  return (
    <div className="services-container">
      <h1>Наши услуги</h1>
      <div className="service-row">
        <img src={discountService} alt="service" />
        <img src={service} alt="service" />
        <img src={service} alt="service" />
        <img src={service} alt="service" />
        <img src={service} alt="service" />
        <img src={service} alt="service" />
      </div>
    </div>
  )
}