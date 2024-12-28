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
  const [selectedOption, setSelectedOption] = useState("yes");


  function handlebutton1 () {
    setSelectedOption("yes")
  }
  function handlebutton2 () {
    setSelectedOption("no")
  }

  function handleQuantityIncrease() {
    setQuantity(prev =>Math.min( prev + 1,10))
  }
  function handleQuantityDecrease() {
    setQuantity(prev => Math.max(prev - 1, 1))
  }

    let youPut
    let youGet
    if(selectedOption === "yes") {
        youPut = eventDetails.yes * quantity;
        youGet = eventDetails.no * quantity;
    } else {
        youPut = eventDetails.no * quantity;
        youGet = eventDetails.yes * quantity;
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
                      <OptionButton text={`Yes ${eventDetails.yes}`} variant={selectedOption === "yes" ? "secondaryYes" : "primaryYes"} onClick={handlebutton1}></OptionButton>
                      <OptionButton text={`No ${eventDetails.no}`} variant={selectedOption === "no" ? "secondaryNo" : "primaryNo"} onClick={handlebutton2} ></OptionButton>
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
                <Button text="Place Order" variant='secondary' buttonwidth='w-[350px]'></Button>
            </div>
      </SheetContent>
    </Sheet>
  )
}

export default CheckoutPage