import React, { useEffect, useState } from 'react'
import { auth, db } from './firebase'
import { toast } from 'react-toastify'
import { Link } from 'react-router-dom'
import { doc, getDoc } from 'firebase/firestore'


const Profile = () => {
    let [userDetails, setUserDetails] = useState(null)
    const fetchUserData = async () => {
        auth.onAuthStateChanged(async (user) => {
            if (!user) {
                console.log("No user is signed in.");
                return;
            }
            console.log("User ID:", user.uid);

            const docRef = doc(db, "Users", user.uid);
            const docSnap = await getDoc(docRef);

            if (docSnap.exists()) {
                console.log("User data:", docSnap.data());
                setUserDetails(docSnap.data());
            } else {
                console.log("User document not found in Firestore.");
            }
        });
    };

    useEffect(() => {
        fetchUserData()
    }, [])
    let handleLogOut = async () => {
        try {
            await auth.signOut()
            window.location.href = "/"
            console.log("logged out successfully");

        } catch (error) {
            console.error('Error logging out :', error.message);

        }
    }
    return (
        <div className='mt-[105px]'>
            {userDetails ? (
                <div className=' mx-[16px]  xs:mx-[20px] sm:mx-[24px] lg:mx-[32px] p-4 xs:p-[20px] sm:p-[24px] lg:p-[32px] bg-[#fafafa]'>
                    <Link to="/home">
                        <button className='px-3 py- rounded-full'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
                        </svg>
                        </button>
                    </Link>
                    <div className='mt-[32px]'>
                        <div>
                            <h1 className='text-[16px] font-extrabold'>
                                MY PROFILE
                            </h1>
                            <p className='text-[12px]'>Check and edit your personal details</p>
                        </div>
                        <div className='mt-12'>
                            <div className='py-3'>
                                <p className='text-[14px]'>First Name(required)</p>
                                {/* <input className='border-b w-full bg-[#fafafa] outline-none' type="text" /> */}
                                <p>{userDetails.firstName}</p>
                            </div>
                            <div className='py-3'>
                                <p className='text-[14px]'>Last Name(required)</p>
                                {/* <input className='border-b w-full bg-[#fafafa] outline-none' type="text" /> */}
                                <p>{userDetails.lastName}</p>
                            </div>
                            <div className='py-3'>
                                <p className='text-[14px]'>Email Address(required)</p>
                                {/* <input className='border-b w-full bg-[#fafafa] outline-none' type="text" /> */}
                                <p>{userDetails.email}</p>
                            </div>
                        </div>
                        <div className='flex justify-center items-center w-full h-40'>
                            <button className='px-3 py-1 border-2 border-black rounded-full' onClick={handleLogOut}> Log Out</button>
                        </div>
                    </div>
                </div>

            ) : (
                <div className='w-full h-[100vh] flex justify-center items-center'>
                    <p>Loading...</p>
                </div>

            )}
        </div>
    )
}
export default Profile