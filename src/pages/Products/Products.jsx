import Header from "../../components/Header/Header"
import Footer from "../../components/Footer/Footer"
import Services from "../../components/Services/Services"
import Location from "../../components/Location/Location"
import "./Products.css"

export default function ProductsPage() {
  return (
    <>
      <Header />
      <main className="products-main">
        <div className="main-container">
          <div className="products-sub-container">
            <div className="products-header-container">
              <h1>Performance Parts for <span>[car industry name]</span></h1>
              <p>Exhausts, Intakes, Tunes, and more!</p>
            </div>
          </div>
          <Services text="Наши услуги"/>
          <Location />
        </div>
      </main>
      <Footer />
    </>
  )
}