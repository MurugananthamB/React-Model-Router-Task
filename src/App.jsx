// App.jsx
import { Routes, Route } from "react-router-dom";
import Products from "./components/Products";
import Cart from "./components/Cart";
import ProductDetails from "./components/ProductDetails";
import Navbar from "./components/Navbar"; // Import the Navbar
import { CartProvider } from "./context/CartContext";

function App() {
  return (
    <CartProvider>
      <Navbar /> {/* Navbar added here */}
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/product/:id" element={<ProductDetails />} />
      </Routes>
    </CartProvider>
  );
}

export default App;
