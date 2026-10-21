import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { CartProvider } from './Component/CartContext/CartContext';

createRoot(document.getElementById('root')).render(
  <CartProvider>
 <BrowserRouter>
    <App />
  </BrowserRouter>
  </CartProvider>
)
