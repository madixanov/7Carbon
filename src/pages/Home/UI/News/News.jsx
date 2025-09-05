import "./News.css"
import news from "../../../../assets/photo/news.svg"
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

export default function News() {
  return (
    <div className="news-container">
      <h1 data-aos="fade-up" data-aos-duration="1000">Новости</h1>
      <div className="news-row" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="100">
        <div className="news">
          <img src={news} alt="news" />
          <h3>Новости 1</h3>
          <span>Описание текста  самой карточки.<br/>Этот текст написан для визуального отображение</span>
        </div>
        <div className="news">
          <img src={news} alt="news" />
          <h3>Новости 2</h3>
          <span>Описание текста  самой карточки.<br/>Этот текст написан для визуального отображение</span>
        </div>
        <div className="news">
          <img src={news} alt="news" />
          <h3>Новости 3</h3>
          <span>Описание текста  самой карточки.<br/>Этот текст написан для визуального отображение</span>
        </div>
      </div>
      <div className="button-container" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
        <button>ВСЕ НОВОСТИ</button>
      </div>
    </div>
  )
}