import React from 'react'
import SocialIcons from './SocialIcons'

const contact = () => {
  return (
    <div>
        <div className='bg-gradient-to-b from-red-700 to-red-900 h-48 text-white text-lg p-3 pt-16 pl-10'>
            <div className='flex gap-10 justify-center'>
                <button>About</button>
                <button>Contact</button>
                <button>Careers</button>
                <button>Privacy and Policy</button>
                <button>Trade</button>
            </div>
            <SocialIcons />
        </div>
    </div>
  )
}

export default contact