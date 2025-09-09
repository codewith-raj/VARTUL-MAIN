import React from 'react'
import Hero from '../Components/Homeleft/Hero'
import Postforhome from '../Components/Homeleft/Postforhome'

const Home = () => {
  return (
    <div className="flex bg-black min-h-screen">
   
      
      {/* Main Content Area */}
      <div className="flex-1 lg:ml-[250px]">
   
        <div >
         <Hero/>
        </div>
        
        {/* Posts Feed */}
        <div className="max-w-2xl mx-auto  ml-40">
          <Postforhome />
        </div>
      </div>
    </div>
  )
}

export default Home
