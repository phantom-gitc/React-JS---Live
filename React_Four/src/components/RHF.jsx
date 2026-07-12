import React, { useState } from "react";
import { useForm } from "react-hook-form";

const RHF = () => {
  const [product, setProduct] = useState(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    setProduct(data);
    reset();
  };

  return (
    <div className="min-h-screen bg-slate-100 flex items-center justify-center p-8">
      <div className="w-full max-w-7xl grid lg:grid-cols-2 gap-10">

        {/* ================= FORM ================= */}

        <div className="bg-white rounded-3xl shadow-xl border border-slate-200 p-8">

          <h1 className="text-3xl font-bold text-slate-800">
            Add Product
          </h1>

          <p className="text-slate-500 mt-2 mb-8">
            Fill in the product details below.
          </p>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">

            {/* Product Name */}

            <div>
              <label className="block mb-2 font-semibold text-slate-700">
                Product Name
              </label>

              <input
                type="text"
                placeholder="Nike Air Max"
                {...register("productName", {
                  required: "Product Name is required",
                })}
                className={`w-full rounded-xl border px-4 py-3 outline-none transition ${
                  errors.productName
                    ? "border-red-500"
                    : "border-slate-300 focus:border-black"
                }`}
              />

              {errors.productName && (
                <p className="text-red-500 text-sm mt-2">
                  {errors.productName.message}
                </p>
              )}
            </div>

            {/* Price */}

            <div>
              <label className="block mb-2 font-semibold text-slate-700">
                Price
              </label>

              <input
                type="number"
                placeholder="2999"
                {...register("productPrice", {
                  required: "Price is required",
                })}
                className={`w-full rounded-xl border px-4 py-3 outline-none transition ${
                  errors.productPrice
                    ? "border-red-500"
                    : "border-slate-300 focus:border-black"
                }`}
              />

              {errors.productPrice && (
                <p className="text-red-500 text-sm mt-2">
                  {errors.productPrice.message}
                </p>
              )}
            </div>

            {/* Category */}

            <div>
              <label className="block mb-2 font-semibold text-slate-700">
                Category
              </label>

              <input
                type="text"
                placeholder="Men"
                {...register("productCategory", {
                  required: "Category is required",
                })}
                className={`w-full rounded-xl border px-4 py-3 outline-none transition ${
                  errors.productCategory
                    ? "border-red-500"
                    : "border-slate-300 focus:border-black"
                }`}
              />

              {errors.productCategory && (
                <p className="text-red-500 text-sm mt-2">
                  {errors.productCategory.message}
                </p>
              )}
            </div>

            {/* Image URL */}

            <div>
              <label className="block mb-2 font-semibold text-slate-700">
                Image URL
              </label>

              <input
                type="text"
                placeholder="https://example.com/image.jpg"
                {...register("productImage", {
                  required: "Image URL is required",
                })}
                className={`w-full rounded-xl border px-4 py-3 outline-none transition ${
                  errors.productImage
                    ? "border-red-500"
                    : "border-slate-300 focus:border-black"
                }`}
              />

              {errors.productImage && (
                <p className="text-red-500 text-sm mt-2">
                  {errors.productImage.message}
                </p>
              )}
            </div>

            <button
              type="submit"
              className="w-full bg-black text-white py-3 rounded-xl hover:bg-slate-800 transition"
            >
              Add Product
            </button>
{/* 
            <button
              onClick={reset}
              className="w-full bg-black text-white py-3 rounded-xl hover:bg-slate-800 transition"
            >
              Reset
            </button> */}

          </form>

        </div>

        {/* ================= PRODUCT PREVIEW ================= */}

        <div className="flex justify-center items-center">

          {product ? (
            <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-200 w-96">

              <div className="h-72 bg-slate-100">

                <img
                  src={product.productImage}
                  alt={product.productName}
                  className="w-full h-full object-cover"
                />

              </div>

              <div className="p-6">

                <span className="inline-block bg-black text-white text-xs px-3 py-1 rounded-full">
                  {product.productCategory}
                </span>

                <h2 className="text-3xl font-bold text-slate-800 mt-4">
                  {product.productName}
                </h2>

                <p className="text-4xl font-bold text-green-600 mt-4">
                  ₹ {product.productPrice}
                </p>

                <button className="mt-8 w-full bg-black text-white py-3 rounded-xl hover:bg-slate-800 transition">
                  View Product
                </button>

              </div>

            </div>
          ) : (
            <div className="bg-white border border-dashed border-slate-300 rounded-3xl shadow-xl w-96 h-[560px] flex flex-col items-center justify-center">

              <div className="text-7xl">📦</div>

              <h2 className="text-2xl font-bold text-slate-700 mt-6">
                Product Preview
              </h2>

              <p className="text-slate-500 text-center mt-3 px-8">
                Your product details will appear here after submitting the form.
              </p>

            </div>
          )}

        </div>

      </div>
    </div>
  );
};

export default RHF;