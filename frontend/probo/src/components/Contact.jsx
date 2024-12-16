import React from 'react'
import SocialIcons from './SocialIcons'

const contact = () => {
  return (
    <div>
        <div className='bg-red-500 h-60 text-white text-xl p-5 pt-10 pl-10'>
            <div className='flex gap-10 justify-center'>
                <h2>about</h2>
                <h2>contact</h2>
                <h2>careers</h2>
                <h2>Privacy and policy</h2>
                <h2>Trade</h2>
            </div>
            <SocialIcons />
        </div>
    </div>
  )
}

export default contact