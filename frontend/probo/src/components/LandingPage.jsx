import React, { useState } from 'react'
import { useRef } from 'react'
import { Link } from 'react-router-dom'
import Contact from './contact'
import Card from './Card'
import Button from './Button'
import { UserRoundPen, BookA, Activity } from 'lucide-react';

const LandingPage = () => {

    const array1 = [
        {
          title: 'Zimbabwe to win the 1st T20I vs Afganistan?',
          description: '',
          image: 'https://i.etsystatic.com/31630934/r/il/12136b/5097293007/il_1588xN.5097293007_y4xd.jpg',
        },
        {
          title: 'Bitcoin to be priced at 100558.83 USDT or more at 01:25 PM?',
          description: '',
          image: 'https://images.pexels.com/photos/6765363/pexels-photo-6765363.jpeg?auto=compress&cs=tinysrgb&w=600',
        },
        {
            title: 'Manchester United to win against Viktoria Plzen?',
            description: '',
            image: 'https://footballmonk.in/wp-content/uploads/2024/08/Manchester-United-Third-2024-25-2.jpg',
          },
    ]

    const array2 = [
        {
            image: 'https://probo.in/_next/image?url=https%3A%2F%2Fd39axbyagw7ipf.cloudfront.net%2Fimages%2Fhome%2Fcta%2Fperson-left.webp&w=640&q=75'
        },
        {
            image: 'https://probo.in/_next/image?url=https%3A%2F%2Fd39axbyagw7ipf.cloudfront.net%2Fimages%2Fhome%2Fcta%2Fperson-right.webp&w=640&q=75'
        }
    ]

    const array3 = [
        {
            title: 'Order Book',
            icon: UserRoundPen
        },
        {
            title: "Portfolio Management",
            icon: BookA
        },
        {
            title: "Real-Time Updates",
            icon: Activity
        }
    ]

  return (
    <div className='bg-red-50 h-screen'>
        <div className='flex justify-between p-3 px-20 pt-5'>
            <h1 className='font-bold ml-3 font-mono text-2xl'>Probo</h1>
            <div className='flex justify-around gap-10 font-semibold text-lg text-red-700 mt-1'>
                <button>Home</button>
                <button>Trading</button>
                <button>Demo</button>
                <button>Careers</button>
                <button>Contact</button>
            </div>
            <div className='flex'>
            <Link to='/dashboard'><Button text ='Login' variant='primary' /></Link>
                <Button text ='Try for free' variant='secondary' />
            </div>
        </div>
        <div className='mt-20 pl-44'>
            <h1 className='text-6xl font-bold mb-10 w-10/12'>Invest in your <span className='bg-gradient-to-b from-red-500 to-red-900 text-transparent bg-clip-text'>Point of view</span><br/> with your valuble money</h1>
            <h2 className='text-3xl ml-28 w-7/12 mt-5 font-extralight'>Build your knowledge and form your opinions and views about upcoming events in the world.</h2>
            <div className='mt-8 ml-36'>
                <div className='bg-white shadow-md shadow-red-400 w-fit rounded-xl flex'>
                    <input type='text' placeholder='Enter your email' className='p-3 w-96 h-16 mr-4 rounded-xl focus:outline-none text-xl' />
                    <div className='flex mt-3'>
                        <Button text='Signup here' variant='secondary' />
                    </div>
                </div>    
            </div>
        </div>
            <div className='bg-red-900 mt-20 p-10 pt-20 pb-20'>
                <h1 className='text-5xl font-bold text-white pb-10'>How this works ?</h1>
                <p className='text-xl text-white text-center pb-10'>Create an account and login. After login you will see bunch of events and every event has 2 options Yes and No.<br/> After analyzing the question of the event you can choose one of the mentioned options from the event.<br/> After that you'll redirects to orderbook then you can place the order. After a verification your order will placed.</p>
                <div className='mt-10 ml-4'>
                    <Card cards={array1} />
                </div>
            </div>
    
            <div className='bg-gradient-to-t from-slate-100 to-slate-200 font-semibold p-10 mt-20'>
                <h1 className='text-5xl'>What will be the return on your opinions?</h1>
                <div className='flex justify-around'>
                    {
                            array2.map((item,index) => (
                                <div key={index}>
                                    <img src={item.image} alt='hii' className='w-96 mt-10' />
                                </div>
                            ))
                        }
                </div>
            </div>

            <h1 className='text-5xl mt-20 font-bold mb-20'>Important Features</h1>
            <div className='flex gap-20 m-10 mb-20 p-2 justify-center'>
                {
                    array3.map((item,index) => {
                        return (
                            <div className='bg-blue-100 m-2 rounded-lg p-2 h-64 w-96 justify-center' key={index}>
                                < item.icon size={90} className='ml-24 mt-8'/><br/>
                                <h1 className='text-2xl font-semibold mt-5'>{item.title}</h1>
                            </div>
                        )
                })
                }
            </div>

        <div className='mt-2'>
            <Contact />
        </div>
    </div>
  )
}

export default LandingPage