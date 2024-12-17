import React from 'react'
import SocialIcons from './SocialIcons'

const contact = () => {
  return (
    <div>
        <div className='bg-red-900 h-60 text-white text-xl p-5 pt-10 pl-10'>
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