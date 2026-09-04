import React, { useEffect, useState } from 'react'
import { getDestinations } from '../api/destinationApi'

const useDestination = () => {

    const [destination, setDestination] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    useEffect(()=>{

        const allDestinations = async ()=>{

            try {
                setLoading(true)
                const data = await getDestinations()
                setDestination(data)
            } catch (error) {
                setError(error)
            }
            finally{
                setLoading(false)
            }
        }
        allDestinations()
    },[])

  return {
    destination,
    loading,
    error
  }
}

export default useDestination