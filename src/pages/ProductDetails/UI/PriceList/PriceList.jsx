import useProductStore from "../../../../store/product-store"
import "./PriceList.css"

export default function PriceList() {
  const { product } = useProductStore();
  
  return (
    <div className="price-list-container">
      <h1>{product}</h1>
      <p>Впервые в Узбекистане представлен полностью спроектированный и произведённый компанией 7 Carbon обвес для Mercedes-Benz G63 AMG.</p>
      <div className="product-button-row">
        <button className="price-button">Скачать прайс-лист</button>
        <button className="contact-button">Связаться</button>
      </div>
    </div>
  )
}