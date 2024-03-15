import React from 'react'

const Body = () => {
  return (
    <div className='space-y-4 lg:flex'>
      <div className='flex items-center justify-center lg:flex-1 order-2'>
        <img src="src\assets\back.png" alt="1nd" className=' h-64 md:h-[400px]'/>
        <img src="src\assets\srcr.jpg" alt="2st"  className='absolute mix-blend-color-burn h-64 md:h[400px]' />
      </div>
      <div className='lg:flex-1 lg:order-1'>
    <h1 className='text-5xl font-bold leading-tight'>Host Your Website In Less than 2 mins</h1>
    <p className='text-gray-400'> With Sorcerer,get your website ip and in running in less than 2 mins with the most competetive pricing packages.</p>
    <form action="" className='flex flex-col gap-6 md:flex-row'>
      <input type="email" placeholder='Enter Mail' className='rounded-md px-4 py-3 placeholder:text-gray-400 ' />
      <button className='rounded-md px-4 py-3 bg-blue-400 hover:bg-blue-600 text-white'>Join WaitList</button>
    </form>
    <div>
      
      <p className='text-gray-400'>👍 No Spam , ever . Unsubscribe Anytime</p>
    </div>
    
      </div>
    </div>

  )
}

export default Body