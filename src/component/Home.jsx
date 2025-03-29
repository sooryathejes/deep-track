import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div>
      <div className='flex flex-wrap  bg-gradient-to-br from-[#dcf2f7] to-[#9accd5] px-[16px] h-[200px] items-center justify-around mt-[85px]'>
        <div>
          <h1 className='py-[5px] text-4xl font-extrabold'>Hey Adith</h1>
          <p>Welcome back</p>
        </div>

        <div className='text-center' >
          <p>_ _ _</p>
          <p>Yesterdays stat</p>
        </div>
        <div className='text-center' >
          <p>_ _ _</p>
          <p>Weekly avarage</p>
        </div>
        <div className='text-center' >
          <p>_ _ _</p> 
          <p>Monthly avarage </p>
        </div>
      </div>
      <div className='flex justify-center mt-50px px-[16px] xs:px-[20px] sm:px-[24px] lg:px-[32px] mt-10 bg-white'>
        <div className='w-full grid flex-wrap gap-6 lg:grid-cols-2'>
          <div className='long flex flex-col text-center items-start justify-between bg-[#fafafa] h-[470px] w-full shadow-sm p-10 cursor-pointer'>
            <svg className='w-[70px]' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-20">
              <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
            </svg>
            <div className='flex flex-col h-[100px] justify-between'>
              <h1 className='text-start'>First name</h1>
              <Link to="/profile">
              <button className='px-3 py-1 border-2 border-black rounded-full'> View Profile</button>
              </Link>
            </div>
          </div>
          <div className='flex justify-between items-start bg-[#fafafa] h-[470px] w-full  shadow-sm flex-col p-10 cursor-pointer'>
            <svg className='w-[70px]' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-20">
              <path stroke-linecap="round" stroke-linejoin="round" d="M15.042 21.672 13.684 16.6m0 0-2.51 2.225.569-9.47 5.227 7.917-3.286-.672ZM12 2.25V4.5m5.834.166-1.591 1.591M20.25 10.5H18M7.757 14.743l-1.59 1.59M6 10.5H3.75m4.007-4.243-1.59-1.59" />
            </svg>
            <div className='flex flex-col h-[100px] justify-between'>
              <h1 className='text-start'>Enter your focus time</h1>
              <Link to='/updateTime'>
              <button className='px-3 py-1 border-2 border-black rounded-full'>Update Time</button>

              </Link>
            </div>
          </div>
          <div className='flex flex-col justify-between items-start bg-[#fafafa] h-[470px] w-full  shadow-sm cursor-pointer p-10'>
            <svg className='w-[70px]' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-20">
              <path stroke-linecap="round" stroke-linejoin="round" d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" />
            </svg>
            <div className='flex flex-col h-[100px] justify-between'>
              <h1 className='text-start'>Compare your stat with other users</h1>
              <Link to="/compare">
              <button className='px-3 py-1 border-2 border-black rounded-full'>Compare</button>
              </Link>
            </div>
          </div>
          <div className='flex flex-col justify-between items-start bg-[#fafafa] h-[470px] w-full shadow-sm p-10 cursor-pointer'>
            <svg className='w-[70px]' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-20">
              <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z" />
            </svg>
            <div className='flex flex-col h-[100px] justify-between'>
              <h1 className='text-start'>Check your daily status</h1>
              <Link to="/dailyStat">
              <button className='px-3 py-1 border-2 border-black rounded-full'>Check stat</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
