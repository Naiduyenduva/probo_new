import React, { useState } from 'react'
import {History, Wallet} from 'lucide-react'
import UserHistory from './UserHistory'


const Navbar = ({history,setHistory}) => {
    
  const openModal = () => setHistory((prevState) => !prevState);
  return (
    <div>

    <div className='bg-customBlue'>
      <section className='flex justify-between p-5'>
        <div>
          <h1 className='font-bold ml-3 font-mono text-2xl'>Probo</h1>
        </div>
        <div className='sm:flex justify-around gap-10 font-normal text-customText text-md sm:block hidden'>
          <h2>Cricket</h2>
          <h2>Kabaddi</h2>
          <h2>Elections</h2>
          <h2>Football</h2>
          <h2>Crypto</h2>
        </div>
        <div className='flex gap-2 cursor-pointer'>
          <Wallet className='mt-1' size={20} />
          <button className='font-semibold mr-5 text-md flex gap-3'>150</button>
        <div className='flex gap-2 font-semibold text-md cursor-pointer' onClick={openModal}>
          <h2>History</h2>
          <History className='mt-1' size={20}/>
        </div>
        </div>
      </section>
    </div>
    </div>
    )
}

export default Navbar