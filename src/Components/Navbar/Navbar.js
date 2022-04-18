import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import CustomLink from '../CustomLink/CustomLink';

const Navbar = () => {
    const [user, loading, error] = useAuthState(auth);
    return (
        <div className='sticky top-0 bg-white px-12 py-5 flex justify-center md:justify-between z-10 items-center'>
            <div className='hidden
             md:block'>
                <div className='flex items-center'>
                    <img className='w-1/12 h-1/2' src="https://cdn-icons.flaticon.com/png/512/2112/premium/2112333.png?token=exp=1650273340~hmac=664bd1453f177263f9053732f79743b1" alt="" />
                    <Link className='font-sans font-bold text-xl text-gray-600' to={'/'}>Duffer Fitness</Link>
                </div>
            </div>
            <div className='flex gap-4 text-xl'>
                <CustomLink to={'/Home'}>Home</CustomLink>
                <CustomLink to={'/Blogs'}>Blogs</CustomLink>
                {/* <CustomLink to={'/Login'}>Login</CustomLink> */}
                {user ? <button onClick={() => signOut(auth)}>signOut ({user.email})</button> : <CustomLink to={'/Login'}>Login</CustomLink>}
                <CustomLink to={'/About'}>About Me</CustomLink>

            </div>

        </div>
    );
};

export default Navbar;