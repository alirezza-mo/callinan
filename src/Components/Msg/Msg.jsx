import React from 'react'

function Msg() {
  return (
    <>
      <div className='flex items-center justify-center gap-5 text-sm'>
        <h3 className='text-gray-200 font-danaMedium truncate w-48'> اطلاع رسانی وعده های غذایی</h3>
        <button className='bg-green-700 text-yellow-200 p-1 rounded-md cursor-pointer hover:bg-transparent hover:text-green-600 transition-all'> جزئیات </button>
        <button className='bg-red-700 text-yellow-200 p-1 rounded-md cursor-pointer hover:bg-transparent hover:text-red-600 transition-all'> رد کردن </button>
        <h3 className='text-gray-200'>3/03/1403 در ساعت 18:15</h3>
      </div>
    </>
  )
}

export default Msg