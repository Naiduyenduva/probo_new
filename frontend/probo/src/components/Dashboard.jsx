import React, { useState } from 'react'
import Navbar from './Navbar'
import UserPage from './UserPage'

const Dashboard = () => {
  const [history,setHistory] = useState(false)

  return (
    <div>
        <div>
            <Navbar history={history} setHistory={setHistory} />
            <UserPage history={history} setHistory={setHistory} />
        </div>
    </div>
  )
}

export default Dashboard