import { motion } from "framer-motion";
import { useCart } from "./CartContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const products = [
  {
    id: 1,
    title: "Fundamental responsive emulation",
    description: "Parent news man.",
    image: "https://www.supermart.ng/cdn/shop/files/aspar8387.jpg?v=1689076684",
    price: 845.94,
    discount: 100,
  },
  {
    id: 2,
    title: "Secured incremental data-warehouse",
    description: "Even at season.",
    image:
      "https://www-konga-com-res.cloudinary.com/w_400,f_auto,fl_lossy,dpr_3.0,q_auto/media/catalog/product/P/K/164305_1595253148.jpg",
    price: 993.83,
    discount: 100,
  },
  {
    id: 3,
    title: "Cross-platform analyzing policy",
    description: "Together argue activity.",
    image:
      "https://www.cellarcentral.ng/image/cache/catalog/BACARDI%20MARTINI/MARTINI/Martini-Rose-Bottle-Shot-600x600.gif",
    price: 299.64,
    discount: 100,
  },
  {
    id: 4,
    title: "Polarized grid-enabled protocol",
    description: "System notice ball whose while his.",
    image:
      "https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1589557265-tc-whisperingangel-1589557251.jpg?crop=1xw:1xh;center,top&resize=980:*",
    price: 101.56,
    discount: 100,
  },
  {
    id: 5,
    title: "Total fresh-thinking service-desk",
    description: "Else race together build from.",
    image: "https://www.supermart.ng/cdn/shop/files/aspar8036.jpg?v=1688773182",
    price: 643.31,
    discount: 100,
  },
  {
    id: 6,
    title: "Grass-roots secondary function",
    description: "Stand throughout down just bar on.",
    image:
      "https://www.thewinecentre.ie/wp-content/uploads/2022/03/70726-600x762.png",
    price: 993.37,
    discount: 100,
  },
  {
    id: 7,
    title: "Extended optimal capability",
    description: "Plan key economic collection.",
    image:
      "https://i0.wp.com/nextcashandcarry.com.ng/wp-content/uploads/2022/06/164305_1595258984.webp?fit=500%2C500&ssl=1",
    price: 762.52,
    discount: 100,
  },
  {
    id: 8,
    title: "Universal mobile definition",
    description: "Support here race push whether station.",
    image:
      "https://www-konga-com-res.cloudinary.com/w_400,f_auto,fl_lossy,dpr_3.0,q_auto/media/catalog/product/L/J/140595_1564079607.jpg",
    price: 603.91,
    discount: 100,
  },
  {
    id: 9,
    title: "Reverse-engineered client-server attitude",
    description: "For son activity own.",
    image:
      "https://shoponclick.ng/wp-content/uploads/2020/07/Andre-Sparkling-Wine-750ml.png",
    price: 135.07,
    discount: 100,
  },
  {
    id: 10,
    title: "Customizable full-range model",
    description: "How spring people with.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaUCaKnbx68iFDSBQKXpwV9a0RGfkcDJl6rg&usqp=CAU",
    price: 283.21,
    discount: 100,
  },
  {
    id: 11,
    title: "Distributed client-server concept",
    description: "Manager pressure future office human action.",
    image:
      "https://target.scene7.com/is/image/Target/GUEST_1d5790c4-f215-432c-b077-b8462290f0f2?wid=488&hei=488&fmt=pjpeg",
    price: 447.3,
    discount: 100,
  },
  {
    id: 12,
    title: "Profit-focused scalable contingency",
    description: "Point person beyond new.",
    image: "https://m.media-amazon.com/images/I/61DJGP4zknL.jpg",
    price: 526.47,
    discount: 100,
  },
];

function ProductList() {
  const { cart, setCart } = useCart();

  const addToCart = (product) => {
    const newProduct = {
      ...product,
      quantity: 1,
    };
    setCart([...cart, newProduct]);
    toast.success(`${product.title} Added to Cart!`, {
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
    <div className="container mx-auto mt-10 p-4">
      <ToastContainer />
      <div className="grid grid-cols-3 gap-4">
        {products.map((product) => (
          <motion.div
            key={product.id}
            className="card bg-white p-4 rounded-lg shadow cursor-pointer"
            whileHover={{ scale: 1.05 }}>
            <img
              src={product.image}
              alt={product.title}
              className="h-80 w-full object-contain rounded-t-lg"
            />
            <div className="p-4">
              <h3 className="text-lg font-bold">{product.title}</h3>
              <p className="text-gray-600">{product.description}</p>
              <div className="flex justify-between items-center mt-4">
                <span className="text-lg font-bold">₦ {product.price}</span>
                <button
                  onClick={() => addToCart(product)}
                  className="px-4 py-2 bg-[#722F37] text-white rounded hover:bg-[#722f37c5]">
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
