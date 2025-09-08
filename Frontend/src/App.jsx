import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Reels from './Pages/Reels'
import Settings from './Pages/Settings'
import Chat from './Pages/Chat'
import Sidebar from './Components/Sidebar'
import Aboutus from './Pages/Aboutus'
import Twt_Token from './Pages/Twt_Token'
import Dashboard from './Pages/Dashboard'
import Seeting from './Pages/Seeting'
const App = () => {
  return (
    <div className=' flex'>
      <Sidebar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/reels' element={<Reels/>}/>
        <Route path='/settings' element={<Settings/>}/>
        <Route path='/chat' element={<Chat/>}/>
        <Route path='/about-us' element={<Aboutus/>}/>
        <Route path='/twt_token' element={<Twt_Token/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
        <Route path='/setting' element={<Seeting/>}/>
      </Routes>
    </div>
  )
}

export default App
