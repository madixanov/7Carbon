import { useState } from "react";
import Product from "../ProductContainer/ProductContainer";
import "./ProductsGrid.css";

export default function ProductsGrid() {
  // Здесь пока тестовые продукты
  const products = Array.from({ length: 20 }, (_, i) => ({
    id: i + 1,
    name: `Product ${i + 1}`,
  }));

  const productsPerPage = 9;
  const [currentPage, setCurrentPage] = useState(1);

  const startIndex = (currentPage - 1) * productsPerPage;
  const endIndex = startIndex + productsPerPage;
  const currentProducts = products.slice(startIndex, endIndex);

  const totalPages = Math.ceil(products.length / productsPerPage);

  const handlePrev = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  return (
    <div className="products-grid-container">
      {/* Сетка продуктов */}
      <div className="products-grid">
        {currentProducts.map((product) => (
          <Product key={product.id} />
        ))}
      </div>

      {/* Пагинация */}
      <div className="pagination">
        <button
          className="pagination-arrow"
          onClick={handlePrev}
          disabled={currentPage === 1}
        >
          ←
        </button>

        <span className="pagination-info">
          {currentPage} / {totalPages}
        </span>

        <button
          className="pagination-arrow"
          onClick={handleNext}
          disabled={currentPage === totalPages}
        >
          →
        </button>
      </div>
    </div>
  );
}
