import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import CustomLink from '../CustomLink/CustomLink';

const Navbar = () => {
    const [user, loading, error] = useAuthState(auth);
    return (
        <div className='sticky top-0 bg-white px-12 py-8 flex justify-center md:justify-between z-10'>
            <div className='hidden
             md:block'>
                <Link className='font-sans font-bold text-xl text-gray-600' to={'/'}>Duffer Fitness</Link>
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