import "./Product.css"
import productpart from "../../../../assets/photo/productpart.svg"
import { useNavigate } from "react-router-dom"
import useProductStore from "../../../../store/product-store.js"

export default function Product() {
  const navigate = useNavigate();
  const { product, setProduct } = useProductStore();

  const handleClick = () => {
    setProduct("Lamborghini Aventador LP700-4 Valvetronic Exhaust System (2011-2016)");
    navigate(`/products/${product}`);
  }

  return (
    <div className="product-container" onClick={handleClick}>
      <img src={productpart} alt="part" />
      <hr className="line" />
      <div className="product-description">
        <div className="type">Motorsport</div>
        <div className="name">Lamborghini Aventador LP700-4 Valvetronic Exhaust System (2011-2016)</div>
        <div className="price">$10.000</div>
      </div>
    </div>
  )
}