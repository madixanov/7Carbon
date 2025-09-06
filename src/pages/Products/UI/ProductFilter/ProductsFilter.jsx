import "./ProductsFilter.css"

export default function ProductsFilter() {
  return (
    <div className="products-filter-container">
      <div className="filter">
        <p>Фильтр</p>
        <span>Обвесы</span>
        <span>Глушители</span>
        <span>Диски</span>
        <span>Производительность</span>
        <span>Аксессуары</span>
        <span>Чиптюнинг</span>
        <span>Cистемы движение</span>
      </div>
      <div className="brands">
        <p>BRAND</p>
        <label>
          <input type="checkbox" />
          <span class="custom-checkbox"></span>
          Название бренда
        </label>

        <label>
          <input type="checkbox" />
          <span class="custom-checkbox"></span>
          Название бренда
        </label>

        <label>
          <input type="checkbox" />
          <span class="custom-checkbox"></span>
          Название бренда
        </label>
      </div>
      <div className="filter-button-cotainer">
        <button>ПРИМЕНИТЬ</button>
      </div>
    </div>
  )
}