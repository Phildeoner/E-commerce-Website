import CallToAction from "./components/CallToAction";
import Checkout from "./components/Checkout";
import Footer from "./components/Footer";
import ImageSlide from "./components/ImageSlide";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="bg-[#F5F5F5] text-gray-900">
      <NavBar />
      <Checkout />
      <ImageSlide />
      <CallToAction />
      <Footer />
    </div>
  );
}

export default App;
