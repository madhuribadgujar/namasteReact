import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import jsonData from '../utils/mockData'
import cartData from '../utils/cartItems'
import Shimmer from './Shimemer'
import useRestaurentMenue from '../utils/useRestaurentMenue'
const RestaurentMenue = () => {
  const restInfo = useRestaurentMenue()
  // const [restInfo, setRestInfo] = useState(jsonData)

  const { name, cuisines, costForTwo, avgRating } = restInfo[0]?.info
  const items =
    cartData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
      ?.restaurants
  console.log(items, 'itemCards')
  const cards = restInfo
  return restInfo === null ? (
    <Shimmer />
  ) : (
    <div className="menu p-6 bg-gray-50 rounded-lg shadow-md max-w-lg mx-auto hover:shadow-xl transition-all duration-300">
      <h1 className="text-4xl font-extrabold text-gray-900 mb-4">{name}</h1>
      <h3 className="text-md font-semibold text-gray-600 mb-3">
        {cuisines.join(', ')}
      </h3>
      <h3 className="text-md font-semibold text-gray-600 mb-3">
        Cost for two: {costForTwo}
      </h3>
      <h4 className="text-sm font-medium text-gray-500 mb-5">
        Avg Rating: {avgRating}
      </h4>

      <ul className="space-y-3">
        {items.map(itm => (
          <li
            key={itm?.info?.id}
            className="text-sm text-gray-700 flex justify-between items-center border-b border-gray-200 pb-2"
          >
            <span>{itm?.info?.name}</span>
            <span className="text-gray-500">Rs. {itm?.info?.costForTwo}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}
export default RestaurentMenue
