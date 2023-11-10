import React from 'react'
import { Routes, Route, NavLink } from 'react-router-dom'
// import { NavLink } from 'react-router-dom'
import {Dashboard} from './Dashboard'
import {Exchange} from './Exchange'
import {MyWallet} from './MyWallet'
import {Tradeview} from './Tradeview'

const Sidemenu = () => {
  return (
    <div>
      <div>
        <img />
        <h1>COINSPACE</h1>
      </div>

      <div className='quick-access'>
        <h1>Quick Access</h1>
        <nav>
            <NavLink to='/'>Dashboard</NavLink>
            <NavLink to='/exchange'>Exchange</NavLink>
            <NavLink to='/mywallet'>My Wallet</NavLink>
            <NavLink to='/tradeview'>Tradeview</NavLink>
        </nav>
      </div>

    </div>
  )
}

export default Sidemenu
