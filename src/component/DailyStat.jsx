import React from 'react'
import { Link } from 'react-router-dom'
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from "recharts";
import vector from './img/compare.png'

const data = [
    { name: "Sun", Time: 4000 },
    { name: "Mon", Time: 3000 },
    { name: "Tue", Time: 4000 },
    { name: "Wed", Time: 3000 },
    { name: "Thu", Time: 4000 },
    { name: "Fri", Time: 3000 },
    { name: "Sat", Time: 3000 }
];

const DailyStat = () => {
    return (
        <div className='mt-[105px]'>
            <div className=' mx-[16px]  xs:mx-[20px] sm:mx-[24px] lg:mx-[32px] p-4 xs:p-[20px] sm:p-[24px] lg:p-[32px] bg-[#fafafa]  h-[120vh]'>
                <Link to="/home">
                    <button className='px-3 py-3 bg-white rounded-full fixed'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
                    </svg>
                    </button>

                </Link>
                <div className='mt-[32px] flex  flex-col justify-center items-center'>
                    <img className='object-cover w-30 h-30' src={vector} alt="" />

                    <div className="w-full h-[300px] p-4 rounded-md ">
                        <ResponsiveContainer width="100%" height={450}>
                            <BarChart data={data} >
                                <XAxis dataKey="name" />
                                <YAxis />
                                <Tooltip />
                                <Legend />
                                <Bar dataKey="Time" fill="#4CAF50" />
                            </BarChart>
                        </ResponsiveContainer> 
                    </div>
                </div>
            </div>
        </div>
    )
}
export default DailyStat