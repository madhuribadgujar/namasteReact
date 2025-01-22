import { CDN_URL } from '../utils/constant'
const RestCard = props => {
  const { restData } = props
  const restaurantName = restData?.info.name
  const cuisines = restData?.info.cuisines
  const avgRating = restData?.info.avgRating
  const costForTwo = restData?.info.costForTwo
  const cloudinaryImageId = restData?.info.cloudinaryImageId

  return (
    <div className="rest-card" style={{ backgroundColor: '#f0f0f0' }}>
      <img
        className="res-logo"
        alt="res-logo"
        src={CDN_URL + cloudinaryImageId}
      />
      <h3>{restaurantName}</h3>
      <h5>{cuisines.join(',')}</h5>
      <h5>{avgRating}</h5>
      <h5>{costForTwo} </h5>
    </div>
  )
}
export default RestCard
