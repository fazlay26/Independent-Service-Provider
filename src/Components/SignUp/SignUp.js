import React, { useState } from 'react';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import LoginSocial from '../LoginSocial/LoginSocial';
import './SignUp.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SignUp = () => {
    const [showPass, setShowPass] = useState(false);
    let navigate = useNavigate();
    let location = useLocation();
    let from = location.state?.from?.pathname || "/";
    const [userInfo, setUserInfo] = useState({
        email: "",
        pass: "",
        confirmPass: "",
    });
    const [errors, setErrors] = useState({
        email: "",
        pass: "",
        general: "",
    });
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        hookError,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

    const handleEmail = e => {
        const emailRegex = /\S+@\S+\.\S+/;
        const validEmail = emailRegex.test(e.target.value);
        if (validEmail) {
            setUserInfo({ ...userInfo, email: e.target.value });
            setErrors({ ...errors, email: "" });
        }
        else {
            setErrors({ ...errors, email: "Invalid email" });
            setUserInfo({ ...userInfo, email: "" });
        }
    }
    const handlePass = e => {
        const passwordRegex = /.{6,}/;
        const validPassword = passwordRegex.test(e.target.value);
        if (validPassword) {
            setUserInfo({ ...userInfo, pass: e.target.value });
            setErrors({ ...errors, pass: "" });
        }
        else {
            setErrors({ ...errors, pass: "Minimum 6 characters!" });
            setUserInfo({ ...userInfo, pass: "" });
        }
    }
    const handleConfirmPass = e => {
        if (e.target.value === userInfo.pass) {
            setUserInfo({ ...userInfo, confirmPass: e.target.value });
            setErrors({ ...errors, pass: "" });
        } else {
            setErrors({ ...errors, pass: "Password's don't match" });
            setUserInfo({ ...userInfo, confirmPass: "" });
        }
    }
    if (user) {
        navigate('/home');
    }
    const handleSignUp = e => {
        e.preventDefault()
        createUserWithEmailAndPassword(userInfo.email, userInfo.pass);
        toast('verification email sent')
    }
    return (
        <div className="w-full  flex flex-col items-center justify-center">
            <form onSubmit={handleSignUp} className="w-full md:w-1/3 bg-white rounded-lg">
                <div className="flex font-bold justify-center mt-6">
                    <img className="h-20 w-20"
                        src="https://raw.githubusercontent.com/sefyudem/Responsive-Login-Form/master/img/avatar.svg" alt='' />
                </div>
                <h2 className="text-3xl text-center text-gray-700 mb-4">Registration Form</h2>
                <div className="px-12 pb-10" />
                <div className="w-full mb-2">
                    <div className="flex items-center">
                        <i className='ml-3 fill-current text-gray-400 text-xs z-10 fas fa-user'></i>
                        <input onChange={handleEmail} type='text' placeholder="Email"
                            className="-mx-6  w-full border rounded px-3 py-2 text-gray-700 focus:outline-none" required />
                    </div>
                    {errors?.email && <p className="text-red-600">{errors.email}</p>}
                </div>
                <div className="w-full mb-2">
                    <div className="relative flex items-center">
                        <i className='ml-3 fill-current text-gray-400 text-xs z-10 fas fa-lock'></i>
                        <input onChange={handlePass} type={showPass ? 'text' : 'password'} placeholder="Password"
                            className="-mx-6  w-full border rounded px-3 py-2 text-gray-700 focus:outline-none" required />
                        <img onClick={() => setShowPass(!showPass)} className='cursor-pointer eye w-1/12 h-1/12 absolute  right-5' src="https://cdn-icons.flaticon.com/png/512/4298/premium/4298899.png?token=exp=1650302577~hmac=4a37ef70d20f5b29140f5578ef31acc2" alt="" />
                    </div>
                    {errors?.pass && <p className="text-red-600">{errors.pass}</p>}
                </div>
                <div className="w-full mb-2">
                    <div className=" relative flex items-center">
                        <i className='ml-3 fill-current text-gray-400 text-xs z-10 fas fa-lock'></i>
                        <input onChange={handleConfirmPass} type={showPass ? 'text' : 'password'} placeholder=" Confirm Password"
                            className="-mx-6  w-full border rounded px-3 py-2 text-gray-700 focus:outline-none" required />
                        <img onClick={() => setShowPass(!showPass)} className='cursor-pointer eye w-1/12 h-1/12 absolute  right-5' src="https://cdn-icons.flaticon.com/png/512/4298/premium/4298899.png?token=exp=1650302577~hmac=4a37ef70d20f5b29140f5578ef31acc2" alt="" />
                    </div>
                </div>
                <button type="submit"
                    className="w-full py-2 rounded-full bg-cyan-500 text-gray-100  focus:outline-none">Register</button>
                <p className='text-red-600'> {hookError && hookError.message}</p>
                <p className='pt-2'>Already Have An Account?<Link className='underline underline-offset-1 text-sky-700' to={'/Login'}>Please Login</Link></p>
            </form>
            {/* <div className='social-media-container pt-3 text-sky-700 text-lg'>
                <div>
                    <p className=''>Login With Social Media</p>
                    <ul className='social-icon'>
                        <li className='mx-auto pt-2'><img src="https://cdn-icons-png.flaticon.com/512/2702/2702602.png" alt="" />

                            <img src="https://cdn-icons-png.flaticon.com/512/5968/5968764.png" alt="" /> </li>
                    </ul>
                </div>
            </div> */}
            <LoginSocial></LoginSocial>
            <ToastContainer
                position="top-right"
            />
        </div>
    );
};

export default SignUp;