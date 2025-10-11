import React from 'react'

const UpcomingList = () => {
  return (
    <div className='pt-20 flex flex-col items-center pb-30'>
        <h1 className='text-3xl font-bold'>Upcoming Events</h1>
        <div className="rounded-xl mt-8 gap-3 py-6 px-6 border border-gray-200 bg-white flex flex-col justify-center items-center">
            <h2 className='text-2xl font-semibold'>No Upcoming Events</h2>
            <p className='text-gray-500'>Check back later for new events!</p>
        </div>
    </div>
  )
}

export default UpcomingList