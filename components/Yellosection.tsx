import Image from 'next/image'
import React from 'react'
import { Button } from './ui/button'

const Yellosection = () => {
  return (
    <div className='flex flex-col md:flex-row mt-20 sm:p-2'>
      <img src="/ygirl.png" alt="y" className="w-full md:w-1/2 lg:w-auto" style={{ maxWidth: "550px", maxHeight: "500px" }} />

      <div className='p-6 md:mt-10 md:ml-12 flex flex-col justify-center'>
        <div>
          <h1 className='text-4xl md:text-5xl lg:text-7xl font-bold'>PAYDAY <br />
            SALE NOW</h1>
          <p className='text-lg md:text-xl lg:text-2xl mt-5'>Spend minimal $100 get 30% off <br />
            voucher code for your next purchase</p>
          <p className='text-lg md:text-xl lg:text-2xl mt-5 font-semibold'>1 June - 10 June 2021</p>
          <p className='text-lg md:text-xl lg:text-2xl'>*Terms & Conditions apply</p>

          <Button className='mt-5'>Shop Now</Button>
        </div>
      </div>
    </div>
  )
}

export default Yellosection
