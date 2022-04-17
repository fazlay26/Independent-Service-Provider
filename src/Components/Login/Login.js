import React from 'react';
import './Login.css'
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div class="w-full  flex flex-col items-center justify-center">
            <form class="w-full md:w-1/3 bg-white rounded-lg">
                <div class="flex font-bold justify-center mt-6">
                    <img class="h-20 w-20"
                        src="https://raw.githubusercontent.com/sefyudem/Responsive-Login-Form/master/img/avatar.svg" />
                </div>
                <h2 class="text-3xl text-center text-gray-700 mb-4">Login Form</h2>
                <div class="px-12 pb-10" />
                <div class="w-full mb-2">
                    <div class="flex items-center">
                        <i class='ml-3 fill-current text-gray-400 text-xs z-10 fas fa-user'></i>
                        <input type='text' placeholder="Username"
                            class="-mx-6 px-8  w-full border rounded px-3 py-2 text-gray-700 focus:outline-none" />
                    </div>
                </div>
                <div class="w-full mb-2">
                    <div class="flex items-center">
                        <i class='ml-3 fill-current text-gray-400 text-xs z-10 fas fa-lock'></i>
                        <input type='text' placeholder="Password"
                            class="-mx-6 px-8 w-full border rounded px-3 py-2 text-gray-700 focus:outline-none" />
                    </div>
                </div>
                <a href="#" class="text-xs text-gray-500 float-right mb-4">Forgot Password?</a>
                <button type="submit"
                    class="w-full py-2 rounded-full bg-cyan-500 text-gray-100  focus:outline-none">Button</button>
                <p className='pt-2'>New To Duffer Fitness??<Link className='underline underline-offset-1 text-sky-700' to={'/SignUp'}>Create An Account</Link></p>
            </form>
            <div className='social-media-container pt-3 text-sky-700 text-lg'>
                <div>
                    <p className=''>Login With Social Media</p>
                    <ul className='social-icon'>
                        <li className='mx-auto pt-2'><img src="https://cdn-icons-png.flaticon.com/512/2702/2702602.png" alt="" />

                            <img src="https://cdn-icons-png.flaticon.com/512/5968/5968764.png" alt="" /> </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Login;