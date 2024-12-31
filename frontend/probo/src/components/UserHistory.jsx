import React, { useEffect, useState } from 'react'
import {X} from "lucide-react"

const UserHistory = ({onClose}) => {
    const [error,setError] = useState(null)
    const [history,setHistory] = useState([]);

    useEffect(()=> {
        const handleHistory = async () => {
         try {
             const token = localStorage.getItem("token")
             const response = await fetch("https://probo-new.vercel.app/api/v1/user/history",{
                 method: "GET",
                 headers: {
                     "Content-Type": "application/json",
                     "token": token
                 }
             })
             if(response.ok) {
                 const data = await response.json();
                 setHistory(data.allPredictions)
             } else {
                 throw new Error("erro in history")
             }
         } catch (error) {
             setError(error.message)
         } 
        }
        handleHistory();
    },[])

  return (
    <div className='bg-[rgb(245,245,245)] text-right'>
        <div className='flex justify-between px-10 pt-2'>
            <h1 className='font-bold text-xl'>User history</h1>
            <button onClick={onClose} className='h-5 w-5 mr-20'><X /></button>
        </div>
    <div className='text-black grid sm:grid-cols-3 p-5 text-left'>
                {
                    history.map((each,index)=>(
                        <div className='p-5 rounded-md mb-5 bg-[rgb(255,255,255)] font-semibold w-96' key={index}>
                        <h1 className='font-semibold text-red-700'>{each.eventName}</h1>
                        <h2>Ordertype : {each.orderType}</h2>
                        <h1>Price: {each.price}</h1>
                        <h2>Quantity : {each.quantity}</h2>
                        <h2 className='text-green-600'>Status : {each.status}</h2>
                    </div>
                    ))
                }
    </div>
    </div>
  )
}

export default UserHistory