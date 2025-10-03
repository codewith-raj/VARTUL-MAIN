import React from 'react'
import { Route, Routes,useLocation } from 'react-router-dom'
import Home from './Pages/Home'
import Reels from './Pages/Reels'
import Settings from './Pages/Settings'
import Chat from './Pages/Chat'
import Sidebar from './Components/Sidebar'
import Aboutus from './Pages/Aboutus'
import Twt_Token from './Pages/Twt_Token'
import Dashboard from './Pages/Dashboard'

import Footer from './Pages/Footer'
import { ToastContainer } from 'react-toastify'

const App = () => {
   const location = useLocation()
     const hideFooter = location.pathname.startsWith('/chat')
  return (
    <div className=' flex flex-col '>
    <div>
      <ToastContainer/>
        <Sidebar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/reels' element={<Reels/>}/>
        <Route path='/settings' element={<Settings/>}/>
        <Route path='/chat' element={<Chat/>}/>
        <Route path='/about-us' element={<Aboutus/>}/>
        <Route path='/twt_token' element={<Twt_Token/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
        <Route path='/setting' element={<Settings/>}/>
      </Routes>
    </div>
   {!hideFooter && <Footer />}
    </div>
  )
}

export default App
