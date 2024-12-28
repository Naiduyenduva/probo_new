import React from 'react'

const OptionButton = ({text,variant,onClick}) => {
    const variantStyles = {
        primaryYes: 'h-8 rounded-md w-40 bg-customOrange text-blue-600',
        primaryNo: 'h-8 rounded-md w-40 bg-customBlood text-red-600',
        secondaryYes: 'h-8 rounded-md w-40 bg-blue-700 text-white',
        secondaryNo: 'h-8 rounded-md w-40 bg-red-700 text-white',
    }
  return (
    <div>
        <button className={`transition-all ease-in-out ${variantStyles[variant]}`} onClick={onClick}>{text}</button>
    </div>
  )
}

export default OptionButton