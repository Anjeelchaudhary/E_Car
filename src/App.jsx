import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import MainListingPage from './components/MainListingPage'
import Blog from './container/Blog'
import { PageRoute } from './env/env.route'
import { Route, Routes } from 'react-router-dom'
import SellwithUs from './container/SellwithUs'
import BestOffers from './container/BestOffers'
import TrackOrder from './container/TrackOrder'

export default function App() { 
  return (
    <div>
      <Routes>
        <Route path={PageRoute.HEADER} element={<Header />} />
        <Route path={PageRoute.BLOG} element={<Blog />} /> 
        <Route path={PageRoute.SELLWITHUS} element={<SellwithUs />} />
        <Route path={PageRoute.OFFERS}  element={ <BestOffers />}/>
        <Route path={PageRoute.TRACKING} element={<TrackOrder />} />
      </Routes>
    </div>
  )
}
