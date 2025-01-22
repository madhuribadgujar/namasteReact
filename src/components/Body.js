import RestCard from './RestCard'
import jsonData from '../utils/mockData'
import { useEffect, useState } from 'react'
import Shimmer from './Shimemer'
import { Link } from 'react-router-dom'

const Body = () => {
  const [listOfRest, setListOfRest] = useState(jsonData)
  const [filterdlistOfRest, setFilterdlistOfRest] = useState(jsonData)

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
        <div className="search">
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
            className="searchBox"
            placeholder="Search"
          />
          <button onClick={() => {}}>Search</button>
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
      <div className="rest-container">
        {
          //
          filterdlistOfRest.map(rest => {
            //  console.log(rest);
            return (
              <Link to={'restaurent/' + rest.info.id}>
                <RestCard key={rest.info.id} restData={rest} />
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
