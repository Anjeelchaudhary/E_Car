import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { PageRoute } from '../env/env.route'
import logo from '../assets/images/logo/a-z-clothinghouse-logo.png'

export default function Header() {
  const DropDownBTN = () => {
    const [isDropDownOpen , setIsDropDownOpen] = useState(false)
    const toggleDropDown = () => {
      setIsDropDownOpen(!isDropDownOpen)
    }
  }

  return (
    <div className='bg-yellow-200 flex flex-row justify-between items-centre border-black'>

      <div className='flex items-center  border border-red-300'>
        <img src={logo} alt="logo" className='rounded-full w-20 h-20' />
        <div className=''>Az-ClothingHouse</div>
      </div>

      <div className='flex flex-row items-center space-x-3 border justify-between border-blue-500'>
        <div className='relative inline-block'>
          <button type='button' className='drop'>Shop</button>
        </div>
        
        <h1>MostWanted</h1>
        <Link to={PageRoute.BLOG}>
          <h2>Block</h2>
        </Link>
        <h1>NewArrival</h1>
        <h1>Brand</h1>
      </div>
      <div className='flex flex-row border border-green-500 items-center justify-between'> For search</div>

    </div>


  )
}
