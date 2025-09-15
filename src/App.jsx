import HomePage from "./pages/Home/Home"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductsPage from "./pages/Products/Products";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import ServiceDetails from "./pages/ServiceDetails/ServiceDetails";
import ProductDetails from "./pages/ProductDetails/ProductDetails";

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/products" element={<ProductsPage />}/>
        <Route path="/services/:seviceId" element={<ServiceDetails />}/>
        <Route path="/products/:productId" element={<ProductDetails />}/>
      </Routes>
    </BrowserRouter>
  )
}