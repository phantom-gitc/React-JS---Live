import React from "react";
import { ShoppingCart, Trash2 } from "lucide-react";

const ProductCard = ({ product, onDelete }) => {
  return (
    <div className="w-100 bg-white border border-slate-200 rounded-sm shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden">
      {/* Product Image */}
      <div className="h-64 bg-slate-50 flex items-center justify-center p-6">
        <img
          src={product.image}
          alt={product.title}
          loading="lazy"
          className="w-full h-full object-contain hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Product Details */}
      <div className="p-5">
        {/* Category */}
        <span className="inline-block bg-slate-100 text-slate-600 text-xs font-medium px-3 py-1">
          {product.category}
        </span>

        {/* Title */}
        <h2 className="mt-3 text-lg font-semibold text-slate-800 leading-6">
          {product.title.length > 40
            ? product.title.slice(0, 40) + "..."
            : product.title}
        </h2>

        {/* Description */}
        <p className="mt-2 h-16 text-sm text-slate-500 overflow-hidden">
          {product.description.length > 90
            ? product.description.slice(0, 90) + "..."
            : product.description}
        </p>

        {/* Price & Rating */}
        <div className="flex items-center justify-between mt-5">
          <span className="text-2xl font-bold text-slate-900">
            ₹{Number(product.price).toFixed(2)}
          </span>

          <div className="flex items-center gap-1 bg-yellow-100 px-2 py-1 text-sm">
            ⭐ {product.rating?.rate ?? "N/A"}
          </div>
        </div>

        {/* Buttons */}
        <div className="flex gap-3 mt-6">
          <button
            onClick={() => console.log("Add to Cart", product)}
            className="flex-1 flex items-center justify-center gap-2 bg-slate-900 text-white py-2.5 hover:bg-slate-800 transition cursor-pointer"
          >
            <ShoppingCart size={18} />
            Add to Cart
          </button>

          <button
            onClick={() => onDelete(product.id)}
            className="px-4 border border-red-300 text-red-500 hover:bg-red-500 hover:text-white transition cursor-pointer"
          >
            <Trash2 size={18} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;