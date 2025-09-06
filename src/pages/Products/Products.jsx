import Header from "../../components/Header/Header"
import Footer from "../../components/Footer/Footer"
import Services from "../../components/Services/Services"
import Location from "../../components/Location/Location"
import "./Products.css"
import ProductsSubContainer from "./UI/ProductsSubContainer"

export default function ProductsPage() {
  return (
    <>
      <Header />
      <main className="products-main">
        <div className="main-container">
          <ProductsSubContainer />
          <Services text="Наши услуги"/>
          <Location />
        </div>
      </main>
      <Footer />
    </>
  )
}