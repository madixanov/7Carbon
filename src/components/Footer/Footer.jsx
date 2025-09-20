import "./Footer.css"
import footer_logo from "../../assets/photo/footer_logo.svg"
import telegram from "../../assets/icons/telegram.svg"
import facebook from "../../assets/icons/facebook.svg"
import instagram from "../../assets/icons/instagram.svg"
import useSelectedStore from "../../store/nav-store"
import { useNavigate } from "react-router-dom"


export default function Footer() {
  const { selected, setSelected } = useSelectedStore();
  const navigate = useNavigate();

  const handleClick = (menuItem) => {
    setSelected(menuItem);
    navigate(`/${menuItem}`);
  }

  return (
    <footer>
      <div className="main-container">
        <div className="footer-container">
          <div className="footer-div left">
            <img src={footer_logo} alt="logo" className="footer-logo"/>
            <p className="number">+998 99 200 77 77</p>
            <span>г. Ташкент, ул. Ахмад Дониш 10Б</span>
            <span>info@7carbon.uz</span>
            <div className="social-row">
              <img src={telegram} alt="telegram icon" />
              <img src={facebook} alt="facebook icon" />
              <img src={instagram} alt="instagram icon" />
            </div>
          </div>
          <div className="footer-div mid">
            <h1>Товарное меню</h1>
            <div className="div-content">
              <div className="left-sub-div">
                <span>Товары</span>
                <span>Элементы</span>
                <span>Аксессуары</span>
                <span>Системы движения</span>
              </div>
              <div className="right-sub-div">
                <span>Глушители</span>
                <span>Производительность</span>
                <span>Чиптюнинг</span>
              </div>
            </div>
          </div>
          <div className="footer-div right">
            <h1>Меню</h1>
            <div className="div-content">
              <div className="left-sub-div">
                <span className={selected === "services" && "selected"} onClick={() => handleClick("services")}>Услуги</span>
                <span className={selected === "about" && "selected"} onClick={() => handleClick("about")}>О компании</span>
                <span className={selected === "contacts" && "selected"} onClick={() => handleClick("contacts")}>Контакты</span>
              </div>
              <div className="right-sub-div">
                <span className={selected === "projects" && "selected"} onClick={() => handleClick("projects")}>Проекты</span>
                <span className={selected === "news" && "selected"} onClick={() => handleClick("news")}>Новости</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}