import { Link, useLocation } from "react-router-dom";
import "./Link.css";
import useProductStore from "../../store/product-store";

export default function ServiceLink() {
  const location = useLocation();
  const { product } = useProductStore();

  // Берем путь и разбиваем на части
  const pathnames = location.pathname.split("/").filter((x) => x);

  // Словарь для перевода сегментов
  const translations = {
    services: "УСЛУГИ",
    projects: "ПРОЕКТЫ",
    products: "ПРОДУКТЫ",
  };

  return (
    <div className="service-link">
      <Link className="home-link" to="/">
        ГЛАВНАЯ
      </Link>
      <span className="divider"> / </span>
      {pathnames.map((name, index) => {
        const routeTo = `/${pathnames.slice(0, index + 1).join("/")}`;
        const isLast = index === pathnames.length - 1;
        const translatedName = translations[name] || decodeURIComponent(name);

        return isLast ? (
          <span key={name}>
            <p>{product ? product : translatedName}</p>
          </span>
        ) : (
          <span key={name} className="link-segment">
            <Link className="services-link" to={routeTo}>
              {translatedName}
            </Link>
            <span className="divider"> / </span>
          </span>
        );
      })}
    </div>
  );
}
