import Cart from "../components/Cart";
import MainLayout from "../layouts/MainLayout";

function CartPage() {
  return (
    <div className="bg-[#F5F5F5] text-gray-900">
      <MainLayout>
        <Cart />
      </MainLayout>
    </div>
  );
}

export default CartPage;
