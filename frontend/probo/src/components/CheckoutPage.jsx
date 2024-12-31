import React, { useState } from 'react'
import OptionButton from '../components/OptionButton'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet"
import Button from './Button'


const CheckoutPage = ({onClose,eventDetails}) => {
  const [quantity,setQuantity] = useState(1);
  const [orderType, setOrderType] = useState("yes");
  const [error,setError] = useState(null)
  const eventId = eventDetails._id;
  const eventName = eventDetails.title


  function handlebutton1 () {
    setOrderType("yes")
  }
  function handlebutton2 () {
    setOrderType("no")
  }

  function handleQuantityIncrease() {
    setQuantity(prev =>Math.min( prev + 1,10))
  }
  function handleQuantityDecrease() {
    setQuantity(prev => Math.max(prev - 1, 1))
  }

    let youPut
    let youGet
    if(orderType === "yes") {
        youPut = eventDetails.yes * quantity;
        youGet = eventDetails.no * quantity;
    } else {
        youPut = eventDetails.no * quantity;
        youGet = eventDetails.yes * quantity;
    }

    let totalQuantity = quantity;

    const handleOrderSubmit = async () => {
      try {
          const price = orderType === "yes" ? eventDetails.yes : eventDetails.no;
          const token = localStorage.getItem("token");
          const response = await fetch("https://probo-new.vercel.app/api/v1/order/order",{
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              "token": token
            },
            body: JSON.stringify({eventId,eventName,orderType,youPut,youGet,quantity,totalQuantity,price})
          })
          if(response.ok) {
            alert("order placed successfully")
          } else {
            throw new Error ("something happened")
          }
      } catch (error) {
        setError(error.message)
      }
    }

  return (
    <Sheet open onOpenChange={onClose}>
      <SheetContent side="right">
        <SheetHeader>
          <SheetTitle>{eventDetails.title}</SheetTitle>
          <SheetDescription>{eventDetails.description}</SheetDescription>
        </SheetHeader>
            <div>
                <div className='bg-white w-fit grid justify-center p-2 gap-5'>
                    <div className='flex gap-5'>
                      <OptionButton text={`Yes ${eventDetails.yes}`} variant={orderType === "yes" ? "secondaryYes" : "primaryYes"} onClick={handlebutton1}></OptionButton>
                      <OptionButton text={`No ${eventDetails.no}`} variant={orderType === "no" ? "secondaryNo" : "primaryNo"} onClick={handlebutton2} ></OptionButton>
                    </div>
                    <div className='flex gap-5'>
                      <p>Quantity</p>
                      <div className='flex gap-3'>
                        <button onClick={handleQuantityDecrease} className='bg-blue-200 w-5 rounded-xl'>-</button>
                        <h2 className=''>{quantity}</h2>
                        <button onClick={handleQuantityIncrease} className='bg-blue-200 w-5 rounded-xl'>+</button>
                      </div>
                    </div>
                    <div className='flex justify-around bg-custBackground p-2 rounded-lg'>
                      <h1 className='w-20 text-center font-semibold'>You Put<br/> {youPut}</h1>
                      <h1 className='w-20 text-center font-semibold'>You get<br/> {youGet}</h1>
                    </div>
                </div>
                <Button text="Place Order" variant='secondary' buttonwidth='w-[350px]' onClick={handleOrderSubmit}></Button>
            </div>
      </SheetContent>
    </Sheet>
  )
}

export default CheckoutPage