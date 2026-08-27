import React, { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [productData, setProductData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [searchData, setSearchData] = useState("");

  const getProduct = async () => {
    try {
      const res = await axios.get("https://fakestoreapi.com/products");
      setProductData(res.data);
      setFilteredData(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getProduct();
  }, []);

  return (
    <ProductContext.Provider
      value={{
        productData,
        filteredData,
        setFilteredData,
        searchData,
        setSearchData,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export const useProducts = () => {
  const context = useContext(ProductContext);
  if (!context) {
    throw new Error("useProducts must be used within a ProductProvider");
  }
  return context;
};
