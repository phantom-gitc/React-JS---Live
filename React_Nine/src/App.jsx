import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import AppRoutes from './routes/AppRoutes'

const App = () => {
  return (
    <div className="min-h-screen bg-zinc-50 text-zinc-900 pt-16 flex flex-col justify-between">
      <Navbar />
      <main className="flex-grow">
        <AppRoutes />
      </main>
      <Footer />
    </div>
  )
}

export default App