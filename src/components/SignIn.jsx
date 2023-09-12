import { getAuth } from 'firebase/auth';
import React, { useState } from 'react';
import app from '../firebase/firebase.config';
import { Link } from 'react-router-dom';
import Lottie from 'lottie-react';
import login from '../assets/signUp.json'

const auth = getAuth(app);
const SignIn = () => {
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    
    return (
        <div className='my-container text-center lg:text-start'>
            <h3 className='my-8 text-3xl font-bold text-gray-700 text-center'>Please Sign In</h3>
           <div className='grid grid-cols-1 lg:flex gap-4'>
              <div>
              <form onSubmit='' className='mt-12 py-4 ' >
                        <label htmlFor="Name "><span className=' text-indigo-600 font-medium  text-xl'>Name </span><br />
                            <input className='border border-gray-500 px-2 w-96 mb-2' type="text" name="name" id="name" placeholder='Your full Name' required />
                        </label> <br />
                        <label htmlFor="Email"> <span className=' text-indigo-600 font-medium  text-xl'>Email</span> <br />
                            <input className='border border-gray-500 px-2 w-96 mb-2' type="email" name="email" id="email" placeholder='Your Email' required />
                        </label> <br />
                        <label htmlFor="password"> <span className=' text-indigo-600 font-medium  text-xl'>Password</span> <br />
                            <input className='border border-gray-500 px-2 w-96 mb-2' type="password" name="password" id="password" placeholder='Password' required />
                        </label> <br />
                        <p className='text-red-700'>{error}</p>
                        <p className='text-green-700'>{success}</p>
                        <input type="submit" value="Login" className=' items-center border rounded font-medium bg-lime-500 hover:bg-lime-600 px-4 py-1 mt-5' />
                        <p className='text-zinc-600'><small>New to this site? please </small> <Link  className='text-blue-600 underline' to="/signUp">Sign Up</Link></p>
                    </form>
              </div>
              <div className='w-full lg:w-4/5 lg:ml-auto h-3/5 sm:h-96 mt-12 p-8' >
                    <Lottie animationData={login} loop={true} ></Lottie>
                </div>
           </div>
        </div>
    );
};

export default SignIn;