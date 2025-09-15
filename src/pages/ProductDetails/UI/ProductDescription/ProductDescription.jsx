import product from "../../../../assets/photo/product.svg"
import "./ProductDescription.css"

export default function ProductDescription() {
  return (
    <div className="product-details-description">
      <div className="product-photo">
        <img src={product} alt="product" />
        <img src={product} alt="product" className="second-photo" />
      </div>
      <div className="product-details-text">
        <p className="product-d-text">
          Обвес не просто добавляет агрессивный и эксклюзивный облик вашему автомобилю — он полностью меняет его характер, подчёркивая мощь и статус G63 AMG.
        </p>
        <p className="product-d-text">
          Каждая деталь выполнена с ювелирной точностью: от переднего и заднего бамперов до расширителей арок, капота и декоративных элементов.
        </p>
        <span className="list-name">Особенности DARKSIDE:</span>
        <ul>
          <li>77 элементов из высококачественного карбона</li>
          <li>Полная замена оригинальных деталей, а не накладное решение</li>
          <li>Матовая фактура в классическом плетении (возможны и другие варианты по заказу)</li>
          <li>Возможность индивидуальной кастомизации цвета и структуры карбона</li>
          <li>Производство и разработка полностью в Узбекистане — локальный продукт мирового уровня</li>
        </ul>
      </div>
    </div>
  )
}