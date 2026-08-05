import React, { useContext } from "react";
import { useNavigate } from "react-router";
import { MyStore } from "../context/MyContext";
import ProductCards from "../components/ProductCards";

const Home = () => {
  const { productData, loading, isLoggedIn } = useContext(MyStore);
  const navigate = useNavigate();

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-8 md:py-12">
      {/* Hero Banner */}
      <div className="bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900 rounded-3xl p-8 md:p-14 text-white mb-12 shadow-md relative overflow-hidden">
        <div className="max-w-xl relative z-10">
          <span className="text-xs font-bold uppercase tracking-widest text-zinc-400">
            Next-Gen E-Commerce
          </span>
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight mt-2 leading-tight">
            Curated Quality Products for Everyone.
          </h1>
          <p className="text-zinc-300 text-sm mt-4 leading-relaxed">
            Experience effortless shopping backed by React Context API architecture, seamless state synchronization, and secure route protection.
          </p>
          <div className="flex gap-4 mt-8">
            <button
              onClick={() => navigate(isLoggedIn ? "/product" : "/login")}
              className="px-6 py-3 bg-white text-zinc-900 hover:bg-zinc-100 text-xs font-bold uppercase tracking-wider rounded-xl transition-colors cursor-pointer"
            >
              {isLoggedIn ? "Browse Full Catalog" : "Sign In to Access"}
            </button>
            <button
              onClick={() => navigate("/about")}
              className="px-6 py-3 border border-zinc-700 hover:bg-zinc-800/60 text-zinc-200 text-xs font-semibold uppercase tracking-wider rounded-xl transition-colors cursor-pointer"
            >
              Learn More
            </button>
          </div>
        </div>
      </div>

      {/* Featured Header */}
      <div className="mb-8 flex items-end justify-between">
        <div>
          <h2 className="text-2xl font-bold tracking-tight text-zinc-900">
            Featured Products
          </h2>
          <p className="text-sm text-zinc-500 mt-1">
            Hand-selected items from our store catalog.
          </p>
        </div>
        <button
          onClick={() => navigate("/product")}
          className="text-xs font-semibold text-zinc-900 hover:underline cursor-pointer hidden sm:block"
        >
          View All Products →
        </button>
      </div>

      {/* Grid */}
      {loading && productData.length === 0 ? (
        <div className="flex items-center justify-center min-h-[300px]">
          <div className="text-zinc-500 text-sm font-medium animate-pulse">
            Loading products...
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {productData &&
            productData.slice(0, 8).map((product) => (
              <ProductCards key={product.id} product={product} />
            ))}
        </div>
      )}
    </div>
  );
};

export default Home;
