import React from 'react'

const ProductCard = ({ product, onAddToCart }) => {
  if (!product) return null;

  return (
    <div className="group relative flex flex-col overflow-hidden rounded-2xl border border-zinc-100 bg-white p-4 transition-all duration-300 hover:shadow-xl hover:shadow-zinc-100/50">
      {/* Product Image Container */}
      <div className="relative aspect-square w-full overflow-hidden rounded-xl bg-zinc-50 flex items-center justify-center p-6">
        <img
          src={product.image}
          alt={product.title}
          className="h-full max-h-[160px] object-contain transition-transform duration-500 group-hover:scale-105"
        />
        {/* Category Badge */}
        <span className="absolute top-3 left-3 rounded-full bg-white/90 backdrop-blur-xs px-2.5 py-1 text-[10px] font-semibold tracking-wide text-zinc-500 uppercase shadow-sm border border-zinc-100/50">
          {product.category}
        </span>
      </div>

      {/* Product Details */}
      <div className="mt-4 flex flex-1 flex-col">
        {/* Title */}
        <h3 className="line-clamp-2 text-sm font-semibold leading-snug text-zinc-800 transition-colors group-hover:text-zinc-950 min-h-[40px]">
          {product.title}
        </h3>

        {/* Rating */}
        <div className="mt-2 flex items-center gap-1 text-xs text-zinc-500">
          <div className="flex items-center text-amber-400">
            <svg className="h-3.5 w-3.5 fill-current" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          </div>
          <span className="font-semibold text-zinc-700">{product.rating?.rate || '0.0'}</span>
          <span className="text-zinc-400">({product.rating?.count || 0})</span>
        </div>

        {/* Price & Action */}
        <div className="mt-auto pt-4 flex items-center justify-between border-t border-zinc-50">
          <div className="flex flex-col">
            <span className="text-[10px] text-zinc-400 font-medium uppercase tracking-wider">Price</span>
            <span className="text-base font-bold text-zinc-900">${product.price.toFixed(2)}</span>
          </div>
          <button 
            onClick={() => onAddToCart && onAddToCart(product)} // Add product to cart when button is clicked
            className="flex h-9 w-9 items-center justify-center rounded-xl bg-zinc-900 text-white transition-all hover:bg-zinc-800 hover:scale-105 active:scale-95 shadow-sm cursor-pointer"
          >
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProductCard