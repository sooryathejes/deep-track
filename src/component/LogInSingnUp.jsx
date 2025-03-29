import React, { useState } from 'react';
import LogIn from './LogIn';
import SignUp from './SignUp';

export default function LogInSignUp() {
    const [isLogin, setIsLogin] = useState(true);
  
    return (
        <div className='w-full h-[100vh] flex mt-[85px]'>
            <div className='w-full'>
                <div className="flex justify-evenly text-[13px] font-medium py-2 mx-[16px] border-b mb-[32px] mt-[32px] max-w-[768px] mx-auto sm:hidden">
                    <h1
                        className={`tracking-wider cursor-pointer transition-all duration-300 ${isLogin ? "font-bold border-b-2 border-black" : "text-gray-500"
                            }`}
                        onClick={() => setIsLogin(true)}
                    >
                        LOG IN
                    </h1>
                    <h1
                        className={`tracking-wider cursor-pointer transition-all duration-300 ${!isLogin ? "font-bold border-b-2 border-black" : "text-gray-500"
                            }`}
                        onClick={() => setIsLogin(false)}
                    >
                        CREATE ACCOUNT
                    </h1>
                </div>

                <div className="transition-opacity duration-300 sm:hidden sm:w-full ">
                    {isLogin ? <LogIn /> : <SignUp />}
                </div>
                <div className='xxs:hidden sm:flex justify-around max-w-[1304px] mx-auto p-8 gap-8'>
                    <LogIn />
                    <div className='w-[1px] h-4/4 bg-gray-300 my-[30px] '>

                    </div>
                    <SignUp />
                </div>
            </div>

        </div>
    );
}





