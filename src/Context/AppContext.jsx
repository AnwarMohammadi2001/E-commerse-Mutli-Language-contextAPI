import { createContext, useEffect, useState } from "react";
import { useUser } from "@clerk/clerk-react";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const { isSignedIn, user } = useUser(); // Clerk hooks
  const userId = user?.id || null;

  const [product, setProduct] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  // Load cart from localStorage per user
  useEffect(() => {
    if (userId) {
      const saved = localStorage.getItem(`cart_${userId}`);
      setCartItems(saved ? JSON.parse(saved) : []);
    } else {
      setCartItems([]); // empty cart for logged-out users
    }
  }, [userId]);

  // Persist cart per user
  useEffect(() => {
    if (userId) {
      localStorage.setItem(`cart_${userId}`, JSON.stringify(cartItems));
    }
  }, [cartItems, userId]);

  const [productLoading, setProductLoading] = useState(false);
  const [layout, setLayout] = useState("grid-5");

  // Fetch Products
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setProductLoading(true);
        const res = await fetch("https://fakestoreapi.com/products");
        const result = await res.json();
        setProduct(result);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setProductLoading(false);
      }
    };
    fetchProduct();
  }, []);

  // --- Cart Functions ---
  const addToCart = (product) => {
    if (!isSignedIn) {
      alert("You must log in to add items to your cart.");
      return;
    }

    setCartItems((prev) => {
      const exist = prev.find((item) => item.id === product.id);
      if (exist) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const increaseQuantity = (id) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decreaseQuantity = (id) => {
    setCartItems((prev) =>
      prev
        .map((item) =>
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const clearCart = () => setCartItems([]);

  const value = {
    product,
    productLoading,
    layout,
    setLayout,
    cartItems,
    addToCart,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
    clearCart,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
