import React from "react";
import { RouterProvider } from "react-router";
import { router } from "./router/AppRouter";
import { ProductProvider } from "./context/ProductContext";

const App = () => {
  return (
    <ProductProvider>
      <RouterProvider router={router} />
    </ProductProvider>
  );
};

export default App;