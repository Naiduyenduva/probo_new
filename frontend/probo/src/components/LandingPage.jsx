import React from 'react'
import { Link } from 'react-router-dom'
import Contact from './contact'
import Card from './Card'
import { UserRoundPen } from 'lucide-react';
import { BookA } from 'lucide-react';
import { Activity } from 'lucide-react';

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
            <h1 className='font-bold ml-3 font-mono text-3xl'>Probo</h1>
            <div className='flex justify-around gap-10 font-semibold text-xl text-red-700 mt-1'>
                <button>Home</button>
                <button>Trading</button>
                <button>Demo</button>
                <button>Careers</button>
                <button>Contact</button>
            </div>
            <div className='flex'>
                <button className='font-semibold mr-5 text-xl flex border-2 border-red-900 text-red-900 p-1 pl-5 pt-2 rounded-xl w-24'><Link to='/dashboard'>Login</Link></button>
                <button className='font-semibold mr-5 h-12 text-xl flex p-1 pl-5 pt-2 rounded-xl w-36 bg-red-600 text-white bg-gradient-to-b from-red-600 to-red-900'>Try for free</button>
            </div>
        </div>
        <div className='mt-20 mr-20'>
            <h1 className='text-8xl font-bold ml-32 mb-10'>Invest in your <span className='bg-gradient-to-b from-red-500 to-red-900 text-transparent bg-clip-text'>Point of view</span> with your valuble money</h1>
            <h2 className='text-3xl w-7/12 ml-80 mt-5 font-extralight'>Build your knowledge and form your opinions and views about upcoming events in the world.</h2>
            <div className='mt-16 bg-white p-3 pl-12 shadow-md shadow-red-400 w-fit ml-96 rounded-xl flex'>
                <input type='text' placeholder='Enter your email' className='p-2 w-96 h-16 mr-4 rounded-xl' />
                <div className='flex'>
                    <button className='font-semibold h-16 text-xl p-2 pl-5 rounded-xl w-60 bg-gradient-to-b from-red-600 to-red-900 text-white text-center' >Sign up</button>
                </div>
            </div>
        </div>
            <div className='bg-red-900 mt-20 p-10 pt-20 pb-20'>
                <h1 className='text-6xl font-bold text-white pb-10'>How this works ?</h1>
                <p className='text-2xl text-white text-center pb-10'>Create an account and login. After login you will see bunch of events and every event has 2 options Yes and No.<br/> After analyzing the question of the event you can choose one of the mentioned options from the event.<br/> After that you'll redirects to orderbook then you can place the order. After a verification your order will placed.</p>
                <div className='mt-10 ml-4'>
                    <Card cards={array1} />
                </div>
            </div>
    
            <div className='bg-gradient-to-t from-slate-100 to-slate-200 font-semibold p-10 mt-20'>
                <h1 className='text-8xl'>What will be the return on your opinions?</h1>
                <div className='flex justify-around'>
                    {
                            array2.map((item,index) => (
                                <div key={index}>
                                    <img src={item.image} alt='hii' />
                                </div>
                            ))
                        }
                </div>
            </div>

            <h1 className='text-6xl mt-28 font-bold mb-28'>Important Features</h1>
            <div className='flex gap-20 m-10 mb-28 p-2 justify-center'>
                {
                    array3.map((item,index) => {
                        return (
                            <div className='bg-blue-100 m-2 rounded-lg p-5 h-80 w-450  justify-center' key={index}>
                                < item.icon size={100} className='ml-32 mt-12' /><br/>
                                <h1 className='text-3xl font-semibold mt-5'>{item.title}</h1>
                            </div>
                        )
                })
                }
            </div>

        <div className='mt-10'>
            <Contact />
        </div>
    </div>
  )
}

export default LandingPage