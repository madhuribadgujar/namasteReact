import React, { createContext, useState, useContext } from 'react'

// Create CartContext
const CartContext = createContext({
  cartCount: 0,
  setCartCount: () => {}
})

// Custom hook to access CartContext
export const useCart = () => {
  return useContext(CartContext)
}

// CartProvider component that will manage the global cart count state
export const CartProvider = ({ children }) => {
  const [cartCount, setCartCount] = useState(0) // State to store the cart count

  return (
    <CartContext.Provider value={{ cartCount, setCartCount }}>
      {children}
    </CartContext.Provider>
  )
}

export default CartContext
