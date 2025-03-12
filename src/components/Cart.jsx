import React, { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { FaShoppingCart } from "react-icons/fa";
import ItemCart from "./ItemCart";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const [activeCart, setActiveCart] = useState(false);

  const cartItems = useSelector((state) => state.cart.cart);
  const totalQty = cartItems.reduce((totalQty, item) => totalQty + item.qty, 0);
  const totalAmount = cartItems.reduce((totalAmount, item) => totalAmount + item.price * item.qty, 0);

  const navigate = useNavigate();

  return (
    <>
      <div
        className={`fixed right-0 top-0 w-full lg:w-[25vw] h-full p-5 bg-green-100  ${
          activeCart ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-500 z-50`}
      >
        <div className="flex justify-between items-center mb-3 ">
          <span className="text-xl font-bold text-gray-800 ">My Order</span>
          <IoMdClose
            onClick={() => setActiveCart(!activeCart)}
            className="border-2 border-gray-600 text-gray-600 font-bold p-1 text-xl rounded-md hover:text-red-300 hover:border-red-300 cursor-pointer"
          />
        </div>

        {cartItems.length > 0 ? (
          <div className="overflow-y-auto h-[calc(100%-10rem)] no-scrollbar "> {/* Adjust the height as needed */}
            {cartItems.map((food) => (
              <ItemCart
                key={food.id}
                id={food.id}
                name={food.name}
                price={food.price}
                img={food.img}
                qty={food.qty}
              />
            ))}
          </div>
        ) : (
          <h2 className="text-center text-xl font-semibold text-gray-800">
            Your cart is empty
          </h2>
        )}
        
        <div className="fixed bottom-0 border border-t-green-400 left-0 w-full p-5 bg-green-100 lg:w-[25vw]">
          <h3 className="font-semibold text-gray-800">Items: {totalQty}</h3>
          <h3 className="font-semibold text-gray-800">Total Amount: ${totalAmount.toFixed(2)}</h3>
          <hr className="my-2" />
          <button onClick={() => navigate("/success")}
            className="bg-green-500 font-bold px-3 text-white py-2 rounded-lg w-full mb-5"
          >
            Checkout
          </button>
        </div>
      </div>
      <FaShoppingCart
        onClick={() => setActiveCart(!activeCart)}
        className={`rounded-full bg-green-300 shadow-lg text-5xl p-3 fixed bottom-4 right-4 ${totalQty > 0 ? "animate-bounce delay-500 transition-all" : ""}`}
      />
    </>
  );
};

export default Cart;
