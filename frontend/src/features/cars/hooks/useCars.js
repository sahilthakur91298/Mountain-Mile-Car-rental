import { useEffect, useState } from "react"
import { getCars }from "../api/carsApi.js"

const useCars = () =>{
    const [cars,setCars] = useState([])
    const [loading,setLoading] = useState(false)
    const [error,setError] = useState(null)

    useEffect(()=>{
        const allCars = async ()=>{

            try {
                setLoading(true)
                const data = await getCars()
                setCars(data)
            } catch (err) {
                setError(err)
            }
            finally{
                setLoading(false)
            }
        }
        allCars()
    },[])

    return {
        cars,
        loading,
        error
    }
}

export default useCars
