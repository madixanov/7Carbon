import HomePage from "./pages/Home/Home"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductsPage from "./pages/Products/Products";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/products" element={<ProductsPage />}/>
      </Routes>
    </BrowserRouter>
  )
}