import { createContext, useEffect, useState } from "react";
import { useUser } from "@clerk/clerk-react";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const { isSignedIn, user } = useUser();
  const userId = user?.id || null;

  const [product, setProduct] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [wishlist, setWishlist] = useState([]);

  // Load cart and wishlist from localStorage per user
  useEffect(() => {
    if (userId) {
      const savedCart = localStorage.getItem(`cart_${userId}`);
      setCartItems(savedCart ? JSON.parse(savedCart) : []);

      const savedWishlist = localStorage.getItem(`wishlist_${userId}`);
      setWishlist(savedWishlist ? JSON.parse(savedWishlist) : []);
    } else {
      setCartItems([]);
      setWishlist([]);
    }
  }, [userId]);

  // Persist cart per user
  useEffect(() => {
    if (userId)
      localStorage.setItem(`cart_${userId}`, JSON.stringify(cartItems));
  }, [cartItems, userId]);

  // Persist wishlist per user
  useEffect(() => {
    if (userId)
      localStorage.setItem(`wishlist_${userId}`, JSON.stringify(wishlist));
  }, [wishlist, userId]);

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

  const removeFromCart = (id) =>
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  const increaseQuantity = (id) =>
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  const decreaseQuantity = (id) =>
    setCartItems((prev) =>
      prev
        .map((item) =>
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item
        )
        .filter((item) => item.quantity > 0)
    );
  const clearCart = () => setCartItems([]);

  // --- Wishlist Functions ---
  const addToWishlist = (product) => {
    if (!isSignedIn) {
      alert("You must log in to add items to your wishlist.");
      return;
    }
    setWishlist((prev) => {
      const exists = prev.find((item) => item.id === product.id);
      if (exists) return prev; // don't add duplicates
      return [...prev, product];
    });
  };

  const removeFromWishlist = (id) =>
    setWishlist((prev) => prev.filter((item) => item.id !== id));
  const clearWishList = () => setWishlist([]);

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
    wishlist,
    addToWishlist,
    removeFromWishlist,
    clearWishList,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
