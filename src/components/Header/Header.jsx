import "./header.css";
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  // Следим за скроллом
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Блокируем скролл при открытом мобильном меню
  useEffect(() => {
    document.body.classList.toggle("no-scroll", mobileMenuOpen);
    document.documentElement.classList.toggle("no-scroll", mobileMenuOpen);
    return () => {
      document.body.classList.remove("no-scroll");
      document.documentElement.classList.remove("no-scroll");
    };
  }, [mobileMenuOpen]);

  return (
    <header className={isScrolled ? "scrolled" : ""}>
      <div className="main-container">
        <div className={`header-container ${isScrolled ? "scrolled" : ""}`}>
          <Link style={{ textDecoration: "none", color: "white" }} to="/">
            <span className="logo-text">7Carbon</span>
          </Link>

          {/* Кнопка бургера */}
          <div className="mobile-controls mobile-only">
            <div
              className="burger-menu"
              onClick={() => setMobileMenuOpen((prev) => !prev)}
            >
              <span className={mobileMenuOpen ? "open" : ""}></span>
              <span className={mobileMenuOpen ? "open" : ""}></span>
              <span className={mobileMenuOpen ? "open" : ""}></span>
            </div>
          </div>

          {/* Десктопное меню */}
          <nav className="nav-links">
            <Link
              style={{ textDecoration: "none", color: "white" }}
              to="/"
              className={location.pathname === "/" ? "selected" : ""}
            >
              Главная страница
            </Link>

            <Link
              style={{ textDecoration: "none", color: "white" }}
              to="/products"
              className={location.pathname === "/products" ? "selected" : ""}
            >
              Продукты
            </Link>

            <Link
              style={{ textDecoration: "none", color: "white" }}
              to="/advantages"
              className={location.pathname === "/advantages" ? "selected" : ""}
            >
              Наши преимущества
            </Link>

            <Link
              style={{ textDecoration: "none", color: "white" }}
              to="/contacts"
              className={location.pathname === "/contacts" ? "selected" : ""}
            >
              Контакты
            </Link>
          </nav>
        </div>

        {/* Мобильное меню */}
        {mobileMenuOpen && (
          <aside className="mobile-menu mobile-only">
            <Link style={{ textDecoration: "none", color: "white" }} to="/">
              <div data-aos="fade-up" data-aos-duration="1000">
                Главная страница
              </div>
            </Link>
            <Link
              style={{ textDecoration: "none", color: "white" }}
              to="/products"
            >
              <div
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="100"
              >
                Продукты
              </div>
            </Link>
            <Link
              style={{ textDecoration: "none", color: "white" }}
              to="/advantages"
            >
              <div
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="200"
              >
                Наши преимущества
              </div>
            </Link>
            <Link
              style={{ textDecoration: "none", color: "white" }}
              to="/contacts"
            >
              <div
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="300"
              >
                Контакты
              </div>
            </Link>
          </aside>
        )}
      </div>
    </header>
  );
}
