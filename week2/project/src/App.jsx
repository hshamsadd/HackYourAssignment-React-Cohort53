import { Routes, Route } from "react-router-dom";
import ProductsPage from "./pages/ProductsPage";
import ProductDetail from "./pages/ProductDetail";
import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<ProductsPage />} />
      <Route path="/product/:id" element={<ProductDetail />} />
    </Routes>
  );
}

export default App;
