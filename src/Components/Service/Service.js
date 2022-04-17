import React from 'react';
import { Link } from 'react-router-dom';

const Service = (props) => {
    const { name, img, description, price } = props.service
    return (
        <div className=' block p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100'>
            <img className='rounded-md pb-3' src={img} alt="" />
            <h1 className='pb-3'>Name:{name}</h1>
            <p className='pb-3'>{description}</p>
            <p className='pb-3'>Price:${price}</p>

            <Link to={'/Chekout'} className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded pb-3'>Booking Now</Link>

        </div>
    );
};

export default Service;