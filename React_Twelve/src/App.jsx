import React, { useEffect, useRef, useState } from "react";
import axios from "axios";

const App = () => {
  const [productData, setProductData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [searchData, setSearchData] = useState("");

  // Used for throttling
  const lastCall = useRef(0);

  // Get products from API
  const getProduct = async () => {
    try {
      const res = await axios.get("https://fakestoreapi.com/products");

      setProductData(res.data);
      setFilteredData(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  // Filter products
  const filterData = () => {
    console.log("Searching Data...");

    const result = productData.filter((val) => {
      return val.title.toLowerCase().includes(searchData.toLowerCase());
    });

    setFilteredData(result);
  };

  // DEBOUNCING

  useEffect(() => {
    if (!searchData) return;

    const timer = setTimeout(() => {
      console.log("Debounce called");
      filterData();
    }, 700);

    // Clear previous timer
    return () => clearTimeout(timer);
  }, [searchData]);

  // THROTTLING  

  useEffect(() => {
    if (!searchData) return;

    const now = Date.now();

    if (now - lastCall.current >= 700) {
      console.log("Throttle called");

      lastCall.current = now;

      filterData();
    }

    
  }, [searchData]);

  // Fetch products when component mounts
  useEffect(() => {
    getProduct();
  }, []);

  return (
    <div className="min-h-screen bg-[#f7f6f2] text-zinc-900">

      <div className="mx-auto max-w-7xl px-6 py-10 sm:px-10 lg:px-14">

        {/* Header */}
        <nav className="mb-20 flex items-center justify-between">
          <div className="text-lg font-bold tracking-tight">
            <span className="text-violet-600">N</span>OVA
          </div>

          <div className="hidden items-center gap-8 text-xs font-medium text-zinc-500 sm:flex">
            <span className="text-zinc-900">Collection</span>

            <span className="transition hover:text-violet-600">
              New Arrivals
            </span>

            <span className="transition hover:text-pink-600">
              About
            </span>
          </div>

          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-zinc-900 text-xs font-medium text-white">
            {filteredData.length}
          </div>
        </nav>

        {/* Hero */}
        <section className="mb-16 grid gap-10 lg:grid-cols-[1.5fr_1fr] lg:items-end">

          <div>
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.3em] text-violet-600">
              Curated Collection
            </p>

            <h1
              className="max-w-3xl text-5xl leading-[1.05] tracking-tight sm:text-7xl"
              style={{ fontFamily: "Playfair Display" }}
            >
              Discover things
              <br />
              <span className="text-violet-600">
                worth having.
              </span>
            </h1>
          </div>

          <div className="lg:pb-2">
            <p className="max-w-sm text-sm leading-7 text-zinc-500">
              A carefully selected collection of products designed
              to bring character, simplicity and style into everyday life.
            </p>
          </div>

        </section>

        {/* Search */}
        <div className="mb-14 flex items-center border-y border-zinc-200 py-5">

          <div className="flex w-full items-center gap-4">

            <svg
              className="h-5 w-5 text-violet-500"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m21 21-4.5-4.5m2-5.5a7.5 7.5 0 1 1-15 0 7.5 7.5 0 0 1 15 0Z"
              />
            </svg>

            <input
              className="w-full bg-transparent text-sm font-medium outline-none placeholder:text-zinc-400"
              type="text"
              placeholder="Search the collection..."
              value={searchData}
              onChange={(e) => setSearchData(e.target.value)}
            />

            {searchData && (
              <button
                onClick={() => setSearchData("")}
                className="text-xs font-medium text-pink-500 transition hover:text-pink-700"
              >
                Clear
              </button>
            )}

          </div>

          <div className="hidden whitespace-nowrap text-xs text-zinc-400 sm:block">
            {filteredData.length} products
          </div>

        </div>

        {/* Products */}
        {filteredData.length > 0 ? (

          <div className="grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">

            {filteredData.map((val, index) => {

              const accentColors = [
                "text-violet-600",
                "text-rose-500",
                "text-emerald-600",
                "text-orange-500",
                "text-blue-600",
                "text-fuchsia-600",
              ];

              const accent =
                accentColors[index % accentColors.length];

              return (
                <article
                  key={val.id}
                  className="group"
                >

                  {/* Product Image */}
                  <div className="relative flex h-[380px] items-center justify-center overflow-hidden rounded-[28px] bg-white p-12 transition duration-500 group-hover:rounded-[36px]">

                    <span className="absolute left-5 top-5 text-xs font-semibold text-zinc-300">
                      0{index + 1}
                    </span>

                    <img
                      src={val.image}
                      alt={val.title}
                      className="h-full w-full object-contain transition duration-700 ease-out group-hover:scale-110"
                    />

                    <button
                      className="absolute bottom-5 right-5 flex h-11 w-11 translate-y-3 items-center justify-center rounded-full bg-zinc-900 text-white opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100"
                    >
                      →
                    </button>

                  </div>

                  {/* Product Details */}
                  <div className="mt-5">

                    <div className="mb-2 flex items-center justify-between">

                      <span
                        className={`text-[10px] font-bold uppercase tracking-[0.2em] ${accent}`}
                      >
                        {val.category}
                      </span>

                      <span className="text-sm font-semibold text-zinc-900">
                        ${val.price}
                      </span>

                    </div>

                    <h2 className="line-clamp-2 text-[15px] font-semibold leading-6 text-zinc-800 transition group-hover:text-violet-600">
                      {val.title}
                    </h2>

                    {/* Rating */}
                    <div className="mt-4 flex items-center gap-2">

                      <div className="flex gap-1">

                        {[1, 2, 3, 4, 5].map((star) => (

                          <span
                            key={star}
                            className={
                              star <= Math.round(val.rating?.rate || 0)
                                ? "text-amber-400"
                                : "text-zinc-200"
                            }
                          >
                            ★
                          </span>

                        ))}

                      </div>

                      <span className="text-xs text-zinc-400">
                        {val.rating?.rate || 0}
                      </span>

                    </div>

                  </div>

                </article>
              );
            })}

          </div>

        ) : (

          /* Empty State */
          <div className="flex min-h-[350px] items-center justify-center">

            <div className="text-center">

              <div className="mb-5 text-5xl text-violet-200">
                ∅
              </div>

              <h2
                className="text-3xl"
                style={{ fontFamily: "Playfair Display" }}
              >
                Nothing found.
              </h2>

              <p className="mt-2 text-sm text-zinc-400">
                Try searching for something else.
              </p>

              <button
                onClick={() => setSearchData("")}
                className="mt-6 rounded-full bg-zinc-900 px-6 py-3 text-xs font-semibold text-white transition hover:bg-violet-600"
              >
                View everything
              </button>

            </div>

          </div>

        )}

        {/* Footer */}
        <footer className="mt-24 border-t border-zinc-200 py-8">

          <div className="flex flex-col gap-3 text-xs text-zinc-400 sm:flex-row sm:items-center sm:justify-between">

            <span>© 2026 NOVA</span>

            <span>Designed with intention.</span>

          </div>

        </footer>

      </div>

    </div>
  );
};

export default App;