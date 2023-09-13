import { GithubAuthProvider, GoogleAuthProvider, getAuth, signInWithPopup, signOut } from 'firebase/auth';
import React, { useState } from 'react';
import app from '../firebase/firebase.config';

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
                    <h3><span>Dear {user.displayName},</span> thank you for login</h3>
                </div>
            }
            {/* user ? logOut : login */}
            {
                user ?
                    <button onClick={handleSignOut}>Logout</button> :
                    <div>
                        <button onClick={handleGoogleSignIn}>Sign in with Google</button>
                        <button onClick={handleGithubSignIn}>Sign in with Github</button>
                    </div>
            }

        </div>
    );
};

export default SocialLogin;