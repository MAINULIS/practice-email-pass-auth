import React, { useState } from 'react';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import app from '../firebase/firebase.config';
import Lottie from 'lottie-react';
import signUp from '../assets/signIn.json'

const auth = getAuth(app);
const SignUp = () => {
    const [error, setErrror] = useState('');
    const [success, setSuccess] = useState('')
    return (
        <div className='my-container text-center lg:text-start'>
            <h2 className='my-8 text-3xl font-bold text-neutral-700 text-center'>Please Sign Up</h2>
            <div className='grid grid-cols-1 lg:flex gap-4'>
                <div >
                    <form className='mt-12 py-4 ' >
                        <label htmlFor="Name "><span className=' text-indigo-600 font-medium  text-xl'>Name </span><br />
                            <input className='border border-gray-500 px-2 w-96 mb-2' type="text" name="name" id="name" placeholder='Your full Name' />
                        </label> <br />
                        <label htmlFor="Email"> <span className=' text-indigo-600 font-medium  text-xl'>Email</span> <br />
                            <input className='border border-gray-500 px-2 w-96 mb-2' type="email" name="email" id="email" placeholder='Your Email' />
                        </label> <br />
                        <label htmlFor="password"> <span className=' text-indigo-600 font-medium  text-xl'>Password</span> <br />
                            <input className='border border-gray-500 px-2 w-96 mb-2' type="password" name="password" id="password" placeholder='Password' />
                        </label> <br />
                        <input type="submit" value="Sign Up" className=' items-center border rounded font-medium bg-fuchsia-500 hover:bg-fuchsia-400 px-4 py-1 mt-5' />
                    </form>
                </div>
                <div className='w-full lg:w-4/5 lg:ml-auto h-3/5 sm:h-96 mt-12 p-8' >
                    <Lottie animationData={signUp} loop={true} ></Lottie>
                </div>
            </div>
        </div>
    );
};

export default SignUp;