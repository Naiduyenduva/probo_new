import React, { useEffect, useState } from 'react'
import Card from './Card'
import UserHistory from './UserHistory';

const UserPage = ({history,setHistory}) => {
    const [error, setError] = useState(null)
    const [eventsArray, setEventsArray] = useState([]);
    const closeModal = () => setHistory(false);

   
    useEffect(()=> {

      const handleEvents = async () => {
        try {
            const response = await fetch("https://probo-new.vercel.app/api/v1/admin/events/all",{
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
      {
        history ? ( <UserHistory onClose={closeModal} /> ) : (
          <div className='h-fit p-5'>
          <Card cards={eventsArray} />
      </div>
        )
      } 
    </div>
  )
}

export default UserPage