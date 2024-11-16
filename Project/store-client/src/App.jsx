import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ShoeCarousel from './components/Admin/ShoeCarousel'
import WebLayout from './layout/WebLayout'
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<WebLayout />} >
          <Route path='/' element={<ShoeCarousel />} />
        </Route>

      </Routes>
    </BrowserRouter >
  )
}

export default App
