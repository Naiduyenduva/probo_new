import React, { useState } from 'react'
import CheckoutPage from './CheckoutPage';

const Card = ({cards,onSendData}) => {
  const[isModalOpen, setIsModalOpen] = useState(false)
  const [selectedEvent, setSelectedEvent] = useState(null)

  function onSendData (item) {
    setSelectedEvent(item)
  }

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
 
  return (
    <div className='grid grid-cols-3 gap-10'>
      {
        cards.map((item,index)=> (
        <div className='bg-customBlue rounded-lg' key={index}>
            <div className='flex p-5'>
              <img src={item.image} alt='image' className='h-16 w-16' />
              <h1 className='text-black text-lg font-semibold'>{item.title}</h1> 
            </div>
              <h2 className='text-black text-left pl-5'>{item.description}</h2>
            <div className='flex text-black m-5 gap-10 ml-6 mt-6'>
                <button className='h-8 rounded-md w-48 bg-customOrange text-blue-600' onClick={()=>{openModal(); onSendData(item);}}>Yes {item.yes}</button>
                <button className='h-8 rounded-md w-48 bg-customBlood text-red-800' onClick={()=>{openModal(); onSendData(item);}} >No {item.no}</button>
            </div>
        </div>
        ))
      }
      <div>
        {
          isModalOpen && <CheckoutPage onClose={closeModal} eventDetails={selectedEvent} /> 
        }
      </div>
    </div>
  )
}

export default Card