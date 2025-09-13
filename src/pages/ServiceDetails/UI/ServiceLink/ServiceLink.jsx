import  { Link } from 'react-router-dom';
import './ServiceLink.css';

export default function ServiceLink() {
  return (
    <div className="service-link">
      <Link className='home-link' to="/">ГЛАВНАЯ</Link>
      <span>/</span>
      <Link className='services-link'>Услуги</Link>
      <span>/</span>
      <p>Изготовление обвесов по индивидуальному заказу</p>
    </div>
  )
}