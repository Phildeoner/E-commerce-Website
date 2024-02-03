import { useFavorites } from "./FavoritesContext";
import { ToastContainer, toast } from "react-toastify";

function Table() {
  const { favorites, removeFavorite } = useFavorites();

  const handleDelete = (productId) => {
    const productToRemove = favorites.find(
      (product) => product.id === productId
    );
    if (productToRemove) {
      removeFavorite(productId);
      toast.info(`${productToRemove.title} removed from Favorites!`, {
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

  return (
    <>
      <div className="overflow-x-auto px-10 bg-white min-h-[75vh]">
        <ToastContainer />
        <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm mt-10">
          <thead className="ltr:text-left text-left font-bold text-xl rtl:text-right">
            <tr>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                Product
              </th>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                Date Added
              </th>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                Description
              </th>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                Price
              </th>
              <th className="px-4 py-2"></th>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-200">
            {favorites.map((product) => (
              <tr key={product.id}>
                <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                  {product.title}
                </td>
                <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                  {new Date(product.dateAdded).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                    hour: "2-digit",
                    minute: "2-digit",
                    hour12: true,
                  })}
                </td>
                <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                  {product.description}
                </td>
                <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                  ₦ {product.price}
                </td>
                <td className="whitespace-nowrap px-4 py-2">
                  <a
                    href="#"
                    className="inline-block rounded bg-[#923842] px-4 py-2 text-xs font-medium text-white hover:bg-[#722F37]">
                    View
                  </a>
                </td>
                <td className="whitespace-nowrap px-4 py-2">
                  <button
                    onClick={() => handleDelete(product.id)}
                    className="inline-block rounded bg-red-700 px-4 py-2 text-xs font-medium text-white hover:bg-[#E66B66]">
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Table;
