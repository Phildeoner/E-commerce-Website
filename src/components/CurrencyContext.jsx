import { createContext, useContext, useState, useEffect } from "react";
import PropTypes from "prop-types";

const CurrencyContext = createContext();

export const useCurrency = () => useContext(CurrencyContext);

const initialState = () => {
  const savedCurrency = localStorage.getItem("currency");
  return savedCurrency
    ? JSON.parse(savedCurrency)
    : { symbol: "₦", code: "NGN", rate: 1 };
};

export const CurrencyProvider = ({ children }) => {
  const [currency, setCurrency] = useState(initialState());
  const [isLoading, setIsLoading] = useState(false);

  const apiKey = import.meta.env.VITE_API_KEY;

  const fetchCurrencyData = async () => {
    const url = `https://v6.exchangerate-api.com/v6/${apiKey}/latest/${currency.code}`;
    try {
      const response = await fetch(url);
      const data = await response.json();
      if (data.result === "success") {
        setCurrency((prevCurrency) => ({
          ...prevCurrency,
          rate: data.conversion_rates[prevCurrency.code] || 1,
        }));
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    setIsLoading(true);
    fetchCurrencyData().finally(() => setIsLoading(false));
  }, [currency.code, apiKey]);

  useEffect(() => {
    if (currency.code !== "NGN" || !localStorage.getItem("currency")) {
      fetchCurrencyData();
    }
  }, [currency.code, apiKey]);

  useEffect(() => {
    localStorage.setItem("currency", JSON.stringify(currency));
  }, [currency]);

  const updateCurrency = (code, symbol) => {
    const url = `https://v6.exchangerate-api.com/v6/${apiKey}/latest/NGN`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        if (data.result === "success") {
          setCurrency({
            symbol,
            code,
            rate: data.conversion_rates[code],
          });
        }
      })
      .catch((error) => {
        console.error("Error updating currency:", error);
      });
  };

  return (
    <CurrencyContext.Provider value={{ currency, updateCurrency }}>
      {children}
    </CurrencyContext.Provider>
  );
};

CurrencyProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
