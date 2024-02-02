import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import CartPage from "./pages/CartPage";
import FavouritePage from "./pages/FavouritePage";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/favourite" element={<FavouritePage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
