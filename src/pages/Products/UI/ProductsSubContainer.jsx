import ProductsFilter from "./ProductFilter/ProductsFilter"
import "./ProductsSubContainer.css"

export default function ProductsSubContainer() {
  return (
    <div className="products-sub-container">
      <div className="products-header-container">
        <h1>Performance Parts for <span>[car industry name]</span></h1>
        <p>Exhausts, Intakes, Tunes, and more!</p>
      </div>
      <div className="products-search-container">
        <ProductsFilter />
      </div>
    </div>
  )
}