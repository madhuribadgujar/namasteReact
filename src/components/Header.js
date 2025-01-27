import { LOGO_URL } from '../utils/constant'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import useOnlineStatus from '../utils/useOnlineStatus'
export const Header = () => {
  let btnName = 'Login'
  const [btnNameReact, setBtnNameRect] = useState('Login')
  const onlineStatus = useOnlineStatus()
  return (
    <div className="bg-gray-500 text-white p-4 flex justify-between items-center">
      <div className="flex items-center space-x-4">
        <img className="h-10 max-w-[180px] w-auto" src={LOGO_URL} />
      </div>
      <div className="nav-items">
        <ul className="flex space-x-4">
          <li>
            <Link to="/">Online Status:{onlineStatus ? '✅' : '🔴'}</Link>
          </li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="contact">Contact Us</Link>
          </li>
          <li>Cart</li>
          <li>
            <Link to="/grocery">Grocery</Link>
          </li>
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
        </ul>
      </div>
    </div>
  )
}
//export default Header;
