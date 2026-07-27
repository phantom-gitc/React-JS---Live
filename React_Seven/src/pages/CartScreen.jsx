import React, { useContext } from 'react';
import { MyStore } from '../context/MyContext';

const CartScreen = () => {
    const { cartItems, setCartItems, setIsCartOpen } = useContext(MyStore);

    // Calculate totals
    const subtotal = cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);
    const shipping = subtotal > 150 ? 0 : 15.00;
    const tax = subtotal * 0.08;
    const total = subtotal + shipping + tax;


    // update quantity 

    const updateQuantity = (id, amount) => {
        setCartItems(prev => prev.map(item => {
            if (item.id === id) {
                const newQty = item.quantity + amount;
                return newQty > 0 ? { ...item, quantity: newQty } : item;
            }
            return item;
        }));
    };

    // remove item from cart 

    const removeItem = (id) => {
        setCartItems(prev => prev.filter(item => item.id !== id));
    };

    return (
        <div className="min-h-screen bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-50 font-sans transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">

                {/* Header */}
                <h1 className="text-[22px] font-semibold tracking-tight uppercase mb-10 border-b border-zinc-100 dark:border-zinc-900 pb-5">
                    Shopping Bag <span className="text-[13px] text-zinc-400 dark:text-zinc-500 font-medium normal-case ml-2">({cartItems.length} items)</span>
                </h1>

                {cartItems.length === 0 ? (
                    /* Empty State */
                    <div className="flex flex-col items-center justify-center py-20 text-center">
                        <svg className="w-10 h-10 text-zinc-300 dark:text-zinc-700 mb-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007z" />
                        </svg>
                        <p className="text-[13px] font-medium text-zinc-500 dark:text-zinc-400 mb-6">Your bag is currently empty.</p>
                        <button onClick={() => setIsCartOpen(false)} className="bg-zinc-950 hover:bg-zinc-800 dark:bg-white dark:hover:bg-zinc-100 text-white dark:text-zinc-950 text-[10px] font-bold tracking-[0.2em] uppercase px-8 py-3.5 rounded-lg transition-colors cursor-pointer">
                            Continue Shopping
                        </button>
                    </div>
                ) : (
                    /* Cart Content Layout */
                    <div className="lg:grid lg:grid-cols-12 lg:gap-x-12 xl:gap-x-16">

                        {/* Cart Items List */}
                        <div className="lg:col-span-7 xl:col-span-8">
                            <div className="divide-y divide-zinc-100 dark:divide-zinc-900">
                                {cartItems.map((item) => (
                                    <div key={item.id} className="flex py-8 first:pt-0 last:pb-0 gap-6">
                                        {/* Image */}
                                        <div className="w-24 h-24 sm:w-28 sm:h-28 shrink-0 bg-[#fbfbfb] dark:bg-zinc-900/30 rounded-xl flex items-center justify-center p-4">
                                            <img src={item.image} alt={item.title} className="max-h-full max-w-full object-contain mix-blend-multiply dark:mix-blend-normal" />
                                        </div>

                                        {/* Details */}
                                        <div className="flex flex-1 flex-col justify-between">
                                            <div className="flex justify-between gap-4">
                                                <div>
                                                    <span className="text-[9.5px] uppercase tracking-[0.1em] text-zinc-450 dark:text-zinc-500 font-medium block mb-1">
                                                        {item.category}
                                                    </span>
                                                    <h2 className="text-[13px] font-medium text-zinc-800 dark:text-zinc-200 line-clamp-1 leading-snug">
                                                        {item.title}
                                                    </h2>
                                                </div>
                                                <span className="text-[13px] font-semibold text-emerald-600 dark:text-emerald-400 shrink-0">
                                                    ₹{(item.price * item.quantity).toFixed(2)}
                                                </span>
                                            </div>

                                            {/* Quantity Selector and Remove Trigger */}
                                            <div className="flex items-center justify-between mt-4">
                                                {/* Selector */}
                                                <div className="flex items-center border border-zinc-200/60 dark:border-zinc-800 rounded-lg h-8 overflow-hidden bg-white dark:bg-transparent">
                                                    <button
                                                        onClick={() => updateQuantity(item.id, -1)}
                                                        className="w-8 h-full flex items-center justify-center hover:bg-zinc-50 dark:hover:bg-zinc-900 text-zinc-400 hover:text-zinc-800 dark:hover:text-zinc-200 transition-colors cursor-pointer"
                                                    >
                                                        -
                                                    </button>
                                                    <span className="w-8 text-center text-[12px] font-medium text-zinc-800 dark:text-zinc-200">
                                                        {item.quantity}
                                                    </span>
                                                    <button
                                                        onClick={() => updateQuantity(item.id, 1)}
                                                        className="w-8 h-full flex items-center justify-center hover:bg-zinc-50 dark:hover:bg-zinc-900 text-zinc-400 hover:text-zinc-800 dark:hover:text-zinc-200 transition-colors cursor-pointer"
                                                    >
                                                        +
                                                    </button>
                                                </div>

                                                {/* Remove Button in Red */}
                                                <button
                                                    onClick={() => removeItem(item.id)}
                                                    className="text-[11px] font-medium text-rose-500 hover:text-rose-600 dark:text-rose-400 dark:hover:text-rose-300 hover:bg-rose-50 dark:hover:bg-rose-950/40 px-2 py-1 rounded-md flex items-center gap-1 transition-colors cursor-pointer"
                                                >
                                                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                                                    </svg>
                                                    <span>Remove</span>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Checkout / Summary Column */}
                        <div className="mt-16 lg:mt-0 lg:col-span-5 xl:col-span-4 bg-[#fbfbfb] dark:bg-zinc-900/10 border border-zinc-100/80 dark:border-zinc-900 rounded-2xl p-6 sm:p-8">
                            <h2 className="text-[14px] font-semibold uppercase tracking-[0.05em] mb-6">Order Summary</h2>

                            <div className="space-y-4 text-[12px] font-medium text-zinc-500 dark:text-zinc-400">
                                <div className="flex justify-between">
                                    <span>Subtotal</span>
                                    <span className="text-emerald-600 dark:text-emerald-400 font-semibold">₹{subtotal.toFixed(2)}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span>Estimated Shipping</span>
                                    <span className="text-zinc-850 dark:text-zinc-200">{shipping === 0 ? "Free" : `₹${shipping.toFixed(2)}`}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span>Estimated Tax (8%)</span>
                                    <span className="text-zinc-850 dark:text-zinc-200">₹{tax.toFixed(2)}</span>
                                </div>

                                <div className="pt-4 border-t border-zinc-100 dark:border-zinc-900/60 flex justify-between text-[14px] font-semibold text-zinc-950 dark:text-white">
                                    <span>Total</span>
                                    <span className="text-emerald-600 dark:text-emerald-400">₹{total.toFixed(2)}</span>
                                </div>
                            </div>

                            {/* Promo input */}
                            <div className="mt-8 pt-6 border-t border-zinc-100 dark:border-zinc-900/60">
                                <label htmlFor="promo" className="text-[10px] uppercase tracking-[0.1em] font-medium text-zinc-450 dark:text-zinc-500 block mb-2">Discount Code</label>
                                <div className="flex gap-2 h-10">
                                    <input
                                        id="promo"
                                        type="text"
                                        placeholder="ENTER CODE"
                                        className="flex-1 border border-zinc-200 dark:border-zinc-800 rounded-lg px-3 text-[11px] font-semibold tracking-wider placeholder:text-zinc-300 dark:placeholder:text-zinc-700 bg-white dark:bg-transparent focus:outline-none focus:border-zinc-450 dark:focus:border-zinc-650 text-zinc-850 dark:text-zinc-200"
                                    />
                                    <button className="border border-zinc-950 hover:bg-zinc-950 hover:text-white dark:border-zinc-800 dark:hover:bg-white dark:hover:text-zinc-950 text-zinc-950 dark:text-white text-[10px] font-semibold tracking-wider uppercase px-4 rounded-lg transition-colors cursor-pointer">
                                        Apply
                                    </button>
                                </div>
                            </div>

                            {/* Checkout CTA */}
                            <button className="w-full bg-zinc-950 hover:bg-zinc-800 dark:bg-white dark:hover:bg-zinc-100 text-white dark:text-zinc-950 text-[10px] font-bold tracking-[0.15em] uppercase py-4 rounded-lg mt-8 transition-colors cursor-pointer shadow-md shadow-zinc-950/5 dark:shadow-none">
                                Proceed to Checkout
                            </button>

                            <p className="text-[10px] text-zinc-400 dark:text-zinc-600 text-center mt-6">
                                Free shipping on orders over ₹1500. Easy returns.
                            </p>
                        </div>

                    </div>
                )}

            </div>
        </div>
    );
};

export default CartScreen;
