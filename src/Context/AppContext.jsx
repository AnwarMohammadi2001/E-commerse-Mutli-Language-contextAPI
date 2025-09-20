import { createContext, useEffect, useState } from "react";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [product, setProduct] = useState([]);
  const [productLoading, setProductLoading] = useState(false);

  // Fetch Product From API
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setProductLoading(true);
        const url = "https://fakestoreapi.com/products";
        const res = await fetch(url);
        const result = await res.json();
        setProduct(result);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setProductLoading(false);
      }
    };

    fetchProduct();
  }, []);

  const value = {
    product,
    productLoading,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
