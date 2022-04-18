import React, { useState } from 'react';
import './Login.css'
import 'react-toastify/dist/ReactToastify.css';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import LoginSocial from '../LoginSocial/LoginSocial';
import auth from '../../firebase.init';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { toast, ToastContainer } from 'react-toastify';

const Login = () => {
    const [showPass, setShowPass] = useState(false);
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
        signInWithEmailAndPassword,
        user,
        loading,
        hookError,
    ] = useSignInWithEmailAndPassword(auth);
    const [sendPasswordResetEmail] = useSendPasswordResetEmail(auth);
    let navigate = useNavigate();
    let location = useLocation();
    let from = location.state?.from?.pathname || "/";

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
    if (user) {
        navigate(from, { replace: true });
    }
    const handleLogin = e => {
        e.preventDefault()
        signInWithEmailAndPassword(userInfo.email, userInfo.pass)
    }
    const resetPass = async () => {
        if (userInfo.email) {

            await sendPasswordResetEmail(userInfo.email);
            toast('please check your email');
        }

    }

    return (
        <div className="w-full  flex flex-col items-center justify-center">
            <form onSubmit={handleLogin} className="w-full md:w-1/3 bg-white rounded-lg">
                <div className="flex font-bold justify-center mt-6">
                    <img className="h-20 w-20"
                        src="https://raw.githubusercontent.com/sefyudem/Responsive-Login-Form/master/img/avatar.svg" alt='' />
                </div>
                <h2 className="text-3xl text-center text-gray-700 mb-4">Login Form</h2>
                <div className="px-12 pb-10" />
                <div className="w-full mb-2">
                    <div className="flex items-center">
                        <i className='ml-3 fill-current text-gray-400 text-xs z-10 fas fa-user'></i>
                        <input onChange={handleEmail} type='text' placeholder="Email"
                            className="md:-mx-6    w-full border rounded px-3 py-2 text-gray-700 focus:outline-none" required />
                    </div>
                    {errors?.email && <p className="text-red-600">{errors.email}</p>}
                </div>
                <div className="w-full mb-2">
                    <div className=" relative flex items-center">
                        <i className='ml-3 fill-current text-gray-400 text-xs z-10 fas fa-lock'></i>
                        <input onChange={handlePass} type={showPass ? 'text' : 'password'} placeholder="Password"
                            className="md:-mx-6  w-full border rounded px-3 py-2 text-gray-700 focus:outline-none" required />
                        <img onClick={() => setShowPass(!showPass)} className='cursor-pointer eye w-1/12 h-1/12 absolute  right-6' src="https://cdn-icons-png.flaticon.com/512/633/633633.png" alt="" />
                    </div>
                    {errors?.pass && <p className="text-red-600">{errors.pass}</p>}
                </div>
                <a onClick={resetPass} href="#" className="text-xs text-gray-500 float-right mb-4">Forgot Password?</a>
                <p className='text-red-600'>{hookError && hookError.message}</p>
                <button type="submit"
                    className="w-full py-2 rounded-full bg-cyan-500 text-gray-100  focus:outline-none">LogIn</button>
                <p className='pt-2'>New To Duffer Fitness??<Link className='underline underline-offset-1 text-sky-700' to={'/SignUp'}>Create An Account</Link></p>
            </form>
            <LoginSocial></LoginSocial>
            <ToastContainer
                position="top-right"
            />
        </div>
    );
};

export default Login;