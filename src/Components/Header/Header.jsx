import React from 'react'

import './Header.css'

function Header() {
  return (
    <>
    <header className='w-full flex items-center justify-between p-3 absolute top-0'>
      <img src="images/logo.png" alt="" />
      <div className='flex items-center justify-between gap-4'>
      <img src="images/logo-uni.png" alt="" className='w-16 h-16'/>
      <h1 className='font-dana font-bold text-gray-600 text-xl'> پردیس شهید رجایی فرخشهر </h1>
      </div>
    </header>
    </>
  )
}

export default Header