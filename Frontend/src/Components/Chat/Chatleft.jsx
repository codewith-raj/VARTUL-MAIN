import React from 'react';
import { ChevronDownIcon, PencilIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline';

const Chatleft = () => {
  return (
    <div className='p-4 sm:p-6 max-h-screen w-full max-w-[350px] mx-auto lg:ml-40 xl:ml-65 bg-black'>
      {/* Header Section */}
      <div className='flex items-center justify-between sm:justify-start sm:space-x-8 md:space-x-12 lg:space-x-16'>
        {/* User Profile */}
        <div className='flex items-center gap-2 cursor-pointer hover:opacity-80 transition-opacity duration-200'>
          <p className='font-bold text-xl sm:text-2xl text-white truncate max-w-[150px] sm:max-w-none'>
            @vikramsingh
          </p>
          <ChevronDownIcon className='w-6 h-6 text-gray-400 hover:text-white transition-colors duration-200 flex-shrink-0'/>
        </div>
        
        {/* Edit Icon */}
        <div className='cursor-pointer p-2  rounded-lg transition-colors duration-200 flex-shrink-0'>
           <svg 
            xmlns="http://www.w3.org/2000/svg" 
            fill="none" 
            viewBox="0 0 24 24" 
            strokeWidth="1.5" 
            stroke="currentColor" 
            className="w-5 h-5 sm:w-6 sm:h-6 transition-colors duration-200"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" 
            />
          </svg>
        </div>
      </div>

      {/* Search Section */}
      <div className='mt-6 sm:mt-8'>
        <div className='relative w-[300px] max-w-md'>
          <MagnifyingGlassIcon className='absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none z-10'/>
          <input 
            type="text"
            placeholder='Search' 
            className='w-full h-10 sm:h-12 bg-[#2a2a2a] border border-gray-600 rounded-lg pl-10 pr-4 text-sm sm:text-base text-white placeholder-gray-400 focus:outline-none transition-all duration-200'
          />
        </div>
      </div>

      <div className='flex justify-between'>
        <p className='font-bold text-md'>Messages</p>
        <p className='text-gray-400 cursor-pointer'>Request</p>
      </div>
    </div>
  );
};

export default Chatleft;