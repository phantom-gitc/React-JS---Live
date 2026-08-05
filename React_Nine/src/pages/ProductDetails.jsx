import React, { useContext, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router";
import { MyStore } from "../context/MyContext";

// Single product details page component
const ProductDetails = () => {
  // Get product ID from URL params and navigation helper
  const { id } = useParams();
  const navigate = useNavigate();

  // Access single product data and cart actions from store context
  const { singleProduct, singleLoading, getSingleProductData, addToCart } = useContext(MyStore);

  // Local quantity counter and button feedback state
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);

  // Fetch product info whenever URL param id changes
  useEffect(() => {
    if (id) {
      getSingleProductData(id);
    }
  }, [id]);

  // Handler to add item with selected quantity to cart
  const handleAddToCart = () => {
    if (singleProduct) {
      addToCart(singleProduct, quantity);
      setAdded(true);
      setTimeout(() => setAdded(false), 2000);
    }
  };

  // Show loading indicator while fetching item data
  if (singleLoading || (!singleProduct && singleLoading)) {
    return (
      <div className="w-full max-w-6xl mx-auto px-4 py-16 flex items-center justify-center min-h-[500px]">
        <div className="flex flex-col items-center gap-3">
          <div className="w-8 h-8 border-2 border-zinc-900 border-t-transparent rounded-full animate-spin"></div>
          <p className="text-zinc-500 text-sm font-medium animate-pulse">Loading product details...</p>
        </div>
      </div>
    );
  }

  // Show missing state if product data wasn't found
  if (!singleProduct) {
    return (
      <div className="w-full max-w-6xl mx-auto px-4 py-16 text-center">
        <h2 className="text-xl font-semibold text-zinc-900">Product Not Found</h2>
        <p className="text-sm text-zinc-500 mt-2">The product you are looking for does not exist.</p>
        <button
          onClick={() => navigate("/")}
          className="mt-6 px-4 py-2 bg-zinc-900 text-white text-xs font-medium rounded-lg hover:bg-zinc-800 transition-colors cursor-pointer"
        >
          Back to Home
        </button>
      </div>
    );
  }

  const { title, price, description, category, image, rating } = singleProduct;

  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-8 md:py-12">
      {/* Navigation button to return to previous page */}
      <button
        onClick={() => navigate(-1)}
        className="inline-flex items-center gap-2 text-xs font-medium text-zinc-500 hover:text-zinc-900 transition-colors mb-8 cursor-pointer group"
      >
        <span className="group-hover:-translate-x-0.5 transition-transform">←</span> Back to products
      </button>

      {/* Main product view grid layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16 items-start">
        {/* Left image display box */}
        <div className="bg-white border border-zinc-200 rounded-2xl p-8 md:p-12 flex items-center justify-center min-h-[380px] md:min-h-[460px] relative overflow-hidden shadow-xs">
          {category && (
            <span className="absolute top-4 left-4 bg-zinc-900 text-zinc-100 text-[10px] uppercase tracking-wider font-semibold px-2.5 py-1 rounded-full">
              {category}
            </span>
          )}
          <img
            src={image}
            alt={title}
            className="max-h-[320px] md:max-h-[380px] w-auto object-contain hover:scale-105 transition-transform duration-300"
          />
        </div>

        {/* Right product information column */}
        <div className="flex flex-col">
          <span className="text-xs font-semibold text-zinc-400 uppercase tracking-widest mb-2">
            {category}
          </span>

          <h1 className="text-2xl md:text-3xl font-bold text-zinc-900 tracking-tight leading-snug">
            {title}
          </h1>

          {/* Star rating display */}
          {rating && (
            <div className="flex items-center gap-2 mt-3">
              <div className="flex items-center gap-1 text-sm font-medium text-zinc-700 bg-zinc-100 px-2.5 py-1 rounded-md">
                <span className="text-amber-500">★</span>
                <span>{rating.rate}</span>
              </div>
              <span className="text-xs text-zinc-400">({rating.count} customer reviews)</span>
            </div>
          )}

          {/* Item price tag */}
          <div className="mt-6 pb-6 border-b border-zinc-200">
            <span className="text-3xl font-bold text-zinc-900 tracking-tight">
              ${price?.toFixed(2)}
            </span>
          </div>

          {/* Detailed description text */}
          <div className="py-6 border-b border-zinc-200">
            <h3 className="text-xs font-semibold text-zinc-400 uppercase tracking-wider mb-2">
              Description
            </h3>
            <p className="text-sm text-zinc-600 leading-relaxed">
              {description}
            </p>
          </div>

          {/* Quantity selector and add to cart action */}
          <div className="py-6 flex flex-col gap-4">
            <div className="flex items-center gap-4">
              <span className="text-xs font-semibold text-zinc-700">Quantity</span>
              <div className="flex items-center border border-zinc-200 rounded-lg bg-zinc-50">
                <button
                  onClick={() => setQuantity((prev) => Math.max(1, prev - 1))}
                  className="px-3 py-1.5 text-zinc-600 hover:text-zinc-900 text-sm font-bold cursor-pointer"
                >
                  -
                </button>
                <span className="px-3 py-1.5 text-xs font-semibold text-zinc-900 min-w-[32px] text-center">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity((prev) => prev + 1)}
                  className="px-3 py-1.5 text-zinc-600 hover:text-zinc-900 text-sm font-bold cursor-pointer"
                >
                  +
                </button>
              </div>
            </div>

            <div className="flex gap-3 mt-2">
              <button
                onClick={handleAddToCart}
                className={`flex-1 px-6 py-3.5 text-xs font-semibold uppercase tracking-wider rounded-xl transition-all shadow-xs cursor-pointer ${
                  added
                    ? "bg-emerald-600 text-white"
                    : "bg-zinc-900 hover:bg-zinc-800 text-white"
                }`}
              >
                {added ? "Added to Cart ✓" : "Add to Cart"}
              </button>
              <button className="px-4 py-3.5 border border-zinc-200 hover:bg-zinc-100 text-zinc-700 text-xs font-semibold rounded-xl transition-colors cursor-pointer">
                ♥
              </button>
            </div>
          </div>

          {/* Policy and shipping perks */}
          <div className="mt-2 grid grid-cols-2 gap-4 p-4 bg-zinc-50 rounded-xl border border-zinc-100 text-xs text-zinc-600 font-medium">
            <div className="flex items-center gap-2">
              <span>🚚</span> Free standard shipping
            </div>
            <div className="flex items-center gap-2">
              <span>🔄</span> 30-day return policy
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;