import "./header.css"
import { useState, useEffect } from "react";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`${isScrolled && "scrolled"}`}>
      <div className="main-container">
        <div className={`header-container ${isScrolled && "scrolled"}`}>
          <span className="logo-text">7Carbon</span>
          <div className="nav-links">
            <span className="selected">Главная страница</span>
            <span>Продукты</span>
            <span>Наши преимущества</span>
            <span className="contacts">Контакты</span>
          </div>
        </div>
      </div>
    </header>
  )
}