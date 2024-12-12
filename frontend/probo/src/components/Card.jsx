import React from 'react'

const Card = ({cards}) => {
 
  return (
    <div className='grid grid-cols-3 gap-10 h-max'>
      {
        cards.map((item,index)=> (
        <div className='bg-customBlue h-60 w-450 rounded-lg' key={index}>
            <div className='flex p-5'>
              <img src={item.image} alt='image' className='h-20 w-20' />
              <h1 className='text-black text-2xl font-semibold'>{item.title}</h1> 
            </div>
              <h2 className='text-black text-left pl-5'>Current score : 120-4/14.0 Overs</h2>
            <div className='flex text-black m-5 gap-10 ml-6 mt-6'>
                <button className='h-12 rounded-md w-48 bg-customOrange text-blue-600'>Yes 6</button>
                <button className='h-12 rounded-md w-48 bg-customBlood text-red-800'>No 4</button>
            </div>
        </div>
        ))
      }
    </div>
  )
}

export default Card