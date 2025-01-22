import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import jsonData from '../utils/mockData'
import cartData from '../utils/cartItems'
import Shimmer from './Shimemer'
const RestaurentMenue = () => {
  const [restInfo, setRestInfo] = useState(jsonData)
  const { restId } = useParams()
  console.log(restId)
  useEffect(() => {
    fetchMenue()
  }, [])
  // console.log(jsonData, '>>>>>>>>>>>>')
  const fetchMenue = async () => {
    var options = {
      method: 'get',
      mode: 'no-cors',
      headers: {
        'Access-Control-Request-Headers': '*',
        'Access-Control-Request-Method': '*'
      }
    }
    // const data = await fetch(
    //   'https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.99740&lng=79.00110&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING'
    //   // options
    // )
    // console.log(data)
    //jsonData const jsonData = await data.json() //wait for promise to resolve

    //setFilterdlistOfRest(jsonData)
  }
  const { name, cuisines, costForTwo, avgRating } = restInfo[0]?.info
  const items =
    cartData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
      ?.restaurants
  console.log(items, 'itemCards')
  const cards = restInfo
  return restInfo === null ? (
    <Shimmer />
  ) : (
    <div className="menue">
      <h1>{name}</h1>
      <h3>{cuisines.join(', ')}</h3>
      <h3>{costForTwo}</h3>
      <h4>{avgRating}</h4>
      <ul>
        {items.map(itm => (
          <li key={itm?.info?.id}>
            {itm?.info?.name}-{'Rs .'}
            {itm?.info?.costForTwo}
          </li>
        ))}
      </ul>
    </div>
  )
}
export default RestaurentMenue
