import { useState } from 'react'
import ItemListData from './ItemListData'

const RestCategory = ({ data }) => {
  //console.log(dummy, 'dddd')

  const [isOpen, setIsOpen] = useState(false)

  // Function to toggle the open/close state
  const toggleList = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div>
      {/**header */}
      {data?.itemCards?.length > 0 && (
        <div className="w-6/12 m-auto my-4 bg-gray-50 shadow-lg p-4">
          <div className="flex justify-between">
            <span className="font-bold text-lg">
              {data?.title} ({data?.itemCards?.length})
            </span>
            <span className="cursor-pointer" onClick={toggleList}>
              {isOpen ? '⬆️' : '⬇️'}
            </span>
          </div>
          {isOpen && <ItemListData data={data?.itemCards} />}
        </div>
      )}
      {/* {console.log(data?.itemCards, 'dddd')} */}
      {/* Conditionally render the ItemList component if data?.itemCards exists and has items */}
      {/* {data?.itemCards?.length > 0 ? (
        <ItemList data={data?.itemCards} />
      ) : (
        <p>No items available</p> // Optional: Display a message when there are no items
      )} */}
    </div>
  )
}

export default RestCategory
