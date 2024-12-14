import React from 'react'

const LandingPage = () => {
  return (
    <div className='bg-red-50 h-screen'>
        <div className='flex justify-between p-3 px-20 pt-5'>
            <h1 className='font-bold ml-3 font-mono text-3xl'>Probo</h1>
            <div className='flex justify-around gap-10 font-semibold text-xl text-red-700 mt-1'>
                <button>Home</button>
                <button>Trading</button>
                <button>Demo</button>
                <button>Careers</button>
                <button>Contact</button>
            </div>
            <div className='flex'>
                <button className='font-semibold mr-5 text-xl flex border-2 border-red-900 text-red-900 p-1 pl-5 rounded-xl w-24'>Login</button>
                <h2 className='font-semibold mr-5 text-xl flex p-1 pl-5 rounded-xl w-36 bg-red-600 text-white'>Try for free</h2>
            </div>
        </div>
        <div className='mt-40'>
            <h1 className='text-7xl font-bold w-8/12 ml-60 mb-8'>Invest in your <span className='text-red-800'>Point of view</span> with your valuble money</h1>
            <h2 className='text-3xl w-7/12 ml-80 mt-5 font-extralight'>Build your knowledge and form your opinions and views about upcoming events in the world.</h2>
            <div className='mt-10 bg-white p-3 pl-12 shadow-md shadow-red-400 w-fit ml-96 rounded-xl flex'>
                <input type='text' placeholder='Enter your email' className='p-2 w-96 h-16 mr-4 rounded-xl' />
                <div className='flex'>
                    <button className='font-semibold h-16 text-xl p-2 pl-5 rounded-xl w-60 bg-red-600 text-white text-center' >Sign up</button>
                </div>
            </div>
        </div>
        <div>

        </div>
    </div>
  )
}

export default LandingPage