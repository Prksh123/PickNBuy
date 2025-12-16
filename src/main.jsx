import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { CartProvider } from './contexts/CartContext.jsx'
import { FilterProvider } from './contexts/FilterContext.jsx'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <FilterProvider>
     <CartProvider>
       <App />
     </CartProvider>
    </FilterProvider>
  </StrictMode>,
)
