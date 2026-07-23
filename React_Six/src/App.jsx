import React, { useContext } from 'react'
import Navbar from './components/Navbar'
import ProductCard from './components/ProductCard'
import Cart from './components/Cart'
import { products } from './data/products'
import { MyShop } from './context/MyWebsite'

const App = () => {
  const { view, setView, cartItems, setCartItems } = useContext(MyShop)
  // Adds a product to the cart or increments its quantity if it already exists
  const addToCart = (product) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === product.id)

      if (existingItem) {
        // Increment quantity of existing item
        return prevItems.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        )
      }

      // Add new item with quantity initialized to 1
      return [...prevItems, { ...product, quantity: 1 }]
    })
  }


  // Removes a product from the cart completely by filtering its id out
  const removeFromCart = (productId) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== productId))
  }


  // Increments or decrements item quantity, and deletes if quantity falls below 1
  const updateQuantity = (productId, newQuantity) => {
    if (newQuantity < 1) {
      removeFromCart(productId) // Remove item if quantity is zero
      return
    }

    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === productId ? { ...item, quantity: newQuantity } : item
      )
    )
  }


  // Calculates the sum of all item quantities in the cart
  const totalCartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0)

  return (
    <div className="min-h-screen bg-zinc-50/50 text-zinc-900 font-sans antialiased">
      {/* Navigation */}
      <Navbar onViewChange={setView} currentView={view} cartCount={totalCartCount} />

      {/* Main Content */}
      {view === 'home' ? (
        <main className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          {/* Hero / Header Section */}
          <div className="mb-10 text-center sm:text-left">
            <h1 className="text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">
              Featured Products
            </h1>
            <p className="mt-2 text-sm text-zinc-500">
              Explore our curated selection of high-quality items designed for minimalist lifestyles.
            </p>
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} onAddToCart={addToCart} />
            ))}
          </div>
        </main>
      ) : (
        <Cart
          cartItems={cartItems}
          onRemove={removeFromCart}
          onUpdateQuantity={updateQuantity}
          onNavigateToHome={() => setView('home')}
        />
      )}
    </div>
  )
}

export default App