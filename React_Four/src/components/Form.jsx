import React, { useRef, useState } from "react";

const Form = () => {

  console.log("App re-rendering");

  const formRef = useRef({});

  const [product, setProduct] = useState({})

  console.log(formRef);

  const handleSubmit = (e) => {
    e.preventDefault();


    let obj = {
      productName: formRef.current.productName.value,
      productPrice: formRef.current.productPrice.value,
      category: formRef.current.category.value,
      imgUrl: formRef.current.imgUrl.value,
    }

    console.log(obj);
    setProduct(obj);


  }

  return (
    <div className="min-h-screen bg-slate-100 flex items-center justify-center p-8">
      <div className="w-full max-w-6xl grid md:grid-cols-2 gap-10">

        {/* Form */}
        <div className="bg-white rounded-2xl shadow-lg border border-slate-200 p-8">
          <h2 className="text-3xl font-bold text-slate-800 mb-2">
            Add Product
          </h2>

          <p className="text-slate-500 mb-8">
            Fill in the details to create a new product.
          </p>

          <form onSubmit={handleSubmit} className="space-y-5">

            <div>
              <label className="block mb-2 text-sm font-semibold text-slate-700">
                Product Name
              </label>

              <input
                ref={(e) => (formRef.current.productName = e)}
                type="text"
                placeholder="Nike Air Max"
                className="w-full border border-slate-300 rounded-xl px-4 py-3 outline-none focus:border-black"
              />
            </div>

            <div>
              <label className="block mb-2 text-sm font-semibold text-slate-700">
                Price
              </label>

              <input
                ref={(e) => (formRef.current.productPrice = e)}
                type="number"
                placeholder="2999"
                className="w-full border border-slate-300 rounded-xl px-4 py-3 outline-none focus:border-black"
              />
            </div>

            <div>
              <label className="block mb-2 text-sm font-semibold text-slate-700">
                Category
              </label>

              <select
                ref={(e) => (formRef.current.category = e)}
                className="w-full border border-slate-300 rounded-xl px-4 py-3 outline-none focus:border-black"
              >
                <option value="MENS">Mens</option>
                <option value="WOMENS">Women</option>
                <option value="KIDS">Kids</option>
              </select>
            </div>

            <div>
              <label className="block mb-2 text-sm font-semibold text-slate-700">
                Image URL
              </label>

              <input
                ref={(e) => (formRef.current.imgUrl = e)}
                type="text"
                placeholder="https://example.com/image.jpg"
                className="w-full border border-slate-300 rounded-xl px-4 py-3 outline-none focus:border-black"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-black text-white py-3 rounded-xl hover:bg-slate-800 transition-all"
            >
              Add Product
            </button>
          </form>
        </div>

        {/* Product Preview */}
        <div className="flex justify-center items-center">
          <div className="bg-white rounded-2xl shadow-lg border border-slate-200 overflow-hidden w-80">

            <div className="h-64 bg-slate-100 flex items-center justify-center overflow-hidden">
              {product.imgUrl ? (
                <img
                  src={product.imgUrl}
                  alt={product.productName}
                  className="w-full h-full object-cover"
                />
              ) : (
                <span className="text-slate-400">
                  No Image Selected
                </span>
              )}
            </div>

            <div className="p-6 space-y-3">

              <span className="inline-block bg-slate-200 text-slate-700 px-3 py-1 rounded-full text-sm">
                {product.category || "Category"}
              </span>

              <h2 className="text-2xl font-bold text-slate-800">
                {product.productName || "Product Name"}
              </h2>

              <p className="text-3xl font-bold text-green-600">
                ₹ {product.productPrice || "0"}
              </p>

              <button className="w-full mt-4 bg-black text-white py-3 rounded-xl">
                View Product
              </button>

            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Form;