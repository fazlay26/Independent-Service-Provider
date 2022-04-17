import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import './LoginSocial.css'

const LoginSocial = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    let navigate = useNavigate();

    if (user) {
        navigate('/')
    }

    const handleGoogleSignIn = () => {
        signInWithGoogle()
    }
    return (
        <div className='social-media-container pt-3 text-sky-700 text-lg'>
            <div>
                <p className=''>Login With Social Media</p>
                <ul className='social-icon'>
                    <li className='mx-auto pt-2'><img onClick={handleGoogleSignIn} src="https://cdn-icons-png.flaticon.com/512/2702/2702602.png" alt="" />

                        <img src="https://cdn-icons-png.flaticon.com/512/5968/5968764.png" alt="" /> </li>
                </ul>
            </div>
        </div>
    );
};

export default LoginSocial;