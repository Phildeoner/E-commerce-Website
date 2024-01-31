import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ShoppingCartIcon } from "@heroicons/react/outline";
import { Link } from "react-router-dom";

// Array of generated product objects
const products = [
  {
    id: 1,
    title: "Fundamental responsive emulation",
    description: "Parent news man.",
    image: "https://www.lorempixel.com/562/451",
    price: 845.94,
  },
  {
    id: 2,
    title: "Secured incremental data-warehouse",
    description: "Even at season.",
    image: "https://placeimg.com/353/264/any",
    price: 993.83,
  },
  {
    id: 3,
    title: "Cross-platform analyzing policy",
    description: "Together argue activity.",
    image: "https://www.lorempixel.com/608/560",
    price: 299.64,
  },
  {
    id: 4,
    title: "Polarized grid-enabled protocol",
    description: "System notice ball whose while his.",
    image: "https://placeimg.com/155/638/any",
    price: 101.56,
  },
  {
    id: 5,
    title: "Total fresh-thinking service-desk",
    description: "Else race together build from.",
    image: "https://www.lorempixel.com/758/896",
    price: 643.31,
  },
  {
    id: 6,
    title: "Grass-roots secondary function",
    description: "Stand throughout down just bar on.",
    image: "https://dummyimage.com/879x749",
    price: 993.37,
  },
  {
    id: 7,
    title: "Extended optimal capability",
    description: "Plan key economic collection.",
    image: "https://placekitten.com/470/183",
    price: 762.52,
  },
  {
    id: 8,
    title: "Universal mobile definition",
    description: "Support here race push whether station.",
    image: "https://placekitten.com/654/273",
    price: 603.91,
  },
  {
    id: 9,
    title: "Reverse-engineered client-server attitude",
    description: "For son activity own.",
    image: "https://dummyimage.com/637x433",
    price: 135.07,
  },
  {
    id: 10,
    title: "Customizable full-range model",
    description: "How spring people with.",
    image: "https://placeimg.com/266/292/any",
    price: 283.21,
  },
  {
    id: 11,
    title: "Distributed client-server concept",
    description: "Manager pressure future office human action.",
    image: "https://placeimg.com/1006/156/any",
    price: 447.3,
  },
  {
    id: 12,
    title: "Profit-focused scalable contingency",
    description: "Point person beyond new.",
    image: "https://dummyimage.com/462x678",
    price: 526.47,
  },
];

function ProductList() {
  // Initialize the cart from localStorage or set it to an empty array
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  // Update localStorage whenever the cart changes
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-end">
        <div className="relative">
          <Link to="/cart">
            <ShoppingCartIcon className="h-6 w-6" />
          </Link>
          {cart.length > 0 && (
            <span className="absolute top-0 right-0 rounded-full bg-red-600 w-4 h-4 flex items-center justify-center text-white text-xs">
              {cart.length}
            </span>
          )}
        </div>
      </div>
      <div className="grid grid-cols-3 gap-4">
        {products.map((product) => (
          <motion.div
            key={product.id}
            className="card bg-white p-4 rounded-lg shadow"
            whileHover={{ scale: 1.05 }}>
            <img
              src={product.image}
              alt={product.title}
              className="h-40 w-full object-cover rounded-t-lg"
            />
            <div className="p-4">
              <h3 className="text-lg font-bold">{product.title}</h3>
              <p className="text-gray-600">{product.description}</p>
              <div className="flex justify-between items-center mt-4">
                <span className="text-lg font-bold">${product.price}</span>
                <button
                  onClick={() => addToCart(product)}
                  className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
                  Buy
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default ProductList;
