import "./News.css"
import news from "../../../../assets/photo/news.svg"

export default function News() {
  return (
    <div className="news-container">
      <h1>Новости</h1>
      <div className="news-row">
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
      <div className="button-container">
        <button>ВСЕ НОВОСТИ</button>
      </div>
    </div>
  )
}