// components/Cart.js
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const Cart = () => {
  const { state, dispatch } = useContext(CartContext);

  const totalPrice = state.items.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  const finalPrice = totalPrice * 0.9; // Apply 10% discount

  return (
    <div className=" px-8 lg:px-16 pt-10 font-poppins pb-10">
      <h1 className="text-5xl mb-4 font-poppins font-bold">Your Cart</h1>
      {state.items.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="">
          {state.items.map((item) => (
            <div
              key={item.id}
              className="flex justify-between items-center flex-col lg:flex-row border-b pb-2 mb-4"
            >
              <div className="space-y-3">
                <h3 className="lg:text-lg md:text-xl font-semibold font-poppins">
                  {item.title}
                </h3>
                <p>${item.price}</p>
                <div className="flex items-center justify-between lg:justify-start lg:space-x-10 space-x-2 ">
                  <button
                    className="border-2 font-bold bg-red-500 text-xs lg:text-lg px-2 py-1  border-red-500  rounded-lg text-white hover:bg-transparent  text-center hover:text-red-500 lg:px-8 lg:py-2"
                    onClick={() =>
                      dispatch({ type: "REMOVE_FROM_CART", payload: item })
                    }
                  >
                    Remove from Cart
                  </button>
                  <div className="flex ">
                    <button
                      className="bg-black hover:scale-90 font-bold px-2 text-white lg:px-2 rounded-lg lg:text-2xl"
                      onClick={() =>
                        dispatch({
                          type: "UPDATE_QUANTITY",
                          payload: { id: item.id, quantity: item.quantity - 1 },
                        })
                      }
                      disabled={item.quantity === 1}
                    >
                      -
                    </button>
                    <span className="px-4">{item.quantity}</span>
                    <button
                      className="bg-black hover:scale-90 font-bold px-2 text-white lg:px-2 rounded-lg lg:text-2xl"
                      onClick={() =>
                        dispatch({
                          type: "UPDATE_QUANTITY",
                          payload: { id: item.id, quantity: item.quantity + 1 },
                        })
                      }
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
              <p className="pt-10">
                <span className=" text-xl">Total:</span>{" "}
                <span className="font-bold">
                  ${(item.price * item.quantity).toFixed(2)}
                </span>
              </p>
            </div>
          ))}
          <div className="mt-6 space-y-4">
            <h1 className="lg:text-xl">
              Subtotal:{" "}
              <span className="font-bold">${totalPrice.toFixed(2)}</span>{" "}
            </h1>
            <h1 className="lg:text-xl ">
              Final Price (10% discount):{" "}
              <span className="font-bold  "> ${finalPrice.toFixed(2)}</span>
            </h1>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
