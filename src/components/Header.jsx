import React from 'react'
import Home from '../container/Body'
import { Link } from 'react-router-dom'
import { PageRoute } from '../env/env.route'
import logo from '../assets/images/logo/a-z-clothinghouse-logo.png'

export default function Header() {
  return (
    <div className='bg-red-800'>

      <div className='flex items-center '>
        <img src={logo} alt="logo" className='rounded-full w-20 h-20'/>
        <div className=''>Az-ClothingHouse</div>
      </div>

      <div className='flex flex-col space-y-4'>
          <h1>Explore</h1>

          
            <h1>Catagories</h1>

            <Link to={PageRoute.TRACKING}>
                <h2 >Track product</h2>
            </Link>

            <Link to={PageRoute.OFFERS}>
              <h2>Best Offers</h2>
            </Link>
            
            <Link to={PageRoute.SELLWITHUS}>
              <h2>Sell WithUs</h2>
            </Link>
            
            <Link to={PageRoute.BLOG}> 
            <h2>Block</h2>
            </Link>
        </div>
        
    </div>
    
    
  )
}
