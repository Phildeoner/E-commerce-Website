import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useCart } from "./CartContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useFavorites } from "./FavoritesContext";

function Cart() {
  const { cart, setCart } = useCart();
  const { favorites, addFavorite } = useFavorites();

  const totalPrice = cart.reduce((acc, product) => {
    const price = parseFloat(product.price);
    const quantity = parseInt(product.quantity, 10);
    if (isNaN(price) || isNaN(quantity)) {
      console.error("Invalid product found", product);
      return acc;
    }
    return acc + price * quantity;
  }, 0);

  const addToFavorites = (product) => {
    const isAlreadyFavorite = favorites.some((fav) => fav.id === product.id);
    if (isAlreadyFavorite) {
      toast.info("This item is already in your favorites!", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } else {
      const productWithDateAdded = {
        ...product,
        dateAdded: new Date().toISOString(),
      };
      addFavorite(productWithDateAdded);
      toast.success(`${product.title} added to favorites!`, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };

  const updateQuantity = (index, newQuantity) => {
    const numericQuantity = parseInt(newQuantity, 10);
    if (!isNaN(numericQuantity) && numericQuantity > 0) {
      const updatedCart = cart.map((item, i) =>
        i === index ? { ...item, quantity: numericQuantity } : item
      );
      setCart(updatedCart);
    }
  };

  const handleCheckout = () => {
    if (cart.length === 0 || totalPrice === 0) {
      toast.error("Your cart is empty!", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } else {
      window.location.href = "https://flutterwave.com/pay/yehm4wfm2fqg";
    }
  };

  const removeFromCart = (indexToRemove) => {
    const productRemoved = cart[indexToRemove];
    const newCart = cart.filter((_, index) => index !== indexToRemove);
    setCart(newCart);
    localStorage.setItem("cart", JSON.stringify(newCart));
    toast.info(`${productRemoved.title} removed from cart!`, {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  return (
    <>
      <div className="flex flex-col  p-6 space-y-6 sm:px-20 dark:bg-gray-900 dark:text-gray-100">
        <ToastContainer />
        <h2 className="text-3xl font-semibold">Your cart</h2>
        <div className="flex justify-between">
          <img src="/cart.jpg" alt="cart" className="rounded-lg shadow-xl" />
          <div className="w-[50%]">
            <ul className="flex flex-col divide-y dark:divide-gray-700">
              {cart.map((product, index) => (
                <li
                  key={index}
                  className="flex flex-col py-6 sm:flex-row sm:justify-between">
                  <div className="flex w-full space-x-2 sm:space-x-4">
                    <img
                      className="flex-shrink-0 object-cover w-20 h-20 dark:border-transparent rounded outline-none sm:w-32 sm:h-32 dark:bg-gray-500"
                      src={product.image}
                    />
                    <div className="flex flex-col justify-between w-full pb-4">
                      <div className="flex justify-between w-full pb-2 space-x-2">
                        <div className="space-y-1">
                          <h3 className="text-lg font-semibold leadi sm:pr-8">
                            {product.title}
                          </h3>
                          <p className="text-sm dark:text-gray-400">
                            {product.description}
                          </p>
                        </div>
                        <div className="text-right">
                          <p className="text-lg font-semibold">
                            ₦ {(product.price * product.quantity).toFixed(2)}
                          </p>
                          <p className="text-sm line-through dark:text-gray-600">
                            ₦ {product.discount}
                          </p>
                        </div>
                      </div>
                      <div className="flex text-sm divide-x">
                        <button
                          onClick={() => removeFromCart(index)}
                          type="button"
                          className="flex items-center px-2 py-1 pl-0 space-x-1">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 512 512"
                            className="w-4 h-4 fill-current">
                            <path d="M96,472a23.82,23.82,0,0,0,23.579,24H392.421A23.82,23.82,0,0,0,416,472V152H96Zm32-288H384V464H128Z"></path>
                            <rect
                              width="32"
                              height="200"
                              x="168"
                              y="216"></rect>
                            <rect
                              width="32"
                              height="200"
                              x="240"
                              y="216"></rect>
                            <rect
                              width="32"
                              height="200"
                              x="312"
                              y="216"></rect>
                            <path d="M328,88V40c0-13.458-9.488-24-21.6-24H205.6C193.488,16,184,26.542,184,40V88H64v32H448V88ZM216,48h80V88H216Z"></path>
                          </svg>
                          <span>Remove</span>
                        </button>

                        <div className="flex items-center">
                          <p className="font-bold">QTY:</p>
                          <button
                            className="px-2 ml-2 bg-red-600 text-white"
                            onClick={() =>
                              updateQuantity(
                                index,
                                Math.max(1, product.quantity - 1)
                              )
                            }>
                            -
                          </button>
                          <span className="mx-2 text-xl font-bold">
                            {product.quantity}
                          </span>
                          <button
                            className="px-2 bg-red-600 text-white"
                            onClick={() =>
                              updateQuantity(
                                index,
                                Math.min(3, product.quantity + 1)
                              )
                            }>
                            +
                          </button>
                        </div>

                        <button
                          onClick={() => addToFavorites(product)}
                          type="button"
                          className="flex items-center px-2 py-1 space-x-1">
                          <svg
                            className="w-6 h-6"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill={
                              favorites.some((fav) => fav.id === product.id)
                                ? "red"
                                : "currentColor"
                            }
                            viewBox="0 0 24 24">
                            <path d="m12.7 20.7 6.2-7.1c2.7-3 2.6-6.5.8-8.7A5 5 0 0 0 16 3c-1.3 0-2.7.4-4 1.4A6.3 6.3 0 0 0 8 3a5 5 0 0 0-3.7 1.9c-1.8 2.2-2 5.8.8 8.7l6.2 7a1 1 0 0 0 1.4 0Z" />
                          </svg>

                          <span>Add to favorites</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
            <div className="space-y-1 text-xl font-bold text-right">
              <p>
                Total Amount:
                <span className="text-xl ml-2 font-bold">
                  ₦ {totalPrice.toFixed(2)}
                </span>
              </p>
              <p className="text-sm dark:text-gray-400">
                Not including taxes and shipping costs
              </p>
            </div>
            <div className="flex justify-end space-x-4 mt-2">
              <Link to="/">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  type="button"
                  className="px-6 bg-[#E66B66] text-gray-100 py-2 border rounded-md dark:border-violet-400">
                  Back
                  <span className="sr-only sm:not-sr-only"> to shop</span>
                </motion.button>
              </Link>

              <motion.button
                whileHover={{ scale: 1.05 }}
                type="button"
                onClick={handleCheckout}
                className="px-6 bg-[#E66B66] text-gray-100 py-2 border rounded-md dark:bg-violet-400 dark:text-gray-900 dark:border-violet-400">
                <span className="sr-only sm:not-sr-only">Continue to </span>
                Checkout
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cart;
