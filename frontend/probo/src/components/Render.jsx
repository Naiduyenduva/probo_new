import React from 'react'
import Card from './Card'

const Render = () => {
    const array = [
        {
          title: 'Zimbabwe to win the 1st T20I vs Afganistan?',
          description: '',
          image: 'https://i.etsystatic.com/31630934/r/il/12136b/5097293007/il_1588xN.5097293007_y4xd.jpg',
        },
        {
          title: 'Bitcoin to be priced at 100558.83 USDT or more at 01:25 PM?',
          description: '',
          image: 'https://images.pexels.com/photos/6765363/pexels-photo-6765363.jpeg?auto=compress&cs=tinysrgb&w=600',
        },
        {
          title: 'Manchester United to win against Viktoria Plzen?',
          description: '',
          image: 'https://footballmonk.in/wp-content/uploads/2024/08/Manchester-United-Third-2024-25-2.jpg',
        },
        {
          title: 'Delhi to win the kabaddi match against Hyderabad?',
          description: '',
          image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSn8YOrTFr7K368Vikjrcq8v6kSDC2jjZUXeg&s',
        },
        {
          title: 'India,s GDP growth rate to be 8.4% or more for FY24-25?',
          description: '',
          image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgG3RUJ6QtkCj7bH2dTH-THv_L3Zn4aDBBGQ&s',
        },
      ]
  return (
    <div>
        <div className='p-5'>
            <Card cards={array} />
        </div>
    </div>
  )
}

export default Render