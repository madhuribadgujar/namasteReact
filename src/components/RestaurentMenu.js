import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import jsonData from '../utils/mockData'
import cartData from '../utils/cartItems'
import Shimmer from './Shimemer'
import useRestaurentMenue from '../utils/useRestaurentMenue'
import RestCategory from './RestCaregory'
const RestaurentMenue = () => {
  const restInfo = useRestaurentMenue()
  const dummy = 'Dummy data'
  const items = cartData?.data?.cards[2]?.card?.card?.info
  const { name, cuisines, costForTwo, avgRating } = items
  const itemsData =
    cartData?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards
  const cards = restInfo
  return restInfo === null ? (
    <Shimmer />
  ) : (
    <div className="">
      <div className="menu p-4 bg-gray-50 rounded-lg shadow-md  mx-auto  transition-all duration-300">
        <h1 className="flex justify-center text-4xl font-extrabold text-gray-900 mb-4">
          {name}
        </h1>
        <h3 className="flex justify-center text-md font-semibold text-gray-600 mb-3">
          {cuisines.join(', ')}
        </h3>
        <h3 className="flex justify-center text-md font-semibold text-gray-600 mb-3">
          Cost for two: {costForTwo}
        </h3>
        <h4 className="flex justify-center text-sm font-medium text-gray-500 mb-5">
          Avg Rating: {avgRating}
        </h4>
        {itemsData?.map((itm, xKey) => {
          return <RestCategory data={itm?.card?.card} />
        })}
      </div>
    </div>
  )
}
export default RestaurentMenue
