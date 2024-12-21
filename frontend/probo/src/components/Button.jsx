import React from 'react'

const Button = ({text,variant='primary'}) => {
    const variantStyles = {
        primary : 'mr-5 text-xl border-2 border-red-900 text-red-900 p-3 px-5 h-12 pt-2',
        secondary : 'mr-5 h-12 text-xl p-3 px-5 pt-2 bg-red-600 text-white bg-gradient-to-b from-red-600 to-red-900'
    }
  return (
    <button className={`font-semibold flex rounded-xl ${variantStyles[variant]}`}>{text}</button>
  )
}

export default Button