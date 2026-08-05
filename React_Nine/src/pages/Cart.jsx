import React, { useContext } from "react";
import { useNavigate } from "react-router";
import { MyStore } from "../context/MyContext";

const Cart = () => {
  const { cart, removeFromCart, updateQuantity, clearCart, cartTotal } = useContext(MyStore);
  const navigate = useNavigate();

  const tax = cartTotal * 0.08;
  const shipping = cartTotal > 0 ? 15.0 : 0.0;
  const finalTotal = cartTotal + tax + shipping;

  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-8 md:py-12">
      <div className="mb-8">
        <h1 className="text-2xl md:text-3xl font-bold text-zinc-900 tracking-tight">
          Your Shopping Cart
        </h1>
        <p className="text-sm text-zinc-500 mt-1">
          Review your items before proceeding to checkout.
        </p>
      </div>

      {cart.length === 0 ? (
        <div className="bg-white border border-zinc-200 rounded-2xl p-12 text-center max-w-lg mx-auto shadow-xs">
          <div className="w-16 h-16 bg-zinc-100 rounded-full flex items-center justify-center text-2xl mx-auto mb-4">
            🛒
          </div>
          <h3 className="text-lg font-semibold text-zinc-900">Your cart is empty</h3>
          <p className="text-sm text-zinc-500 mt-1 mb-6">
            Looks like you haven't added any products to your cart yet.
          </p>
          <button
            onClick={() => navigate("/product")}
            className="px-5 py-2.5 bg-zinc-900 hover:bg-zinc-800 text-white text-xs font-semibold uppercase tracking-wider rounded-xl transition-colors cursor-pointer"
          >
            Explore Catalog
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items List */}
          <div className="lg:col-span-2 space-y-4">
            {cart.map(({ product, quantity }) => (
              <div
                key={product.id}
                className="bg-white border border-zinc-200 rounded-2xl p-4 sm:p-6 flex flex-col sm:flex-row items-center gap-4 sm:gap-6 shadow-xs"
              >
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-20 h-20 object-contain p-2 bg-zinc-50 rounded-xl"
                />

                <div className="flex-1 text-center sm:text-left">
                  <span className="text-[10px] uppercase font-semibold text-zinc-400 tracking-wider">
                    {product.category}
                  </span>
                  <h4 className="text-sm font-semibold text-zinc-900 line-clamp-1">
                    {product.title}
                  </h4>
                  <p className="text-xs text-zinc-500 mt-1 font-medium">
                    ${product.price.toFixed(2)} each
                  </p>
                </div>

                {/* Quantity Controls */}
                <div className="flex items-center border border-zinc-200 rounded-lg bg-zinc-50">
                  <button
                    onClick={() => updateQuantity(product.id, -1)}
                    className="px-2.5 py-1 text-zinc-600 hover:text-zinc-900 text-xs font-bold cursor-pointer"
                  >
                    -
                  </button>
                  <span className="px-3 py-1 text-xs font-semibold text-zinc-900">
                    {quantity}
                  </span>
                  <button
                    onClick={() => updateQuantity(product.id, 1)}
                    className="px-2.5 py-1 text-zinc-600 hover:text-zinc-900 text-xs font-bold cursor-pointer"
                  >
                    +
                  </button>
                </div>

                {/* Subtotal & Delete */}
                <div className="flex sm:flex-col items-center sm:items-end justify-between w-full sm:w-auto gap-2">
                  <span className="text-sm font-bold text-zinc-900">
                    ${(product.price * quantity).toFixed(2)}
                  </span>
                  <button
                    onClick={() => removeFromCart(product.id)}
                    className="text-xs text-red-500 hover:text-red-700 font-medium cursor-pointer"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}

            <div className="flex justify-between items-center pt-2">
              <button
                onClick={clearCart}
                className="text-xs text-zinc-500 hover:text-zinc-900 font-medium cursor-pointer"
              >
                Clear Entire Cart
              </button>
              <button
                onClick={() => navigate("/product")}
                className="text-xs text-zinc-900 font-semibold hover:underline cursor-pointer"
              >
                ← Continue Shopping
              </button>
            </div>
          </div>

          {/* Order Summary */}
          <div className="bg-white border border-zinc-200 rounded-2xl p-6 h-fit shadow-xs">
            <h3 className="text-base font-bold text-zinc-900 pb-4 border-b border-zinc-100">
              Order Summary
            </h3>

            <div className="py-4 space-y-3 border-b border-zinc-100 text-xs text-zinc-600 font-medium">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span className="text-zinc-900 font-semibold">${cartTotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span>Estimated Tax (8%)</span>
                <span className="text-zinc-900 font-semibold">${tax.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span>Flat Shipping</span>
                <span className="text-zinc-900 font-semibold">${shipping.toFixed(2)}</span>
              </div>
            </div>

            <div className="py-4 flex justify-between items-center text-sm font-bold text-zinc-900">
              <span>Total</span>
              <span className="text-lg text-zinc-900">${finalTotal.toFixed(2)}</span>
            </div>

            <button
              onClick={() => alert("Checkout order placed successfully!")}
              className="w-full py-3.5 bg-zinc-900 hover:bg-zinc-800 text-white text-xs font-semibold uppercase tracking-wider rounded-xl transition-colors shadow-xs cursor-pointer"
            >
              Checkout Now
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
