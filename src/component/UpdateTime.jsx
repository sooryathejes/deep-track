import React from 'react'
import { Link } from 'react-router-dom'
import vector from './img/Programming_illustration__1_-removebg-preview.png'

const UpdateTime = () => {
    return (
        <div className='mt-[105px]'>
            <div className=' mx-[16px]  xs:mx-[20px] sm:mx-[24px] lg:mx-[32px] p-4 xs:p-[20px] sm:p-[24px] lg:p-[32px] bg-[#fafafa]'>
                <Link to="/home">
                    <button className='px-3 py- rounded-full fixed'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
                    </svg>
                    </button>

                </Link>
                <div className='mt-[32px] flex justify-center flex-col items-center'>
                    <img className='object-cover w-30 h-30' src={vector} alt="" />
                    <div className='grid grid-cols-2 gap-2'>
                        <button className='px-3 py-1 border-2 border-green-500 rounded-full'>Start</button>
                        <button className='px-3 py-1 border-2 border-black rounded-full'>Start Break</button>
                        <button className='px-3 py-1 border-2 border-black rounded-full'>End Break</button>
                        <button className='px-3 py-1 border-2 border-red-500 rounded-full'>End</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default UpdateTime
