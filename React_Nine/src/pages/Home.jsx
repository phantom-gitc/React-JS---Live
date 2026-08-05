import React, { useContext } from "react";
import { MyStore } from "../context/MyContext";
import ProductCards from "../components/ProductCards";

const Home = () => {
  const { productData, loading } = useContext(MyStore);

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-8">
      <div className="mb-8 text-center md:text-left">
        <h2 className="text-2xl font-semibold tracking-tight text-zinc-900">
          Featured Products
        </h2>
        <p className="text-sm text-zinc-500 mt-1">
          Explore our collection of curated items.
        </p>
      </div>

      {loading && productData.length === 0 ? (
        <div className="flex items-center justify-center min-h-[300px]">
          <div className="text-zinc-500 text-sm font-medium animate-pulse">
            Loading products...
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {productData &&
            productData.map((product) => (
              <ProductCards key={product.id} product={product} />
            ))}
        </div>
      )}
    </div>
  );
};

export default Home;
