import React, { useEffect, useState } from 'react'
import Card from './Card'

const UserPage = () => {
    const [error, setError] = useState(null)
    const [eventsArray, setEventsArray] = useState([]);
   
    useEffect(()=> {

      const handleEvents = async () => {
        try {
            const response = await fetch("http://localhost:3000/api/v1/admin/events/all",{
              method: "GET",
              headers: {
                "Content-Type": "application/json"
              }
            })
            const data = await response.json();
            if(response.ok) {
              setEventsArray(data.events)
            } else {
              throw new Error("dta not found")
            }
        } catch (error) {
          setError(error.message)
        }
      }
      handleEvents();
    },[])

    
  return (
    <div>
        <div className='h-fit p-5'>
            <Card cards={eventsArray} />
        </div>
    </div>
  )
}

export default UserPage