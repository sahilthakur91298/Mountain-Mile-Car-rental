import { useEffect, useState } from "react"
import {getService} from "../api/serviceApi.js"

const useService = () =>{

    const [service, setService] = useState([])
    const [loading,setLoading] = useState(false)
    const [error, setError] = useState(null)

    useEffect(()=>{
        const allService = async ()=>{
            try{
                setLoading(true)
                const data = await getService()
                console.log(data)
                setService(data)
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
        service,
        loading,
        error
    }
}
export default useService