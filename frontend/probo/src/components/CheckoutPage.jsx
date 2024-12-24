import React from 'react'

const CheckoutPage = ({onClose,eventDetails}) => {
  return (
    <div>
        <div className='bg-white opacity-50 w-fit grid justify-center'>
            <button className='close' onClick={onClose}>X</button>
            <h1>{eventDetails.title}</h1>
        </div>
    </div>
  )
}

export default CheckoutPage