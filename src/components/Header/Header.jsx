import "./header.css";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import useSelectedStore from "../../store/nav-store"

import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();


export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { selected, setSelected } = useSelectedStore();

  // Отслеживание скролла для хедера
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
        if (mobileMenuOpen) {
            document.body.classList.add("no-scroll");
            document.documentElement.classList.add("no-scroll"); // <html>
        } else {
            document.body.classList.remove("no-scroll");
            document.documentElement.classList.remove("no-scroll");
        }

        return () => {
            document.body.classList.remove("no-scroll");
            document.documentElement.classList.remove("no-scroll");
        };
    }, [mobileMenuOpen]);

  const handleClick = (page) => {
    setSelected(page);
  }

  return (
    <header className={isScrolled ? "scrolled" : ""}>
      <div className="main-container">
        <div className={`header-container ${isScrolled ? "scrolled" : ""}`}>
          <Link style={{textDecoration: "none", color: "white"}} to="/"><span className="logo-text" onClick={() => handleClick("home")}>7Carbon</span></Link>

          <div className="mobile-controls mobile-only">
            <div className="burger-menu" onClick={() => setMobileMenuOpen((prev) => !prev)}>
              <span className={mobileMenuOpen ? "open" : ""}></span>
              <span className={mobileMenuOpen ? "open" : ""}></span>
              <span className={mobileMenuOpen ? "open" : ""}></span>
            </div>
          </div>

          {/* Десктопное меню */}
          <nav className="nav-links">
            <Link style={{textDecoration: "none", color: "white"}} to="/"><span onClick={() => handleClick("home")} className={selected === "home" && "selected"}>Главная страница</span></Link>
            <Link style={{textDecoration: "none", color: "white"}} to="/products"><span onClick={() => handleClick("products")} className={selected === "products" && "selected"}>Продукты</span></Link>
            <span onClick={() => handleClick("advantages")} className={selected === "advantages" && "selected"}>Наши преимущества</span>
            <span onClick={() => handleClick("cotancts")} className={`contacts ${selected === 'contacts' && "selected"}`}>
              Контакты
            </span>
          </nav>

          {/* Кнопка бургера для мобильных */}
          
        </div>

        {/* Мобильное меню */}
        {mobileMenuOpen && (
          <aside className="mobile-menu mobile-only">
            <Link style={{textDecoration: "none", color: "white"}} to="/"><div data-aos="fade-up" data-aos-duration="1000">Главная страница</div></Link>
            <Link style={{textDecoration: "none", color: "white"}} to="/products"><span onClick={() => handleClick("products")} className={selected === "products" && "selected"}></span><div data-aos="fade-up" data-aos-duration="1000" data-aos-delay="100">Продукты</div></Link>
            <div data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">Преимущества</div>
            <div data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300">Наши преимущества</div>
            <div data-aos="fade-up" data-aos-duration="1000" data-aos-delay="400">Контакты</div>
          </aside >
        )}
      </div>
    </header>
  );
}
