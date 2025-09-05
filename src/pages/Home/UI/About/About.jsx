import "./About.css"
import gallery from "../../../../assets/icons/gallery.svg"
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

export default function About() {
  return (
    <div className="about-container">
      <h1 data-aos="fade-up" data-aos-duration="1000">О нашей компании</h1>
      <div className="about-sub-container" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="100">
        <div className="image-container">
          <img src={gallery} alt="photo" />
          <div className="image-description">
            <h3>Информация 1</h3>
            <p>Описание текста  самой карточки. Этот текст написан для визуального отображение</p>
          </div>
        </div>
        <div className="about-text">
          <h2>Почему нас считают лучшим специализированным магазином в Ташкенте</h2>
          <p>Мы создали репутацию в OkeeChobee за то, что они не только сделали обновления автомобилей, но и делали их правильно. Вот что делает Nunez Auto Service выбором для серьезных автомобилей и повседневных водителей:</p>
          <ul>
            <li>Прецизионное мастерство</li>
            <li>Премиальные бренды и продукция</li>
            <li>Клиентоориентированный сервис</li>
            <li>Передовые технологии</li>
            <li>Местный владелец и управляющая компания</li>
          </ul>
          <p>Наша приверженность качеству и удовлетворенности клиентов проявляется в каждом нашем проекте. Мы уделяем максимум внимания каждому заказу — от экзотических автомобилей до рабочих грузовиков.</p>
          <button className="about-button">Подробнее</button>
        </div>
      </div>
      <div className="about-sub-container second" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
        <div className="about-text">
          <h2>Почему нас считают лучшим специализированным магазином в Ташкенте</h2>
          <p>Мы создали репутацию в OkeeChobee за то, что они не только сделали обновления автомобилей, но и делали их правильно. Вот что делает Nunez Auto Service выбором для серьезных автомобилей и повседневных водителей:</p>
          <ul>
            <li>Прецизионное мастерство</li>
            <li>Премиальные бренды и продукция</li>
            <li>Клиентоориентированный сервис</li>
            <li>Передовые технологии</li>
            <li>Местный владелец и управляющая компания</li>
          </ul>
          <p>Наша приверженность качеству и удовлетворенности клиентов проявляется в каждом нашем проекте. Мы уделяем максимум внимания каждому заказу — от экзотических автомобилей до рабочих грузовиков.</p>
          <button className="about-button">Подробнее</button>
        </div>
        <div className="image-container">
          <img src={gallery} alt="photo" />
          <div className="image-description">
            <h3>Информация 2</h3>
            <p>Описание текста  самой карточки. Этот текст написан для визуального отображение</p>
          </div>
        </div>
      </div>
    </div>
  )
}