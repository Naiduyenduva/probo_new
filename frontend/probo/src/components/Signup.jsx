import React, { useState } from 'react'
import { Input } from './ui/input'
import Button from './Button'
import { Link,useNavigate } from 'react-router-dom'
import { Eye, EyeOff } from 'lucide-react';



const Signup = () => {
    const [error,setError] = useState("");
    const [username,setUsername] = useState("")
    const [password,setPassword] = useState("")
    const [passwordVisible, setPasswordVisisble] = useState(false)

    const togglePasswordVisible = () => {
        setPasswordVisisble((prevState) => !prevState)
    }

    const navigate = useNavigate();

    const handleUsernameChange = (e) => {
        setUsername(e.target.value)
     }

    const handlePasswordChange = (e) => {
        setPassword(e.target.value)
     }

    const  handleSignup = async () => {
        try {
            const response = await fetch("https://probo-new.vercel.app/api/v1/user/signup",{
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                  },
                  body: JSON.stringify({username,password})
            })
                if(response.ok) {
                    alert('signup successfully');
                    navigate("/login")
                } else {
                    throw new Error('username already exists');
                }
        } catch (error) {
            setError(error.message)
        }
    } 
  return (
    <div className='p-5 grid justify-center h-screen'>
        <div className='grid justify-center p-10 shadow-md rounded-xl bg-slate-50 h-[390px] mt-16'>
            <h1 className='font-semibold text-2xl'>Signup</h1>
            <Input type="text" placeholder="Username"  name='username' required={true} value={username} onChange={handleUsernameChange} className="w-72 h-10" />
            <div className='flex gap-3'>
                <Input type={passwordVisible ? "text": "password"} placeholder="Password" name="password" required={true} value={password} onChange={handlePasswordChange} className="w-64 h-10" />
                {
                    passwordVisible ? (
                        <EyeOff className='mt-2 cursor-pointer' onClick={togglePasswordVisible} />
                    ):(
                        <Eye className='mt-2 cursor-pointer' onClick={togglePasswordVisible} />
                    )
                }

            </div>
            <h2>Already have an account? <Link to='/login'><span className='text-red-900 font-semibold'>Login</span></Link> </h2>
            <Button text='Signup' variant='secondary' onClick={handleSignup} />
        </div>
        <div>
            {
                error && <p className='font-semibold'>{error}</p>
            }
        </div>
    </div>
  )
}

export default Signup