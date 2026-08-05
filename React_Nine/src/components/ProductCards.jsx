import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router'
import { MyStore } from '../context/MyContext'

// Reusable card component for rendering single product item
const ProductCards = ({ product }) => {
  // Access global cart addition method from store
  const { addToCart } = useContext(MyStore);
  
  // Local state for button feedback indicator
  const [added, setAdded] = useState(false);
  const navigate = useNavigate();

  // Guard against undefined product prop
  if (!product) return null;

  const { id, title, price, category, image, rating } = product;

  // Handle adding product to cart without triggering card click navigation
  const handleAddToCart = (e) => {
    e.stopPropagation();
    addToCart(product, 1);
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  return (
    <div 
      onClick={() => navigate(`/details/${id}`)} 
      className="group bg-white border border-zinc-200 rounded-2xl overflow-hidden shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between cursor-pointer"
    >
      <div>
        {/* Product image container with category badge */}
        <div className="w-full h-56 bg-zinc-50 p-6 flex items-center justify-center overflow-hidden relative">
          <img
            src={image}
            alt={title}
            className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-300"
          />
          {category && (
            <span className="absolute top-3 left-3 bg-zinc-900 text-zinc-100 text-[10px] uppercase tracking-wider font-semibold px-2.5 py-0.5 rounded-full">
              {category}
            </span>
          )}
        </div>

        {/* Title and rating score */}
        <div className="p-4">
          <div className="flex items-center justify-between gap-2 mb-1">
            {rating && (
              <div className="flex items-center gap-1 text-xs text-zinc-500 font-medium">
                <span className="text-amber-500">★</span>
                <span>{rating.rate}</span>
                <span className="text-zinc-400">({rating.count})</span>
              </div>
            )}
          </div>

          <h3 className="text-sm font-semibold text-zinc-800 line-clamp-2 leading-snug group-hover:text-zinc-900">
            {title}
          </h3>
        </div>
      </div>

      {/* Pricing and quick add button */}
      <div className="p-4 pt-0 flex items-center justify-between mt-auto">
        <span className="text-base font-bold text-zinc-900">
          ${price?.toFixed(2)}
        </span>
        <button 
          onClick={handleAddToCart}
          className={`px-3 py-1.5 text-xs font-semibold rounded-xl transition-all cursor-pointer ${
            added 
              ? "bg-emerald-600 text-white" 
              : "bg-zinc-900 hover:bg-zinc-800 text-white shadow-xs"
          }`}
        >
          {added ? "Added ✓" : "Add to Cart"}
        </button>
      </div>
    </div>
  );
};

export default ProductCards;