import React from 'react'
import Cards from './Cards'
import ticket from "./assets/icons8-ticket-80 (1).png";
import Contact from "./assets/Contact.png"
import QR from "./assets/QR.png"

const Opening = () => {
  return (
    <div className='pb-25 pt-40 bg-[#fbfbfc] '>
        <div className='flex flex-col justify-center items-center mb-85'>
            <h1 className='mb-6 text-center text-6xl font-bold bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-400 bg-clip-text text-transparent'>Modern Event Management</h1>
            <p className='text-center text-xl text-gray-500'>Register for events instantly and check in with a simple QR code scan.</p>
            <p className='mb-6 text-xl text-gray-500 text-center'>Perfect for college events, conferences, and meetups.</p>
            <button className='cursor-pointer text-semibold rounded-lg text-white bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-400 w-32 justify-self-center'>Get Started &#8594;</button>
        </div>
        <div className='flex flex-col justify-center items-center'>
            <h2 className='text-3xl font-bold'>How It Works</h2>
            <div className='flex gap-8'>
                <Cards image={ticket} heading={`1.Register`} description={`Browse events and register with a single click. No complicated forms.`}/>
                <Cards image={QR} heading={`2.Get QR Code`} description={`Instantly receive your unique QR code ticket in your dashboard.`}/>
                <Cards image={Contact} heading={`3.Check In`} description={`Show your QR code at the entrance for instant check-in. That's it!`}/>
            </div>
        </div>
    </div>
  )
}

export default Opening