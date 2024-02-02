import BigCarousel from "../components/BigCarousel";
import ImageSlide from "../components/ImageSlide";
import ProductList from "../components/ProductList";
import MainLayout from "../layouts/MainLayout";

function Home() {
  return (
    <>
      <div className="bg-[#F5F5F5] text-gray-900">
        <MainLayout>
          <BigCarousel />
          <ProductList />
          <ImageSlide />
        </MainLayout>
      </div>
    </>
  );
}

export default Home;
