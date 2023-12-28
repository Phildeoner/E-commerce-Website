import BigCarousel from "./components/BigCarousel";
import CallToAction from "./components/CallToAction";
import Cart from "./components/Cart";
import Footer from "./components/Footer";
import ImageSlide from "./components/ImageSlide";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="bg-[#F5F5F5] text-gray-900">
      <NavBar />
      <BigCarousel />
      <Cart />
      <ImageSlide />
      <CallToAction />
      <Footer />
    </div>
  );
}

export default App;
