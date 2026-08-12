import React from 'react'
import Navbar from '../components/Navbar'
import { Outlet } from 'react-router'

const MainLayout = () => {
  return (
    <div className="flex min-h-screen bg-[#F9FAFB] antialiased">
      {/* Left Sidebar */}
      <Navbar />

      {/* Right Main Content */}
      <main className="flex-1 overflow-y-auto p-8 md:p-10">
        <div className="max-w-6xl mx-auto">
          <Outlet />
        </div>
      </main>
    </div>
  )
}

export default MainLayout