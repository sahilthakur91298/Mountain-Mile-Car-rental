import React from 'react'
import useService from '../hooks/useService'

const Services = () => {

  const {service,loading,error} = useService()
  if(loading){
    return <div>Loading...</div>
  }
  if(error){
    return <div>There is some error</div>
  }

  return (
    <div>Services</div>
  )
}

export default Services