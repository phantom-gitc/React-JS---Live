import axios from 'axios';
import React, { useEffect, useState, useContext } from 'react'
import Navbar from './components/Navbar';
import ProductCard from './components/ProductCard';
import CartScreen from './pages/CartScreen';
import { MyStore } from './context/MyContext';

const App = () => {
  const [products, setProducts] = useState([]);
  
  // Consume Context value
  const { isCartOpen } = useContext(MyStore);
  // Fetch product data from API
  const getProductdata = async () => {
    try {
      let response = await axios.get('https://fakestoreapi.com/products');
      setProducts(response.data);
    } catch (error) {
      console.log("Error in Api :", error);
    }
  };

  useEffect(() => {
    getProductdata();
  }, []);

  return (
    <div className="min-h-screen bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-50 transition-colors duration-300 font-sans">
      <Navbar />
      
      {isCartOpen ? (
        <CartScreen />
      ) : (
        <main className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
          {/* Page Header */}
          <div className="text-center max-w-xl mx-auto mb-20">
            <span className="text-[9px] font-semibold uppercase tracking-[0.25em] text-zinc-400 dark:text-zinc-500 bg-zinc-50 dark:bg-zinc-900 px-4 py-1.5 rounded-full border border-zinc-100 dark:border-zinc-800">
              Summer Collection
            </span>
            <h1 className="mt-6 text-[28px] font-semibold tracking-[0.05em] text-zinc-950 dark:text-white sm:text-[34px] uppercase">
              Featured Products
            </h1>
            <p className="mt-4 text-[12px] leading-relaxed text-zinc-400 dark:text-zinc-500 max-w-sm mx-auto">
              A curated selection of modern essentials designed for utility and everyday longevity.
            </p>
          </div>

          {/* Product Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-10">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </main>
      )}
    </div>
  )
}

export default App
