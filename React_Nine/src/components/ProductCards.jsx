import React from 'react'
import { useNavigate } from 'react-router'

const ProductCards = ({ product }) => {
  if (!product) return null

  let navigate = useNavigate();

  const { title, price, category, image, rating } = product

  return (
    <div className="group bg-white border border-zinc-200 rounded-xl overflow-hidden shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between">
      <div>
        {/* Product Image */}
        <div onClick={()=>navigate(`/details/${product.id}`)} className="w-full h-56 bg-zinc-50 p-6 flex items-center justify-center overflow-hidden relative cursor-pointer">
          <img
            src={image}
            alt={title}
            className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-300"
          />
          {category && (
            <span className="absolute top-3 left-3 bg-zinc-900 text-zinc-100 text-[10px] uppercase tracking-wider font-medium px-2 py-0.5 rounded-full">
              {category}
            </span>
          )}
        </div>

        {/* Details */}
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

          <h3 className="text-sm font-medium text-zinc-800 line-clamp-2 leading-snug group-hover:text-zinc-900">
            {title}
          </h3>
        </div>
      </div>

      {/* Price & Action */}
      <div className="p-4 pt-0 flex items-center justify-between mt-auto">
        <span className="text-base font-semibold text-zinc-900">
          ${price?.toFixed(2)}
        </span>
        <button className="px-3 py-1.5 bg-zinc-900 hover:bg-zinc-800 text-white text-xs font-medium rounded-lg transition-colors cursor-pointer">
          Add to Cart
        </button>
      </div>
    </div>
  )
}

export default ProductCards