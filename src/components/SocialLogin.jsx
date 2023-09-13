import { GithubAuthProvider, GoogleAuthProvider, getAuth, signInWithPopup, signOut } from 'firebase/auth';
import React, { useState } from 'react';
import app from '../firebase/firebase.config';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const auth = getAuth(app);
const SocialLogin = () => {
    const [user, setUser] = useState(null);
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();

    const handleGoogleSignIn = () => {
        signInWithPopup(auth, googleProvider)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                setUser(loggedUser);
            })
            .catch(error => {
                console.log(error.message)
            })
    }

    const handleGithubSignIn = () => {
        signInWithPopup(auth, githubProvider)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                setUser(loggedUser);
            })
            .catch(error => {
                console.log(error.message);
            })
    }

    const handleSignOut = () => {
        signOut(auth)
            .then(result => {
                console.log(result);
                setUser(null)
            })
            .catch(error => {
                console.log(error.message);
            })
    }

    return (
        <div>
            {
                user && <div>
                    <h3 className='text-gray-600 font-medium'> Dear<span className='text-gray-800'> {user.displayName},</span> thank you for login</h3>
                </div>
            }
            {/* user ? logOut : login */}
            {
                user ?
                    <button className='border rounded-md border-gray-500 px-4 py-1 text-white bg-blue-800
                   hover:bg-blue-700 mb-3' onClick={handleSignOut}>Logout</button> :
                    <div>
                        <button className='border border-gray-500 px-4 py-1 text-white bg-blue-900 mb-3'
                         onClick={handleGoogleSignIn}> 
                        <FontAwesomeIcon className='mr-2' icon={faGoogle}>oo</FontAwesomeIcon>
                        Sign in with Google</button> <br />
                        <button className='border border-gray-500 px-4 py-1 text-white bg-gray-900'
                        onClick={handleGithubSignIn}>
                            <FontAwesomeIcon className='mr-2' icon={faGithub}></FontAwesomeIcon>
                            Sign in with Github</button>
                    </div>
            }

        </div>
    );
};

export default SocialLogin;