import React from 'react'
import Navbar from './components/Navbar'
import AppRoutes from './routes/AppRoutes'

const App = () => {
  return (
    <div className="min-h-screen bg-zinc-50 text-zinc-900 pt-16">
      <Navbar />
      <AppRoutes />
    </div>
  )
}

export default App