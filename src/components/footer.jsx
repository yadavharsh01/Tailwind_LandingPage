import React from 'react'

const Footer = () => {
  return (
    <div className='flex flex-col gap-12 md:flex-row justify-between'>
      <ul className='flex gap-6 text-gray-400'>
        <li>
            <a href="#">Facebook</a>
        </li>
         <li>
            <a href="#">Instagram</a>
        </li>        
        <li>
            <a href="#">X</a>
        </li>
        </ul>
        <div className='flex gap-4'>
             <p className=''>😉</p>
          <div>
            <p className='font-thin'>
              Have Any Questions?

            </p>
            <a href="#" className='font-medium'>Talk to a Specialist</a>
          </div>
        </div>
    </div>
  )
}

export default Footer