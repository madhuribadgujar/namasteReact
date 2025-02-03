const ItemListData = ({ data }) => {
  return (
    <div>
      {data?.map((itm, xKey) => {
        //  if (itm?.card === 'Recommended') {
        const itemCards = itm?.card?.info
        // return itemCards?.map((res, yKey) => {
        const infoData = itm?.card?.info
        return (
          <div className="flex">
            {/* Image on the left */}
            <div className="mr-4">
              <img
                className="w-16 h-16 object-cover rounded-lg"
                src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/${infoData?.imageId}`}
                alt="Product"
              />
            </div>

            {/* Information on the right */}
            <div className="flex flex-col justify-between">
              {/* Name */}
              <div>
                <span>{infoData?.name}</span>
              </div>

              {/* Price */}
              <div>
                <span>
                  {infoData?.finalPrice ? (
                    <>
                      <s>₹{infoData?.price / 100}</s>
                      <span style={{ marginLeft: '10px' }}>
                        ₹{infoData?.finalPrice / 100}
                      </span>
                    </>
                  ) : (
                    <>₹{infoData?.price / 100} </>
                  )}
                </span>
              </div>

              {/* Description */}
              <div>
                <span className="text-gray-500">{infoData?.description}</span>
              </div>

              {/* Ratings */}
              <div>
                <span className="text-green-400 text-lg font-semibold inline-flex items-center">
                  <span className="mr-2">★</span>
                  {infoData?.ratings?.aggregatedRating?.rating}
                </span>
              </div>
            </div>
          </div>
        )
        // })
        //  }
      })}
    </div>
  )
}
export default ItemListData
