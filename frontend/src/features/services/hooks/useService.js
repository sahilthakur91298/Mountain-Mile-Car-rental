import { useEffect, useState } from "react"
import {getService} from "../api/serviceApi.js"

const useService = () =>{

    const [services, setServices] = useState([])
    const [loading,setLoading] = useState(false)
    const [error, setError] = useState(null)

    useEffect(()=>{
        const allService = async ()=>{
            try{
                setLoading(true)
                const data = await getService()
                console.log(data)
                setServices(data)
            }
            catch(err){
                setError(err)
            }
            finally{
                setLoading(false)
            }
        }
            allService()
        },[])
    return {
        services,
        loading,
        error
    }
}
export default useService