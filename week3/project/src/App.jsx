import { Routes, Route, Link } from "react-router-dom";
import ProductsPage from "./pages/ProductsPage.jsx";
import ProductDetail from "./pages/ProductDetail.jsx";
import FavoritesPage from "./pages/FavoritesPage.jsx";
import "./App.css";
import CategoryBar from "./components/CategoryBar.jsx";

function App() {
  return (
    <>
      <nav className="navbar">
        <h1>Products</h1>
        <br />
        <CategoryBar />
        <div className="nav-right">
          <Link to="/">Products</Link>
          <Link to="/favorites">Favorites</Link>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<ProductsPage />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/favorites" element={<FavoritesPage />} />
      </Routes>
    </>
  );
}

export default App;
