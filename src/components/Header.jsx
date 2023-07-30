import React from 'react'
import { Route , BrowserRouter } from 'react-router-dom'
import Home from '../container/Home'

export default function Header() {
  return (
    <nav>
        <div className='logo'>MyBrand</div>
        <img src=" " alt="" />
        <div className='explore'>
          <h1>Explore</h1>
          <BrowserRouter>
            <Route>
              <Route path='/' element={<Home />}/>
            </Route>
          </BrowserRouter>
          
          <ul>
            <li>Categories</li>
            <li>Best Offers</li>
            <li>Sell WithUs</li>
            <li>Take Order</li>
            <li>Blog</li>
          </ul>
        </div>
    </nav>
  )
}
