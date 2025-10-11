import React from 'react'
import img1 from '../../assets/profile_alison.png'
import { dummySuggested } from '../../assets/Storydummydata'

const Homeright = () => {
  return (
    <div className='hidden lg:block w-full md:w-[280px] lg:w-[320px] md:mr-4 lg:mr-18 mt-6 md:mt-8 lg:mt-10 md:px-4 lg:px-0'>
      {/* User Profile Section */}
      <div className='flex justify-between items-center p-2 mb-4 md:mb-5'>
        <div className='flex items-center flex-1'>
          <img className='w-12 h-12 md:w-14 md:h-14 rounded-full object-cover' src={img1} alt="Profile" />
          <div className='flex flex-col ml-2 md:ml-3 flex-1'>
            <p className='font-semibold text-sm'>vikramsingh.gangwar</p>
            <p className='font-normal text-xs md:text-sm text-gray-500'>Vikram Singh Gangwar</p>
          </div>
        </div>
        <button className='text-blue-500 font-semibold text-xs hover:text-blue-700 transition-colors'>
          Switch
        </button>
      </div>

      {/* Suggested for you Section */}
      <div className='mb-4'>
        <div className='flex justify-between items-center px-1 mb-3'>
          <p className='text-gray-500 font-semibold text-sm'>Suggested for you</p>
          <button className='text-gray-900 font-semibold text-xs hover:text-gray-600 transition-colors'>
            See All
          </button>
        </div>

        {/* Suggestions List */}
        <div className='space-y-2 md:space-y-3'>
          {dummySuggested.map((suggestion, index) => (
            <div key={index} className='flex justify-between items-center px-1 py-1.5 md:py-2 rounded-lg transition-colors'>
              <div className='flex items-center flex-1'>
                <img 
                  className='w-8 h-8 rounded-full object-cover' 
                  src={suggestion.profile} 
                  alt={`${suggestion.username} profile`} 
                />
                <div className='flex flex-col ml-2 md:ml-3 flex-1 min-w-0'>
                  <p className='font-semibold text-sm truncate'>
                    {suggestion.username}
                  </p>
                  <p className='font-normal text-xs truncate'>
                    {suggestion.followedBy ? `Followed by ${suggestion.followedBy}` : 'Suggested for you'}
                  </p>
                </div>
              </div>
              <button className='text-blue-500 font-semibold text-xs hover:text-blue-700 transition-colors ml-2 flex-shrink-0'>
                Follow
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Footer Links */}
      <div className='mt-6 md:mt-8 px-1'>
        <div className='text-xs text-gray-400 space-y-1'>
          <div className='flex flex-wrap gap-1'>
            <span>About ·</span>
            <span>Help ·</span>
            <span>Press ·</span>
            <span>API ·</span>
            <span>Jobs ·</span>
            <span>Privacy ·</span>
            <span>Terms ·</span>
          </div>
          <div className='flex flex-wrap gap-1'>
            <span>Locations ·</span>
            <span>Language ·</span>
            <span>Meta Verified</span>
          </div>
        </div>
        <p className='text-xs text-gray-400 mt-4'>© 2025 Vartul FROM MANIPAL</p>
      </div>
    </div>
  )
}

export default Homeright