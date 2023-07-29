import React from 'react'

export default function Header() {
  return (
    <nav>
        <div className='logo'>MyBrand</div>
        <img src="/Users/anjeelchaudhary/workingRobo/Repos/ClothingHouse/public/images/logo" alt="" />
        <div className='explore'>
          <h1>Explore</h1>
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
