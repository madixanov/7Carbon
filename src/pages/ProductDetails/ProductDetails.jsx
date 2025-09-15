import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import Services from '../../components/Services/Services'
import Location from '../../components/Location/Location'
import ProductDetailsMain from './UI/ProductDetailsMain'

export default function ProductDetails() {
  return (
    <div className="product-details">
      <Header />
      <div className="main-container">
        <ProductDetailsMain />
        <Services />
        <Location />
      </div>
      <Footer />
    </div>
  )
}