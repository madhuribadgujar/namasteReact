import RestCard, { withPramotedLabel } from './RestCard'
import jsonData from '../utils/mockData'
import { useEffect, useState } from 'react'
import Shimmer from './Shimemer'
import { Link } from 'react-router-dom'

const Body = () => {
  const [listOfRest, setListOfRest] = useState(jsonData)
  const [filterdlistOfRest, setFilterdlistOfRest] = useState(jsonData)
  const RestCartPramoted = withPramotedLabel(RestCard)

  const [searchText, setSearchText] = useState('')
  useEffect(() => {
    fetcData()
  }, [])
  const fetcData = async () => {
    try {
      var options = {
        method: 'get',
        mode: 'no-cors',
        headers: {
          'Access-Control-Request-Headers': '*',
          'Access-Control-Request-Method': '*'
        }
      }
      // debugger
      const data = await fetch(
        'https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.99740&lng=79.00110&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING'
        //  options
      )
      const jsonData = await data.json() //wait for promise to resolve
      console.log(jsonData, '>>>>>>>>>>>>')
      setFilterdlistOfRest(jsonData)
    } catch (error) {
      console.error('Error fetching data:', error)
    }
  }

  return listOfRest.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="relative max-w-md mx-auto mt-5">
          <input
            type="text"
            value={searchText}
            onChange={e => {
              setSearchText(e.target.value)
              console.log(searchText)
              const filteredRes = listOfRest.filter(res =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              )
              setFilterdlistOfRest(filteredRes)
            }}
            className="w-full p-3 pl-10 pr-12 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Search"
          />
          <button
            onClick={() => {}}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
          >
            x
          </button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            const filterList = listOfRest.filter(res => res.info.avgRating > 3)
            console.log('filterListfilterList', filterList)
            setListOfRest(filterList)
          }}
        >
          Top Rated Restaurents
        </button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
        {
          //
          filterdlistOfRest.map(rest => {
            console.log('rrr', rest.info.pramoted)
            return (
              <Link
                to={'restaurent/' + rest.info.id}
                className="max-w-xs h-80 rounded-lg overflow-hidden shadow-lg transform transition-all duration-300 hover:h-[20rem] hover:scale-105 hover:shadow-2xl"
              >
                {
                  /** If rest is pramoted then add pramoted a pramoted label to it */
                  rest.info.pramoted ? (
                    <RestCartPramoted restData={rest} />
                  ) : (
                    <RestCard key={rest.info.id} restData={rest} />
                  )
                }
              </Link>
            )
          })
          // console.log("filterList", listOfRest)
        }
      </div>
    </div>
  )
}
export default Body
