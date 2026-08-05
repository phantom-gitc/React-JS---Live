import React, { useContext, useState } from "react";
import { MyStore } from "../context/MyContext";
import ProductCards from "../components/ProductCards";

// Product catalog page with search and filtering
const Product = () => {
  // Extract products and loading state from context store
  const { productData, loading } = useContext(MyStore);
  
  // Local state for filtering by category and searching by title
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  // Extract unique category names from product list
  const categories = [
    "all",
    ...new Set(productData.map((p) => p.category).filter(Boolean)),
  ];

  // Filter products based on active category and user search text
  const filteredProducts = productData.filter((product) => {
    const matchesCategory =
      selectedCategory === "all" || product.category === selectedCategory;
    const matchesSearch = product.title
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-8">
      {/* Header section with search bar */}
      <div className="mb-8 text-center md:text-left flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <span className="text-xs font-semibold text-emerald-600 uppercase tracking-wider">
            Protected Catalog Access
          </span>
          <h2 className="text-2xl font-bold tracking-tight text-zinc-900 mt-0.5">
            Full Product Catalog
          </h2>
          <p className="text-sm text-zinc-500 mt-1">
            Browse and filter through all available store inventory.
          </p>
        </div>

        {/* Input for searching products */}
        <div className="w-full md:w-72">
          <input
            type="text"
            placeholder="Search products..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full px-3.5 py-2 bg-white border border-zinc-200 rounded-xl text-xs text-zinc-900 focus:outline-none focus:border-zinc-900 transition-colors"
          />
        </div>
      </div>

      {/* Buttons for category filtering */}
      <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-6 no-scrollbar">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-3.5 py-1.5 rounded-full text-xs font-medium capitalize transition-colors cursor-pointer whitespace-nowrap ${
              selectedCategory === cat
                ? "bg-zinc-900 text-white"
                : "bg-zinc-100 text-zinc-600 hover:bg-zinc-200"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Render product card grid or empty state */}
      {loading && productData.length === 0 ? (
        <div className="flex items-center justify-center min-h-[300px]">
          <div className="text-zinc-500 text-sm font-medium animate-pulse">
            Loading catalog...
          </div>
        </div>
      ) : filteredProducts.length === 0 ? (
        <div className="text-center py-16 bg-white border border-zinc-200 rounded-2xl">
          <p className="text-sm text-zinc-500">No products match your criteria.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <ProductCards key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Product;