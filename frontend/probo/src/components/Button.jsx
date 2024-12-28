import React from 'react'

const Button = ({text,variant='primary',buttonwidth,onClick}) => {
    const variantStyles = {
        primary : 'mr-5 text-md border-2 border-red-900 text-red-900 h-10 p-2 px-5 pt-1',
        secondary : 'mr-5 h-10 text-md p-2 px-5 pt-2 bg-red-600 text-white bg-gradient-to-b from-red-600 to-red-900'
    }
   
  return (
    <button className={`font-semibold flex justify-center rounded-xl ${variantStyles[variant]} ${buttonwidth}`} onClick={onClick}>{text}</button>
  )
}

export default Button