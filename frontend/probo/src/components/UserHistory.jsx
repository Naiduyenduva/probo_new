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
            <h1 className='font-semibold text-xl'>User history</h1>
            <button onClick={onClose} className='h-5 w-5 mr-20'><X /></button>
        </div>
    <div className='text-black grid sm:grid-cols-3 p-5 text-left'>
                {
                    history.map((each,index)=>(
                        <div className='p-5 rounded-md mb-5 bg-[rgb(255,255,255)] font-semibold sm:w-96  shadow-lg' key={index}>
                        <h1 className='font-semibold text-gray-900'>{each.eventName}</h1>
                        <div>
                            <span className='text-gray-600 text-sm'>OrderType : </span>
                            <span className='text-gray-900'>{each.orderType}</span>
                        </div>                        
                        <div>
                            <span className='text-gray-600 text-sm'>Price: </span>
                            <span className='text-gray-900'>{each.price}</span>
                        </div>                        
                        <div>
                            <span className='text-gray-600 text-sm'>You Put : </span>
                            <span className='text-gray-900'>{each.youPut}</span>
                        </div>                        
                        <div>
                            <span className='text-gray-600 text-sm'>You Get : </span>
                            <span className='text-gray-900'>{each.youGet}</span>
                        </div>                        
                        <div>
                            <span className='text-gray-600 text-sm'>RemainingQuantity : </span>
                            <span className='text-gray-900'>{each.quantity}</span>
                        </div>           
                        <div>
                            <span className='text-gray-600 text-sm'>Total Quantity : </span>
                            <span className='text-gray-900'>{each.totalQuantity}</span>
                        </div>           
                        <div>
                            <span className='text-green-600 text-sm'>Status : </span>
                            <span className='text-green-800'>{each.status}</span>
                        </div>              
                    </div>
                    ))
                }
    </div>
    </div>
  )
}

export default UserHistory