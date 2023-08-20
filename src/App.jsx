import React from 'react'
import Header from './components/Header'
import Blog from './container/Blog'
import { PageRoute } from './env/env.route'
import { Route, Routes } from 'react-router-dom'

export default function App() { 
  return (
    <div>
      <Routes>
        <Route path={PageRoute.HEADER} element={<Header />} />
        <Route path={PageRoute.BLOG} element={<Blog />} /> 

      </Routes>
    </div>
  )
}
