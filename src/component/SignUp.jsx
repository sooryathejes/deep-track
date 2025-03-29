import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth';
import { collection, addDoc, getFirestore } from 'firebase/firestore';
import React, { useState } from 'react';
import { auth, db } from './firebase';
import { setDoc,doc } from 'firebase/firestore';
import { toast, ToastContainer } from 'react-toastify'; 
import 'react-toastify/dist/ReactToastify.css'; 

export default function SignUp() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [cpassword, setCpassword] = useState("");
    const [fname, setFname] = useState("");
    const [lname, setLname] = useState("");

    const handleRegister = async (e) => {
        e.preventDefault();
        if (password !== cpassword) {
            alert("Passwords do not match!");
            return;
        }

        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;
            console.log("User created:", user);
            
            toast.success('User Registered successfully!! Please try to login', {position: "top-center"});
            
            if(user){
                await setDoc(doc(db, "Users", user.uid), {  
                    firstName: fname,
                    lastName: lname,
                    email: email,
                    createdAt: new Date(),
                });
                
                
            }
        } catch (err) {
            toast.error(err.message, {
                position: "top-center"
            });
        }
    };

    return (
        <div className="w-full sm:max-w-[600px] ">
            <h1 className="hidden sm:block text-[24px] mb-3 "> New to DeepTrack?</h1>
            <p className="hidden sm:block mb-8">Create your account</p>

            <form className="flex flex-col items-center px-[16px] max-w-[760px] mx-auto sm:w-full"
                onSubmit={handleRegister}>

                <div className="py-[32px] w-full">
                    <input className="w-full border-b text-black outline-none" type="text"
                        placeholder="First Name (required)" required onChange={(e) => setFname(e.target.value)} />
                </div>
                <div className="py-[32px] w-full">
                    <input className="w-full border-b text-black outline-none" type="text"
                        placeholder="Last Name (required)" required onChange={(e) => setLname(e.target.value)} />
                </div>
                <div className="py-[32px] w-full">
                    <input className="w-full border-b text-black outline-none" type="email"
                        placeholder="Email (required)" required onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className="py-[32px] w-full">
                    <input className="w-full border-b text-black outline-none" type="password"
                        placeholder="Password (required)" required onChange={(e) => setPassword(e.target.value)} />
                </div>
                <div className="py-[32px] w-full">
                    <input className="w-full border-b text-black outline-none" type="password"
                        placeholder="Confirm Password (required)" required onChange={(e) => setCpassword(e.target.value)} />
                </div>

                <button type="submit" className="bg-[#ffc356] w-full p-2 rounded-full font-bold max-w-[320px] my-[32px]">
                    Create account
                </button>
            </form>

            <p className="flex w-full text-[10px] justify-center my-[32px]">
                or sign up with other services
            </p>
            <div className='w-full flex justify-center'>
                <div className="flex gap-2 max-w-[320px] py-2 px-4 border-2 rounded-full font-bold border-black cursor-pointer">
                    <img src="//images.ctfassets.net/8cd2csgvqd3m/1ukEuImLeObocDsKbiFMQC/ded84c7c390edfc2e4543966a6c882bb/Google_Logo.svg" alt="Google Logo" />
                    SignUp with Google
                </div>
            </div>

            <ToastContainer />
        </div>
    );
}