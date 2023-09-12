import React, { useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, updateProfile, sendEmailVerification } from "firebase/auth";
import app from '../firebase/firebase.config';
import Lottie from 'lottie-react';
import signUp from '../assets/signIn.json'
import { Link } from 'react-router-dom';

const auth = getAuth(app);
const SignUp = () => {
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('')

    const handleSubmit = event =>{
        event.preventDefault(); 
        setError('')
        setSuccess('')
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, email, password)
        // Validation
        if(!/(?=.*[a-zA-Z].*[a-zA-Z])/.test(password)){
           setError('Please use at least 2 latter in your password')
           console.log(error)
           return;
        }
        else if(!/(?=.*\d.*\d)/.test(password)){
            setError('Please use at least 2 number in your password')
            return;
        }
        else if(!/(?=.*[!@#$%&*])/.test(password)){
            setError('Please use at least a special character')
            return;
        }
        else if(password.length <6){
            setError('Password should be more that six characters')
            return;
        }
        // create email-password auth using firebase auth
        createUserWithEmailAndPassword(auth, email, password)
        .then(result =>{
            const loggedUser = result.user;
            console.log(loggedUser)
            setError('');
            event.target.reset();
            setSuccess('User has been successfully sign in')
            emailForVerification(result.user);
            updateUserData(result.user, name);
        })
        .catch(error =>{
            console.log(error.message);
            setError(error.message)
        })
    }
     
    // Email verification
    const emailForVerification =(user) =>{
        sendEmailVerification(user)
        .then(result =>{
            console.log(result);
            alert('Please check your email and verify the email')
        })
    }

    // Update user data
const updateUserData = (user, name) =>{
  updateProfile(user,{
    displayName:name
  })
  .then( () =>{
    console.log('updated user data')
  })
  .catch(error =>{
    setError(error.message)
  })
}


    return (
        <div className='my-container text-center lg:text-start'>
            <h2 className='my-8 text-3xl font-bold text-zinc-700 text-center'>Please Sign Up</h2>
            <div className='grid grid-cols-1 lg:flex gap-4'>
                <div >
                    <form onSubmit={handleSubmit} className='mt-12 py-4 ' >
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
                        <input type="submit" value="Sign Up" className=' items-center border rounded font-medium bg-fuchsia-500 hover:bg-fuchsia-400 px-4 py-1 mt-5' />
                        <p className='text-zinc-600'><small>Already have an account? please </small> <Link  className='text-blue-600 underline' to="/login">Login</Link></p>
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