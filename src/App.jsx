
import './App.css'
import Viewcart from './Components/Viewcart'
import Header from './Components/Header'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Components/Home'
import { createContext, useState } from 'react'

export const CartContext=createContext();

function App() {
  const [cart,setCart]=useState([])

  return (
    <>
      <CartContext.Provider value={{cart,setCart}}>
      <BrowserRouter>
        <Header cart={cart} />
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Cart" element={<Viewcart  />} />
          </Routes>
        </div>
      </BrowserRouter>
      </CartContext.Provider>
    </>
  )
}

export default App
