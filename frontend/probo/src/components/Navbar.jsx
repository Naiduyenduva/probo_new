import React, { useState } from 'react'
import {History} from 'lucide-react'
import UserHistory from './UserHistory'

const Navbar = () => {
  const[isModalOpen, setIsModalOpen] = useState(false)
    
  const openModal = () => setIsModalOpen((prevState) => !prevState);
  const closeModal = () => setIsModalOpen(false);
  return (
    <div>

    <div className='bg-customBlue'>
      <section className='flex justify-between p-5'>
        <div>
          <h1 className='font-bold ml-3 font-mono text-2xl'>Probo</h1>
        </div>
        <div className='sm:flex justify-around gap-10 font-normal text-customText text-xl sm:block hidden'>
          <h2>Cricket</h2>
          <h2>Kabaddi</h2>
          <h2>Elections</h2>
          <h2>Football</h2>
          <h2>Crypto</h2>
        </div>
        <div className='flex gap-2'>
          <button className='font-semibold mr-5 text-xl flex gap-3'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
      <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a2.25 2.25 0 0 0-2.25-2.25H15a3 3 0 1 1-6 0H5.25A2.25 2.25 0 0 0 3 12m18 0v6a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 18v-6m18 0V9M3 12V9m18 0a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 9m18 0V6a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 6v3" /></svg>150</button>
        <div className='flex gap-2 font-semibold text-lg cursor-pointer' onClick={openModal}>
          <h2>History</h2>
          <History className='mt-1'/>
        </div>
        </div>
      </section>
    </div>
        {
          isModalOpen && <UserHistory onClose={closeModal} />
        }
    </div>
    )
}

export default Navbar