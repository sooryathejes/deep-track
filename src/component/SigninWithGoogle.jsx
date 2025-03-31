import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import React from 'react';
import { auth, db } from './firebase'; 
import { toast } from 'react-toastify';
import { setDoc, doc } from "firebase/firestore"; 

const SigninWithGoogle = () => {
    const googleLogin = () => {
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider).then(async (result) => {
            console.log(result);
            const user = result.user;
            if (user) {
                await setDoc(doc(db, "Users", user.uid), {
                    firstName: user.displayName,
                    lastName: "", 
                    email: user.email,
                });

                toast.success("User logged in successfully", {
                    position: "top-center"
                });

                window.location.href = "/home";
            }
        }).catch((error) => {
            console.error("Error during login:", error.message);
            toast.error("Login failed: " + error.message, { position: "top-center" });
        });
    };

    return (
        <div>
            <div className='w-full flex justify-center'>
                <div className="flex gap-2 max-w-[320px] py-2 px-4 border-2 rounded-full font-bold border-black cursor-pointer" onClick={googleLogin}>
                    <img src="//images.ctfassets.net/8cd2csgvqd3m/1ukEuImLeObocDsKbiFMQC/ded84c7c390edfc2e4543966a6c882bb/Google_Logo.svg" alt="Google Logo" />
                    SignUp with Google
                </div>
            </div>
        </div>
    );
};

export default SigninWithGoogle;
