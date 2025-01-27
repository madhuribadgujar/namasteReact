import { CDN_URL } from '../utils/constant'
const RestCard = props => {
  const { restData } = props
  const restaurantName = restData?.info.name
  const cuisines = restData?.info.cuisines
  const avgRating = restData?.info.avgRating
  const costForTwo = restData?.info.costForTwo
  const cloudinaryImageId = restData?.info.cloudinaryImageId

  return (
    <div className="max-w-xs h-80 rounded-lg overflow-hidden shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
      <img
        className="w-full h-48 object-cover"
        alt="res-logo"
        src={CDN_URL + cloudinaryImageId}
      />
      <div className="p-4 flex flex-col h-full">
        <h3 className="text-base font-semibold text-gray-800 mb-2 truncate">
          {restaurantName}
        </h3>
        <h5 className="text-sm font-medium text-gray-800 mb-2 truncate">
          {cuisines.length > 0 ? cuisines.join(', ') : 'No cuisines available'}
        </h5>
        <h5 className="text-sm font-medium text-gray-800 mb-2">{avgRating}</h5>
        <h5 className="text-sm font-medium text-gray-800 mb-2">{costForTwo}</h5>
      </div>
    </div>
  )
}
export default RestCard
