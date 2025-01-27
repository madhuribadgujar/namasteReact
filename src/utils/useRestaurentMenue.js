import { useEffect, useState } from 'react'
import jsonData from '../utils/mockData'

const useRestaurentMenue = restId => {
  const [restInfo, setRestInfo] = useState(jsonData)
  useEffect(() => {
    fetchData(jsonData)
  }, [])

  const fetchData = async () => {
    // const data = await fetch(MENUE_API + restId)
    // const json = await data.json
    // setRestInfo(json)
  }
  return jsonData
}
export default useRestaurentMenue
