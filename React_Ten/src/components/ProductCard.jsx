import React, { useState } from "react";
import { toast } from "react-toastify";

const ProductCard = ({ product }) => {
  const [showFullDesc, setShowFullDesc] = useState(false);

  if (!product) return null;

  const { id, title, price, description, category, image, rating } = product;

  const handleAddToCart = () => {
    toast.success(`"${title.slice(0, 20)}..." added to cart!`, {
      autoClose: 2000,
    });
  };

  return (
    <div className="bg-white rounded-2xl border border-slate-100 p-5 shadow-sm hover:shadow-md hover:border-indigo-100 transition-all duration-300 flex flex-col justify-between group">
      <div>
        {/* Product Image Frame */}
        <div className="relative w-full h-52 bg-slate-50/60 rounded-xl p-4 flex items-center justify-center overflow-hidden mb-4 border border-slate-100">
          <img
            src={image}
            alt={title}
            className="max-h-full max-w-full object-contain mix-blend-multiply group-hover:scale-105 transition-transform duration-300"
          />
          {/* Category Pill Tag */}
          <span className="absolute top-2.5 left-2.5 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-indigo-700 bg-indigo-50/90 backdrop-blur-sm rounded-lg border border-indigo-100">
            {category}
          </span>
          {/* Product ID Pill */}
          <span className="absolute top-2.5 right-2.5 px-2 py-0.5 text-[10px] font-bold text-slate-500 bg-white/90 backdrop-blur-sm rounded-md border border-slate-200 shadow-2xs">
            #{id}
          </span>
        </div>

        {/* Rating Row */}
        {rating && (
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-1 text-amber-500 font-bold text-xs">
              <span>★</span>
              <span>{rating.rate?.toFixed(1)}</span>
              <span className="text-slate-400 font-normal text-[11px]">
                ({rating.count} reviews)
              </span>
            </div>
            {/* Stars visualization */}
            <div className="flex items-center text-amber-400 text-xs">
              {[1, 2, 3, 4, 5].map((star) => (
                <span
                  key={star}
                  className={
                    star <= Math.round(rating.rate || 0)
                      ? "text-amber-400"
                      : "text-slate-200"
                  }
                >
                  ★
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Title */}
        <h3
          className="font-bold text-slate-900 text-sm leading-snug mb-2 group-hover:text-indigo-600 transition-colors line-clamp-2"
          title={title}
        >
          {title}
        </h3>

        {/* Description */}
        <p className="text-xs text-slate-500 leading-relaxed mb-4">
          {showFullDesc ? description : `${description?.slice(0, 90)}... `}
          {description?.length > 90 && (
            <button
              onClick={() => setShowFullDesc(!showFullDesc)}
              className="text-indigo-600 hover:underline font-semibold ml-1 cursor-pointer"
            >
              {showFullDesc ? "Show less" : "Read more"}
            </button>
          )}
        </p>
      </div>

      {/* Footer: Price & Add to Cart Action */}
      <div className="pt-3 border-t border-slate-100 flex items-center justify-between gap-2 mt-auto">
        <div>
          <span className="text-[10px] text-slate-400 font-medium uppercase block">
            Price
          </span>
          <span className="text-lg font-extrabold text-slate-900">
            ${price?.toFixed(2)}
          </span>
        </div>
        <button
          onClick={handleAddToCart}
          className="px-3.5 py-2 bg-slate-900 hover:bg-indigo-600 text-white rounded-xl text-xs font-semibold flex items-center gap-1.5 transition-all shadow-sm cursor-pointer active:scale-95"
        >
          <svg
            className="w-3.5 h-3.5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
            />
          </svg>
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
