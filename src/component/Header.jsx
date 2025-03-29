import React from 'react'
import logo from './img/f2eabe67-7e29-4b74-a2e6-be881bb9d97f.png'

export default function Header() {
    return (
        <div className='flex w-full h-[85px] bg-white shadow-sm justify-center items-center fixed top-0'>
            <img className='w-[85px] h-[85px]' src={logo} alt=""/>
        </div>
    )
}