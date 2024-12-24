import React from 'react'

const OptionButton = ({text,variant}) => {
    const variantStyles = {
        primary: 'h-8 rounded-md w-48 bg-customOrange text-blue-600',
        secondary: 'h-8 rounded-md w-48 bg-blue-900 text-white'
    }
  return (
    <div>
        <button className={`${variantStyles[variant]}`}>{text}</button>
    </div>
  )
}

export default OptionButton