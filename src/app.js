import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom/client'
import { Header } from './components/Header'
import Body from './components/Body'
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom'
import Error from './components/Error'
import About from './components/About'
import Contact from './components/Contact'
import RestaurentMenue from './components/RestaurentMenu'
import UserContext from './utils/UserContex'
import CartContext, { CartProvider } from './utils/CartContext'
const AppLayout = () => {
  //authentication code
  const [userName, setUserName] = useState()
  // const [cartCount, setCartCount] = useState(0)

  useEffect(() => {
    //api call and send UN n PW
    const result = {
      name: 'Madhuri'
    }
    setUserName(result.name)
  }, [])
  return (
    <UserContext.Provider value={{ loggedInUser: userName, setUserName }}>
      <CartProvider>
        <div className="app">
          <Header />

          <Outlet />
        </div>
      </CartProvider>
    </UserContext.Provider>
  )
}
const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      { path: '/', element: <Body /> },
      { path: '/about', element: <About /> },
      { path: '/contact', element: <Contact /> },
      { path: '/restaurent/:resId', element: <RestaurentMenue /> }
    ],
    errorElement: <Error />
  }
])
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<RouterProvider router={appRouter} />)
