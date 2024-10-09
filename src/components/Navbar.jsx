// components/Navbar.jsx
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const Navbar = () => {
  const { state } = useContext(CartContext);
  const totalItems = state.items.reduce(
    (total, item) => total + item.quantity,
    0
  ); // Total items in the cart

  return (
    <nav className="bg-blue-900 p-4 text-white flex justify-around items-center">
      <Link to="/" className="lg:text-4xl text-lg font-bold font-orbitron tracking-widest">
        Anand's Stores 2.0
      </Link>
      <div className="flex items-center justify-center shrink-0">
        <div className="hover:scale-90">
          <Link
            to="/"
            className="mr-4 bg-white text-sm  border-2 px-2 py-1 border-white rounded-xl text-black lg:px-8 lg:py-2 font-poppins font-bold"
          >
            Products
          </Link>
        </div>
        <div className="hover:scale-90">
          <Link
            to="/cart"
            className="relative border-2  text-sm px-2 py-1 border-white lg:px-6 lg:py-2 rounded-xl font-poppins font-bold active:scale-90"
          >
            Cart -<span className="pl-2">{totalItems}</span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
