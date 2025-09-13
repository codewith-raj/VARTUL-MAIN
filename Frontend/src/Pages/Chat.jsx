import React from 'react'
import Chatleft from '../Components/Chat/Chatleft'
import Chatright from '../Components/Chat/Chatright'

const Chat = () => {
  return (
    <div className='flex h-screen'>
      {/* Left sidebar with both components */}
      <div className='w-full flex '>
        <div className='h-1/2 border-b-2 border-gray-200'>
          <Chatleft/>
        </div>
        <div className='h-1/2'>
          <Chatright/>
        </div>
      </div>
      

    </div>
  )
}
export default Chat