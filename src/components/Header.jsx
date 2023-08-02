import React from 'react'
import Home from '../container/Home'
import { Link } from 'react-router-dom'
import { PageRoute } from '../env/env.route'
import logo from '../assets/images/logo/clothing-house-logo.png'

export default function Header() {
  return (
    <nav>
        <div className='logo'>Az-ClothingHouse</div>
        <img src={logo} alt="logo" className='rounded-full w-20 h-20'/>
        <div className='explore'>
          <h1>Explore</h1>
          <ul>
            <li>Categories</li>

            <Link to={PageRoute.TRACKING}>
              <li>Track product</li>
            </Link>
            <Link to={PageRoute.OFFERS}>
              <li>Best Offers</li>
            </Link>
            
            <Link to={PageRoute.SELLWITHUS}>
              <li>Sell WithUs</li>
            </Link>
            
            <Link to={PageRoute.BLOG}> 
            <li>Block</li>
            </Link>
          </ul>
        </div>
    </nav>
  )
}
