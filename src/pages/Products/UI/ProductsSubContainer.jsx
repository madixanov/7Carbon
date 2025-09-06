import ProductsFilter from "./ProductFilter/ProductsFilter"
import ProductsGrid from "./ProductsGrid/ProductsGrid.jsx"
import "./ProductsSubContainer.css"

import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

export default function ProductsSubContainer() {
  return (
    <div className="products-sub-container">
      <div className="products-header-container" data-aos="fade-up" data-aos-duration="1000">
        <h1>Performance Parts for <span>[car industry name]</span></h1>
        <p>Exhausts, Intakes, Tunes, and more!</p>
      </div>
      <div className="products-search-container" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="100">
        <ProductsFilter />
        <ProductsGrid />
      </div>
    </div>
  )
}