import React, { useState } from 'react'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from './firebase'
import { toast } from 'react-toastify'
import { Link } from 'react-router-dom';

export default function LogIn() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleLogin = async (e) => {
        e.preventDefault(); 
        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            window.location.href = "/home";
            console.log("user logged in:", userCredential.user);
            toast.success("Login Successful!", { position: "top-center" });
        } catch (error) {
             error = "The email you entered is't registared yet"
            toast.error('The email you entered is not registered yet', { position: "top-center" });
        }
    };
    
    return (
        <div className='w-full sm:max-w-[600px] px-[16px]'>
            <h1 className='hidden sm:block text-[24px] mb-3 '>Log in</h1>
            <p className='hidden sm:block mb-8'>Sign in to access your account</p> 
            <form onSubmit={handleLogin} className="flex flex-col items-center  max-w-[760px] mx-auto sm:w-full ">
                <div className="py-[32px] w-full">
                    <input className="w-full border-b text-black outline-none" type="email" placeholder="Email address (required)" onChange={(e) => setEmail(e.target.value)} value={email} />
                </div>
                <div className="py-[32px] w-full">
                    <input className="w-full border-b text-black outline-none" type="password" placeholder="Password (required)" onChange={(e) => setPassword(e.target.value)} value={password} />
                </div>
                    <button className="bg-[#ffc356] w-[288px]  p-2 rounded-full font-bold max-w-[320px] my-[32px]">
                        Log in
                    </button>
                <p className="flex text-[10px] justify-center my-[32px]">
                    or log in with other services
                </p>
                <div className="flex gap-2 max-w-[320px] py-2 px-4 border-2 rounded-full font-bold border-black cursor-pointer">
                    <img src="//images.ctfassets.net/8cd2csgvqd3m/1ukEuImLeObocDsKbiFMQC/ded84c7c390edfc2e4543966a6c882bb/Google_Logo.svg" alt="Google Logo" />
                    Continue with Google
                </div>
            </form> 
        </div>
    )
}