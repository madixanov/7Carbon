import "./header.css";
import { useState, useEffect } from "react";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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

  return (
    <header className={isScrolled ? "scrolled" : ""}>
      <div className="main-container">
        <div className={`header-container ${isScrolled ? "scrolled" : ""}`}>
          <span className="logo-text">7Carbon</span>

          <div className="mobile-controls mobile-only">
            <div className="burger-menu" onClick={() => setMobileMenuOpen((prev) => !prev)}>
              <span className={mobileMenuOpen ? "open" : ""}></span>
              <span className={mobileMenuOpen ? "open" : ""}></span>
              <span className={mobileMenuOpen ? "open" : ""}></span>
            </div>
          </div>

          {/* Десктопное меню */}
          <div className="nav-links">
            <span>Главная страница</span>
            <span>Продукты</span>
            <span>Наши преимущества</span>
            <span className="contacts">
              Контакты
            </span>
          </div>

          {/* Кнопка бургера для мобильных */}
          
        </div>

        {/* Мобильное меню */}
        {mobileMenuOpen && (
          <div className="mobile-menu mobile-only">
            <div >Главная страница</div>
            <div >Продукты</div>
            <div >Преимущества</div>
            <div >Наши преимущества</div>
            <div>Контакты</div>
          </div>
        )}
      </div>
    </header>
  );
}
