import BigCarousel from "../components/BigCarousel";
import CallToAction from "../components/CallToAction";
import Footer from "../components/Footer";
import ImageSlide from "../components/ImageSlide";
import NavBar from "../components/NavBar";
import ProductList from "../components/ProductList";

function Home() {
  return (
    <>
      <div className="bg-[#F5F5F5] text-gray-900">
        <NavBar />
        <BigCarousel />
        <ProductList />
        <ImageSlide />
        <CallToAction />
        <Footer />
      </div>
    </>
  );
}

export default Home;
