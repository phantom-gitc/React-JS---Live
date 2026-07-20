import React from 'react'

// Displays a list of cart items and calculated pricing summaries
const Cart = ({ cartItems = [], onRemove, onUpdateQuantity, onNavigateToHome }) => {
  // If the cart is empty, show a clean illustration and button to return to products
  if (cartItems.length === 0) {
    return (
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 text-center">
        <div className="flex flex-col items-center justify-center">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-zinc-150 text-zinc-400 mb-4 animate-bounce">
            <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
            </svg>
          </div>
          <h2 className="text-xl font-bold text-zinc-900">Your cart is empty</h2>
          <p className="mt-2 text-sm text-zinc-500 max-w-xs">
            Looks like you haven't added any products to your shopping cart yet.
          </p>
          <button
            onClick={onNavigateToHome} // Go back to product list screen
            className="mt-6 rounded-xl bg-zinc-900 px-6 py-2.5 text-sm font-semibold text-white transition-all hover:bg-zinc-800 active:scale-95 shadow-sm cursor-pointer"
          >
            Start Shopping
          </button>
        </div>
      </div>
    )
  }

  // Calculate order totals based on the items in the cart
  const subtotal = cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);
  const shipping = 10.00; // Flat shipping rate
  const total = subtotal + shipping; // Final total price

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">Shopping Cart</h1>
          <p className="mt-2 text-sm text-zinc-500">
            Review your selected products before proceeding to checkout.
          </p>
        </div>
        <button
          onClick={onNavigateToHome}
          className="self-start text-sm font-semibold text-zinc-950 hover:underline flex items-center gap-1.5"
        >
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Continue Shopping
        </button>
      </div>

      <div className="grid grid-cols-1 gap-y-10 lg:grid-cols-12 lg:gap-x-12">
        {/* Cart Items List */}
        <div className="lg:col-span-8">
          <div className="divide-y divide-zinc-200 border-t border-b border-zinc-200">
            {cartItems.map((item) => ( // Render each item from the cart
              <div key={item.id} className="flex py-6 sm:py-8">
                {/* Item Image */}
                <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-xl border border-zinc-100 bg-zinc-50 flex items-center justify-center p-3">
                  <img src={item.image} alt={item.title} className="h-full object-contain mix-blend-multiply" />
                </div>

                {/* Item Details */}
                <div className="ml-4 flex flex-1 flex-col justify-between sm:ml-6">
                  <div className="flex justify-between">
                    <div>
                      <h3 className="text-sm font-semibold text-zinc-800 hover:text-zinc-950 line-clamp-1">
                        {item.title}
                      </h3>
                      <p className="mt-1 text-[10px] font-semibold text-zinc-400 uppercase tracking-wider">{item.category}</p>
                    </div>
                    <p className="text-sm font-bold text-zinc-900 ml-4">${(item.price * item.quantity).toFixed(2)}</p>
                  </div>

                  <div className="flex items-center justify-between pt-4">
                    {/* Quantity Selector */}
                    <div className="flex items-center border border-zinc-200 rounded-lg bg-white overflow-hidden shadow-xs">
                      <button 
                        onClick={() => onUpdateQuantity && onUpdateQuantity(item.id, item.quantity - 1)}
                        className="px-2.5 py-1 text-zinc-400 hover:text-zinc-950 transition-colors active:bg-zinc-50"
                      >
                        -
                      </button>
                      <span className="px-2 py-1 text-xs font-bold text-zinc-700 w-6 text-center select-none">{item.quantity}</span>
                      <button 
                        onClick={() => onUpdateQuantity && onUpdateQuantity(item.id, item.quantity + 1)}
                        className="px-2.5 py-1 text-zinc-400 hover:text-zinc-950 transition-colors active:bg-zinc-50"
                      >
                        +
                      </button>
                    </div>

                    {/* Remove Button */}
                    <button 
                      onClick={() => onRemove && onRemove(item.id)}
                      className="text-xs font-semibold text-red-500 hover:text-red-600 transition-colors"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Order Summary */}
        <div className="lg:col-span-4">
          <div className="rounded-2xl border border-zinc-150 bg-white p-6 shadow-xs">
            <h2 className="text-lg font-bold text-zinc-900">Order Summary</h2>

            <div className="mt-6 space-y-4">
              <div className="flex items-center justify-between text-sm text-zinc-500">
                <span>Subtotal</span>
                <span className="font-semibold text-zinc-800">${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex items-center justify-between text-sm text-zinc-500">
                <span>Shipping estimate</span>
                <span className="font-semibold text-zinc-800">${shipping.toFixed(2)}</span>
              </div>
              <div className="border-t border-zinc-100 pt-4 flex items-center justify-between text-base font-bold text-zinc-900">
                <span>Order total</span>
                <span>${total.toFixed(2)}</span>
              </div>
            </div>

            <button className="mt-6 w-full rounded-xl bg-zinc-900 py-3 text-sm font-semibold text-white transition-all hover:bg-zinc-800 active:scale-[0.99] shadow-sm">
              Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart