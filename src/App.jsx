import HomePage from "./pages/Home/Home"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductsPage from "./pages/Products/Products";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/products" element={<ProductsPage />}/>
      </Routes>
    </BrowserRouter>
  )
}