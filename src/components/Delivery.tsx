import React from 'react'
import { TbTruckDelivery } from "react-icons/tb";
import { PiHeadsetLight } from "react-icons/pi";
import { GoShieldCheck } from "react-icons/go";



export default function Delivery() {
  return (
    <div className='w-full sm:h-[500px] lg:h-[300px] flex  justify-center items-center'>

      <div  className='sm:w-full lg:w-[70%] sm:justify-center gap-y-4 sm:items-center
      flex sm:flex-col lg:flex-row lg:justify-evenly gap-x-4'>

        <div className='w-[260px] h-[130px] flex justify-center items-center  flex-col  gap-y-3'>
          <div className='w-[50px] h-[50px] rounded-full bg-black flex justify-center invalid:items-center border-stone-400 border-8'>
          <TbTruckDelivery className='text-3xl text-slate-400 pt-2'/>
          </div>
          <div>
            <h1>FREE AND FAST DELIVERY</h1>
            <p>Free delivery for all orders over $140</p>
          </div>
        </div>

        <div className='w-[260px] h-[130px] flex justify-center items-center  flex-col  gap-y-3'>
          <div className='w-[50px] h-[50px] rounded-full bg-black flex justify-center invalid:items-center border-stone-400 border-8'>
          <PiHeadsetLight  className='text-3xl text-slate-400 pt-2'/>
          </div>
          <div>
            <h1>24/7 CUSTOMER SERVICE</h1>
            <p>Friendly 24/7 customer support</p>
          </div>
        </div>


        <div className='w-[260px] h-[130px] flex justify-center items-center  flex-col  gap-y-3'>
          <div className='w-[50px] h-[50px] rounded-full bg-black flex justify-center invalid:items-center border-stone-400 border-8'>
          <GoShieldCheck 
          className='text-3xl text-slate-400 pt-2'/>
          </div>
          <div>
            <h1>MONEY BACK GUARANTEE</h1>
            <p>We reurn money within 30 days</p>
          </div>
        </div>





      </div>
    </div>
  )
}
