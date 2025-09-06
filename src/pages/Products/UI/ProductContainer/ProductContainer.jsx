import "./Product.css"
import productpart from "../../../../assets/photo/productpart.svg"

export default function Product() {
  return (
    <div className="product-container">
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