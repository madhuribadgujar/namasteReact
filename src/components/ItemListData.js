import { useEffect, useState } from 'react'
import { useCart } from '../utils/CartContext'

const ItemListData = ({ data }) => {
  const [items, setItems] = useState(data)
  const [quantities, setQuantities] = useState({})
  const { cartCount, setCartCount } = useCart()
  //  const [cartCount, setCartCount] = useState(0)
  // Handle increment for the specific item
  const handleIncrement = itemId => {
    setItems(prevItems =>
      prevItems.map(item =>
        item?.card?.info?.id === itemId
          ? { ...item, quantity: (item.quantity || 1) + 1 } // Increment quantity for this item
          : item
      )
    )
    setQuantities(prevQuantities => ({
      ...prevQuantities,
      [itemId]: (prevQuantities[itemId] || 0) + 1
    }))
  }

  // Handle decrement for the specific item
  const handleDecrement = itemId => {
    setItems(prevItems =>
      prevItems.map(item =>
        item?.card?.info?.id === itemId
          ? {
              ...item,
              quantity: (item.quantity || 1) > 1 ? item.quantity - 1 : 1
            } // Decrement, but not below 1
          : item
      )
    )
    setQuantities(prevQuantities => ({
      ...prevQuantities,
      [itemId]: Math.max((prevQuantities[itemId] || 1) - 1, 1)
    }))
  }
  // const handleAddToCart = itemId => {
  //   const item = items.find(i => i?.card?.info?.id === itemId)
  //   const itemQuantity = quantities[itemId] || 1 // Default to 1 if not set
  //   //console.log(itemQuantity, 'itemQuantity')
  //   setCartCount(prevCount => prevCount + itemQuantity) // Update cart count
  // }
  // Update cart count based on the quantities whenever the `quantities` state changes
  useEffect(() => {
    const totalQuantity = Object.values(quantities).reduce(
      (total, qty) => total + qty,
      0
    )
    setCartCount(totalQuantity)
  }, [quantities, setCartCount])

  return (
    <div>
      {/* <Header cartCount={cartCount} /> */}
      {items?.map((itm, xKey) => {
        //  if (itm?.card === 'Recommended') {
        const itemCards = itm?.card?.info
        //   console.log(itemCards, 'itmitmitm')
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
              <div className="mt-2 flex items-center justify-between w-full">
                <button
                  className="px-2 py-1 bg-gray-300 text-black rounded-l-lg hover:bg-gray-400"
                  onClick={() => handleDecrement(itemCards?.id)}
                >
                  -
                </button>
                <span className="px-4">{itm?.quantity || 1}</span>
                <button
                  className="px-2 py-1 bg-gray-300 text-black rounded-r-lg hover:bg-gray-400"
                  onClick={() => handleIncrement(itemCards?.id)}
                >
                  +
                </button>
              </div>
              <button onClick={() => handleAddToCart(itemCards.id)}>
                Add to Cart
              </button>
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
