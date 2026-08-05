import { createContext, useState, useEffect } from "react";
import axios from "axios";

const MyStore = createContext();

const ContextProvider = ({ children }) => {
  const [productData, setProductData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [singleProduct, setSingleProduct] = useState(null);
  const [singleLoading, setSingleLoading] = useState(false);


  // API call for  Product Details ..

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
  // API call for Single Product Details ..

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
      }}
    >
      {children}
    </MyStore.Provider>
  );
};

export { ContextProvider, MyStore };
