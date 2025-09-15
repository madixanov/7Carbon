import ProductDescription from "./ProductDescription/ProductDescription";
import PriceList from "./PriceList/PriceList";
import "./ProductDetailsMain.css";
import ServiceLink from '../../../components/Link/Link'
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

export  default function ProductDetailsMain() {
  return (
    <div className="product-details-main">
      <ServiceLink />
      <div className="product-details-sub" data-aos="fade-up" data-aos-duration="1000">
        <ProductDescription />
        <PriceList />
      </div>
    </div>
  )
}