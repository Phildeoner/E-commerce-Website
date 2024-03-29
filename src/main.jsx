import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { CartProvider } from "./components/CartContext";
import { FavoritesProvider } from "./components/FavoritesContext.jsx";
import { CurrencyProvider } from "./components/CurrencyContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CartProvider>
      <FavoritesProvider>
        <CurrencyProvider>
          <App />
        </CurrencyProvider>
      </FavoritesProvider>
    </CartProvider>
  </React.StrictMode>
);
