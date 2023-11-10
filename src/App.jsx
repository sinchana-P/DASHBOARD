import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import Sidemenu from './components/Sidemenu/Sidemenu'
import { Dashboard } from './components/Sidemenu/Dashboard'
import { Exchange } from './components/Sidemenu/Exchange'
import { MyWallet } from './components/Sidemenu/MyWallet'
import { Tradeview } from './components/Sidemenu/Tradeview'

function App() {

  return (
    <>
      <Sidemenu />
      <Routes>
        <Route path='dashboard' element={ <Dashboard /> } />
        <Route path='exchange' element={ <Exchange /> } />
        <Route path='mywallet' element={ <MyWallet /> } />
        <Route path='tradeview' element={ <Tradeview /> } />
      </Routes>
    </>
  )
}

export default App

{/* <Route path='/exchange' element={<Exchange />} />
        <Route path='/mywallet' element={<MyWallet />} />
        <Route path='/tradeview' element={<Tradeview />} /> */}