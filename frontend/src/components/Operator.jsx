import React, { useEffect } from 'react'
import { useState } from 'react'
import '../index.css'
const Operator = () => {
    const [vehicle,setVehicle]=useState([])
    useEffect(()=>{
        fetch("http://localhost:8000/vehicle")
        .then((res)=>{
            return res.json()
        })
        .then((data)=>{
            console.log(data)
            setVehicle(data)
        })
    },[])
  return (
      <>
    <div className='operatorpage'>
    <div>
        <h1>Operator Vehicle</h1>
    </div>
     <div className='vehiclepage1'>
            <div>Vehicle Type</div>
            <div>registration no.</div>
            <div>Capacity</div>
            <div>Total Number Of Trips</div>
            <div>Trip Details</div>
        </div>
    {vehicle.map(veh=>(
       
        <div className='vehiclepage'>
        <div>{veh.vehicle_type}</div>
        <div>{veh.reg_no}</div>
        <div>{veh.capacity}</div>
        <div>{veh.trip.length}</div>
        <div>Trip Details</div>
        </div>
    ))}
    </div>
  </>
  )
  
}

export default Operator