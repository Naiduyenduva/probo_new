import React from 'react'
import Navbar from './Navbar'
import Render from './Render'
import Button from './Button'

const Dashboard = () => {
  return (
    <div>
        <div>
            <Navbar />
            <Render />
            <Button text ='Login' variant='secondary' />
        </div>
    </div>
  )
}

export default Dashboard