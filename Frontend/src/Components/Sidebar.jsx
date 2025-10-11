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
  
  // Replace this with actual user profile image
  const userProfileImage = 'https://via.placeholder.com/40x40'
  
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

  // Main items for bottom nav (mobile)
  const bottomNavItems = [
    { path: '/', icon: CiHome, label: 'Home' },
    { path: '/reels', icon: CiVideoOn, label: 'Reels' },
    { path: '/chat', icon: CiChat1, label: 'Messages' },
    { path: '/twt_token', icon: CiCoinInsert, label: 'Token' },
    { path: '/dashboard', icon: CiGrid41, label: 'Dashboard' },
    { path: '/profile', icon: 'profile', label: 'Profile' }, // Special case for profile
  ]

  return (
    <>
      {/* Desktop Sidebar */}
      <div className="hidden lg:block fixed top-0 left-0 z-30 h-screen w-[250px] bg-gradient-to-b from-gray-900 to-black shadow-2xl flex-col border-r border-gray-800 overflow-y-auto hide-scrollbar">
        {/* Header Section */}
        <div className='flex flex-col'>
          {/* Logo */}
          <div className='p-6 border-b border-gray-800'>
            <Link to='/'>
              <img 
                className='h-16 w-auto object-contain hover:scale-105 transition-transform duration-200' 
                src={img} 
                alt="Logo" 
              />
            </Link>
          </div>
          
          {/* Navigation Links */}
          <nav className='flex flex-col mt-4 px-3'>
            {navItems.map((item) => {
              const IconComponent = item.icon
              return (
                <NavLink 
                  key={item.path}
                  to={item.path}
                  className={({ isActive }) =>
                    `flex items-center gap-4 p-3 mx-2 mb-2 rounded-xl transition-all duration-200 group ${
                      isActive 
                        ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/25' 
                        : 'text-gray-300 hover:bg-gray-800 hover:text-white hover:shadow-lg'
                    }`
                  }
                >
                  <IconComponent className='w-6 h-6 flex-shrink-0' />
                  <p className='text-base font-medium'>
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
            <CiLogout className='w-6 h-6 flex-shrink-0' />
            <p className='text-base font-medium'>
              Logout
            </p>
          </button>
        </div>
      </div>

      {/* Mobile Bottom Navigation Bar */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 z-50 bg-gray-900 border-t border-gray-800 shadow-2xl">
        <nav className='flex justify-around items-center py-1 px-1'>
          {bottomNavItems.map((item) => {
            // Special rendering for profile with image
            if (item.icon === 'profile') {
              return (
                <NavLink 
                  key={item.path}
                  to={item.path}
                  className={({ isActive }) =>
                    `flex flex-col items-center justify-center py-1 px-2 rounded-lg transition-all duration-200`
                  }
                >
                  {({ isActive }) => (
                    <div className={`w-7 h-7 rounded-full overflow-hidden border-2 ${
                      isActive ? 'border-blue-500' : 'border-gray-600'
                    }`}>
                      <img 
                        src={userProfileImage} 
                        alt="Profile" 
                        className='w-full h-full object-cover'
                      />
                    </div>
                  )}
                </NavLink>
              )
            }
            
            // Regular icon rendering
            const IconComponent = item.icon
            return (
              <NavLink 
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `flex flex-col items-center justify-center py-1 px-2 rounded-lg transition-all duration-200 ${
                    isActive 
                      ? 'text-blue-500' 
                      : 'text-gray-400 hover:text-white'
                  }`
                }
              >
                <IconComponent className='w-6 h-6' />
              </NavLink>
            )
          })}
        </nav>
      </div>
    </>
  )
}

export default Sidebar