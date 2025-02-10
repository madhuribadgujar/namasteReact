import { LOGO_URL } from '../utils/constant'

import { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import useOnlineStatus from '../utils/useOnlineStatus'
import UserContext from '../utils/UserContex'
import { useCart } from '../utils/CartContext'
import { useSelector } from 'react-redux'

export const Header = () => {
  let btnName = 'Login'
  const [btnNameReact, setBtnNameRect] = useState('Login')
  const onlineStatus = useOnlineStatus()
  const { loggedInUser } = useContext(UserContext)
  // const { cartCount } = useCart()
  // subscribing to the store selector
  const cartItems = useSelector(store => store.cart.items)
  return (
    <div className="bg-gray-500 text-white p-4 flex justify-between items-center">
      <div className="flex items-center space-x-4">
        <img className="h-10 max-w-[180px] w-auto" src={LOGO_URL} />
      </div>
      <div className="nav-items">
        <ul className="flex space-x-4">
          <li className="px-4">
            <Link to="/">Online Status:{onlineStatus ? '✅' : '🔴'}</Link>
          </li>
          <li className="px-4">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4">
            <Link to="/about">About Us</Link>
          </li>
          <li className="px-4">
            <Link to="contact">Contact Us</Link>
          </li>
          <li className="px-4 font-bold">
            <Link to="/cart">Cart ({cartItems.length} items)</Link>
          </li>
          <li className="px-4">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="px-4"></li>
          <button
            className="login"
            onClick={() => {
              btnNameReact === 'Login'
                ? setBtnNameRect('Log Out')
                : setBtnNameRect('Login')
            }}
          >
            {btnNameReact}
          </button>
          <li className="px-4 font-bold"> {loggedInUser}</li>
        </ul>
      </div>
    </div>
  )
}
//export default Header;
