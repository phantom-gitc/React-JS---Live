import { createContext, useState, useEffect } from "react";
import axios from "axios";

// Create context for global app state
const MyStore = createContext();

const ContextProvider = ({ children }) => {
  // Store all products fetched from API
  const [productData, setProductData] = useState([]);
  const [loading, setLoading] = useState(false);

  // Store data for single product view
  const [singleProduct, setSingleProduct] = useState(null);
  const [singleLoading, setSingleLoading] = useState(false);

  // Check login status from localStorage
  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    return localStorage.getItem("isLoggedIn") === "true";
  });

  // Store user info in state
  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem("user");
    return savedUser
      ? JSON.parse(savedUser)
      : { name: "Demo User", email: "user@example.com", avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=150&q=80" };
  });

  // Store shopping cart items
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  // Persist cart to local storage whenever cart changes
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  // Handle user login and save session
  const login = (userData) => {
    const defaultUser = {
      name: userData?.email ? userData.email.split("@")[0] : "Demo User",
      email: userData?.email || "user@example.com",
      avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=150&q=80",
    };
    setIsLoggedIn(true);
    setUser(defaultUser);
    localStorage.setItem("isLoggedIn", "true");
    localStorage.setItem("user", JSON.stringify(defaultUser));
  };

  // Handle new user signup
  const signup = (name, email) => {
    const newUser = {
      name: name || email.split("@")[0],
      email: email,
      avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=150&q=80",
    };
    setIsLoggedIn(true);
    setUser(newUser);
    localStorage.setItem("isLoggedIn", "true");
    localStorage.setItem("user", JSON.stringify(newUser));
  };

  // Handle logout and clear session
  const logout = () => {
    setIsLoggedIn(false);
    setUser(null);
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("user");
  };

  // Add item to cart or increase item count
  const addToCart = (product, qty = 1) => {
    setCart((prevCart) => {
      const existingIndex = prevCart.findIndex((item) => item.product.id === product.id);
      if (existingIndex > -1) {
        const updatedCart = [...prevCart];
        updatedCart[existingIndex].quantity += qty;
        return updatedCart;
      } else {
        return [...prevCart, { product, quantity: qty }];
      }
    });
  };

  // Remove single item from cart
  const removeFromCart = (productId) => {
    setCart((prevCart) => prevCart.filter((item) => item.product.id !== productId));
  };

  // Increase or decrease quantity of an item
  const updateQuantity = (productId, delta) => {
    setCart((prevCart) =>
      prevCart
        .map((item) => {
          if (item.product.id === productId) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter(Boolean)
    );
  };

  // Empty all items from cart
  const clearCart = () => {
    setCart([]);
  };

  // Calculate total items in cart
  const cartCount = cart.reduce((total, item) => total + item.quantity, 0);

  // Calculate subtotal price for cart
  const cartTotal = cart.reduce((total, item) => total + item.product.price * item.quantity, 0);

  // Fetch all products from API
  const getProductData = async () => {
    if (productData && productData.length > 0) return;
    setLoading(true);
    try {
      const res = await axios.get("https://fakestoreapi.com/products");
      setProductData(res.data);
    } catch (error) {
      console.log("Error fetching products:", error);
    } finally {
      setLoading(false);
    }
  };

  // Fetch single product details by id
  const getSingleProductData = async (id) => {
    setSingleLoading(true);
    try {
      const res = await axios.get(`https://fakestoreapi.com/products/${id}`);
      setSingleProduct(res.data);
    } catch (error) {
      console.log("Error fetching single product:", error);
      setSingleProduct(null);
    } finally {
      setSingleLoading(false);
    }
  };

  // Load products when component mounts
  useEffect(() => {
    getProductData();
  }, []);

  return (
    <MyStore.Provider
      value={{
        productData,
        setProductData,
        loading,
        getProductData,
        singleProduct,
        setSingleProduct,
        singleLoading,
        getSingleProductData,
        isLoggedIn,
        user,
        login,
        signup,
        logout,
        cart,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        cartCount,
        cartTotal,
      }}
    >
      {children}
    </MyStore.Provider>
  );
};

export { ContextProvider, MyStore };
