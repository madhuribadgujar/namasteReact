import { CDN_URL } from '../utils/constant'
const RestCard = props => {
  const { restData } = props
  const restaurantName = restData?.info.name
  const cuisines = restData?.info.cuisines
  //console.log('cuisines', cuisines)
  const avgRating = restData?.info.avgRating
  const costForTwo = restData?.info.costForTwo
  const cloudinaryImageId = restData?.info.cloudinaryImageId

  return (
    <div className="max-w-xs h-80 rounded-lg overflow-hidden shadow-lg   hover:scale-105 hover:shadow-2xl ">
      <img
        className="w-full h-40 p-1 m-2 object-cover"
        alt="res-logo"
        src={CDN_URL + cloudinaryImageId}
      />
      <div className="p-4 flex flex-col h-full">
        <h3 className="text-base font-semibold text-gray-800 mb-2 truncate">
          {restaurantName}
        </h3>
        <h5 className="text-sm font-medium text-gray-800 mb-2 truncate">
          {cuisines?.length > 0 ? cuisines.join(', ') : 'No cuisines available'}
        </h5>
        <h5 className="text-sm font-medium text-gray-800 mb-2">{avgRating}</h5>
        <h5 className="text-sm font-medium text-gray-800 mb-2">{costForTwo}</h5>
      </div>
    </div>
  )
}
//creareder component
//i/p -RestCard ==>RestCardComponent

//higherorder component
export const withPramotedLabel = RestCard => {
  return props => (
    <div className="relative">
      {/* Promoted Label */}
      <label className="absolute top-2 left-2 bg-black text-white p-2 rounded-full shadow-md transform transition-all duration-300 hover:scale-110 hover:bg-gray-800 cursor-pointer">
        Pramoted
      </label>
      {/* RestCard Component */}
      <RestCard {...props} />
    </div>
  )
}

export default RestCard
