import React, { createContext, useEffect, useState } from "react";
import axios from "axios";
import { RouterProvider } from "react-router";
import { router } from "./router/AppRouter";

export const ProductContext = createContext();

const App = () => {
  const [productData, setProductData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [searchData, setSearchData] = useState("");

  const getProduct = async () => {
    try {
      const res = await axios.get("https://fakestoreapi.com/products");
      setProductData(res.data);
      setFilteredData(res.data);
    } catch (error) {
      console.log(error);
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
      <RouterProvider router={router} />
    </ProductContext.Provider>
  );
};

export default App;