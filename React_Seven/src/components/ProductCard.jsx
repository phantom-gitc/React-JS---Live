import React, { useContext } from 'react';
import { MyStore } from '../context/MyContext';

const ProductCard = ({ product }) => {
    const { addToCart, removeFromCart, cartItems } = useContext(MyStore);
    if (!product) return null;

    const { title, price, description, category, image, rating } = product;
    const rate = rating?.rate || 0;
    const count = rating?.count || 0;
    const isInCart = cartItems?.some(item => item.id === product.id);

    return (
        <div className="group relative flex flex-col w-full bg-transparent transition-all duration-300">

            {/* Product Image Section */}
            <div className="relative aspect-square w-full overflow-hidden bg-[#fbfbfb] dark:bg-zinc-900/30 rounded-xl flex items-center justify-center p-6 transition-all duration-500">
                <img
                    src={image}
                    alt={title}
                    className="max-h-[75%] max-w-[75%] object-contain mix-blend-multiply dark:mix-blend-normal group-hover:scale-[1.01] transition-transform duration-700 ease-out"
                    loading="lazy"
                />
            </div>

            {/* Product Details Section */}
            <div className="pt-4 pb-2 flex flex-col flex-1">

                {/* Category */}
                <span className="text-[9.5px] uppercase tracking-[0.1em] text-zinc-400 dark:text-zinc-500 font-medium block mb-1">
                    {category}
                </span>

                {/* Title and Price Row */}
                <div className="flex items-start justify-between gap-3">
                    <h3 className="text-[13px] font-medium text-zinc-800 dark:text-zinc-200 tracking-tight line-clamp-1 mb-1 group-hover:text-zinc-950 dark:group-hover:text-white transition-colors duration-200">
                        {title}
                    </h3>
                    <span className="text-[13px] font-semibold text-emerald-600 dark:text-emerald-400 shrink-0">
                        ₹{price.toFixed(2)}
                    </span>
                </div>

                {/* Rating and Add/Remove Button Row */}
                <div className="flex items-center justify-between mt-3">
                    {/* Rating */}
                    <div className="flex items-center text-[11px] text-zinc-400 dark:text-zinc-500 font-medium">
                        <svg className="w-[11px] h-[11px] text-amber-500 fill-current mr-1" viewBox="0 0 24 24">
                            <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                        </svg>
                        <span className="text-zinc-700 dark:text-zinc-300 font-medium">{rate.toFixed(1)}</span>
                        <span className="mx-1.5 text-zinc-200 dark:text-zinc-800 font-normal">•</span>
                        <span>{count} reviews</span>
                    </div>

                    {/* Action Button (Add / Remove) */}
                    <button
                        onClick={() => isInCart ? removeFromCart(product.id) : addToCart(product)}
                        className={`flex items-center justify-center w-7 h-7 rounded-full border transition-all duration-200 hover:scale-105 active:scale-95 cursor-pointer ${isInCart
                                ? 'bg-rose-50 border-rose-200 text-rose-600 hover:bg-rose-600 hover:border-rose-600 hover:text-white dark:bg-rose-950/50 dark:border-rose-900/60 dark:text-rose-400 dark:hover:bg-rose-600 dark:hover:text-white'
                                : 'border-zinc-200 dark:border-zinc-800 text-zinc-400 hover:text-zinc-950 hover:border-zinc-350 dark:text-zinc-500 dark:hover:text-white dark:hover:border-zinc-650'
                            }`}
                        aria-label={isInCart ? "Remove from cart" : "Add to cart"}
                        title={isInCart ? "Remove from cart" : "Add to cart"}
                    >
                        {isInCart ? (
                            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        ) : (
                            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                            </svg>
                        )}
                    </button>
                </div>

            </div>

        </div>
    );
};

export default ProductCard;
