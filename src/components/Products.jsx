// components/Products.js
import  { useEffect, useState, useContext } from "react";
import { fetchProducts } from "../services/ApiService";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";

const Products = () => {
  const [products, setProducts] = useState([]);
  const { state, dispatch } = useContext(CartContext); // Access cart state and dispatch function

  useEffect(() => {
    fetchProducts().then((data) => setProducts(data));
  }, []);

  // Check if a product is already in the cart
  const isInCart = (productId) => {
    return state.items.some((item) => item.id === productId);
  };

  return (
    <div className="grid grid-cols-1 lg:px-16 sm:grid-cols-2 text-center font-poppins   lg:grid-cols-4 gap-6 p-6">
      {products.map((product) => (
        <div
          key={product.id}
          className="shadow-inner shadow-gray-300 p-4 hover:shadow-lg  hover:scale-105 transition flex flex-col items-center justify-center rounded-lg"
        >
          <img
            src={product.image}
            alt={product.title}
            className="h-40 mb-4 scale-75"
          />
          <h2 className="text-sm font-Orbitron mb-2 text-center">
            {product.title}
          </h2>
          {/* <p className="text-sm">{product.description.slice(0, 100)}...</p> */}
          <p className="text-xl  mb-3 font-bold">${product.price}</p>

          {/* Link to product details page */}

          <Link
            to={`/product/${product.id}`}
            className="border-2 font-bold bg-blue-900 border-black rounded-lg text-white hover:bg-transparent p-2 mt-2 block w-full text-center hover:text-black scale-90"
          >
            View Product
          </Link>

          {/* Add or Remove from Cart button */}
          {isInCart(product.id) ? (
            <button
              onClick={() =>
                dispatch({ type: "REMOVE_FROM_CART", payload: product })
              }
              className="border-2 font-bold bg-red-500 border-red-500  rounded-lg text-white hover:bg-transparent p-2 mt-2 block w-full text-center hover:text-red-500 scale-90"
            >
              Remove from Cart
            </button>
          ) : (
            <button
              onClick={() =>
                dispatch({ type: "ADD_TO_CART", payload: product })
              }
              className="border-2 font-bold bg-black border-black rounded-lg text-white hover:bg-transparent p-2 mt-2 block w-full text-center hover:text-black scale-90"
            >
              Add to Cart
            </button>
          )}
        </div>
      ))}
    </div>
  );
};

export default Products;
