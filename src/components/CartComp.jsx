import { useState } from "react";
import { motion } from "framer-motion";

function CartComp() {
  // Initialize the cart from localStorage
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem("cart");
    let initialCart = savedCart ? JSON.parse(savedCart) : [];
    // Ensure each item has a quantity
    initialCart = initialCart.map((item) => ({
      ...item,
      quantity: item.quantity || 1, // Set default quantity to 1 if it's not defined
    }));
    return initialCart;
  });

  // Calculate total price
  const totalPrice = cart.reduce(
    (acc, product) => acc + product.price * product.quantity,
    0
  );

  // Function to update quantity
  const updateQuantity = (index, newQuantity) => {
    const updatedCart = cart.map((item, i) => {
      if (i === index) {
        return { ...item, quantity: newQuantity };
      }
      return item;
    });
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  // Function to remove an item from the cart
  const removeFromCart = (indexToRemove) => {
    const newCart = cart.filter((_, index) => index !== indexToRemove);
    setCart(newCart);
    localStorage.setItem("cart", JSON.stringify(newCart));
  };

  // Render cart items
  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Your Cart</h2>
      <ul>
        {cart.map((product, index) => (
          <li key={index} className="flex justify-between items-center mb-2">
            <span>{product.title}</span>
            <span>${(product.price * product.quantity).toFixed(2)}</span>
            <div className="flex items-center">
              <button
                onClick={() =>
                  updateQuantity(index, Math.max(1, product.quantity - 1))
                }>
                -
              </button>
              <span className="mx-2">{product.quantity}</span>
              <button
                onClick={() =>
                  updateQuantity(index, Math.min(3, product.quantity + 1))
                }>
                +
              </button>
            </div>
            <button
              onClick={() => removeFromCart(index)}
              className="bg-red-500 text-white p-2 rounded">
              Remove
            </button>
          </li>
        ))}
      </ul>
      <div className="flex justify-between items-center mt-4">
        <span className="text-xl font-bold">
          Total: ${totalPrice.toFixed(2)}
        </span>
        <motion.button
          whileHover={{ scale: 1.1 }}
          className="px-6 py-2 bg-green-500 text-white rounded hover:bg-green-600">
          Checkout
        </motion.button>
      </div>
    </div>
  );
}

export default CartComp;
