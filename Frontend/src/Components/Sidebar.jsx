import React, { useState } from 'react'
import img from '../assets/vezzra-removebg-preview.png'
import { Link, NavLink } from 'react-router-dom'
import { 
  CiHome, 
  CiSearch, 
  CiVideoOn, 
  CiChat1, 
  CiUser, 
  CiCoinInsert, 
  CiGrid41, 
  CiSettings, 
  CiLogout,
  CiMenuFries,
} from "react-icons/ci"
import { FaCircleInfo } from "react-icons/fa6";

const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false)
  
  const navItems = [
    { path: '/', icon: CiHome, label: 'Home' },
    { path: '/search', icon: CiSearch, label: 'Search' },
    { path: '/reels', icon: CiVideoOn, label: 'Reels' },
    { path: '/chat', icon: CiChat1, label: 'Messages' },
    { path: '/profile', icon: CiUser, label: 'Profile' },
    { path: '/twt_token', icon: CiCoinInsert, label: 'Twt Token' },
    { path: '/dashboard', icon: CiGrid41, label: 'Dashboard' },
    { path: '/setting', icon: CiSettings, label: 'Setting' },
    { path: '/about-us', icon: FaCircleInfo, label: 'About us' },
  ]

  return (
    <>
      {/* Mobile Overlay */}
      {isCollapsed && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-20 lg:hidden"
          onClick={() => setIsCollapsed(false)}
        />
      )}
      
      {/* Sidebar */}
      <div className={`
        fixed top-0 left-0 z-30 h-screen
        ${isCollapsed ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
        w-64 lg:w-[250px]
        bg-gradient-to-b from-gray-900 to-black shadow-2xl 
        flex flex-col border-r border-gray-800 
        transition-transform duration-300 ease-in-out
        overflow-y-auto hide-scrollbar
      `}>
        {/* Header Section */}
        <div className='flex flex-col'>
          {/* Logo with Mobile Toggle */}
          <div className='p-4 lg:p-6 border-b border-gray-800 flex justify-between items-center'>
            <Link to='/' onClick={() => setIsCollapsed(false)}>
              <img 
                className='h-12 lg:h-16 w-auto object-contain hover:scale-105 transition-transform duration-200' 
                src={img} 
                alt="Logo" 
              />
            </Link>
            {/* Close button for mobile */}
            <button 
              className="lg:hidden text-gray-400 hover:text-white p-2"
              onClick={() => setIsCollapsed(false)}
            >
              ✕
            </button>
          </div>
          
          {/* Navigation Links */}
          <nav className='flex flex-col mt-4 px-3'>
            {navItems.map((item) => {
              const IconComponent = item.icon
              return (
                <NavLink 
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsCollapsed(false)}
                  className={({ isActive }) =>
                    `flex items-center gap-4 p-3 mx-2 mb-2 rounded-xl transition-all duration-200 group ${
                      isActive 
                        ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/25' 
                        : 'text-gray-300 hover:bg-gray-800 hover:text-white hover:shadow-lg'
                    }`
                  }
                >
                  <IconComponent className='w-5 h-5 lg:w-6 lg:h-6 flex-shrink-0' />
                  <p className='text-sm lg:text-base font-medium'>
                    {item.label}
                  </p>
                </NavLink>
              )
            })}
          </nav>
        </div>
        
        {/* Logout Button */}
        <div className='mt-auto p-3 border-t border-gray-800'>
          <button className='flex items-center gap-4 p-3 mx-2 mb-4 rounded-xl text-gray-300 hover:bg-red-600 hover:text-white transition-all duration-200 group w-full'>
            <CiLogout className='w-5 h-5 lg:w-6 lg:h-6 flex-shrink-0' />
            <p className='text-sm lg:text-base font-medium'>
              Logout
            </p>
          </button>
        </div>
      </div>

      {/* Mobile Menu Button */}
      {!isCollapsed && (
        <button 
          className="fixed top-4 left-4 z-40 lg:hidden bg-gray-800 text-white p-3 rounded-lg shadow-lg hover:bg-gray-700 transition-colors"
          onClick={() => setIsCollapsed(true)}
        >
          <CiMenuFries className='w-6 h-6' />
        </button>
      )}
    </>
  )
}

export default Sidebar