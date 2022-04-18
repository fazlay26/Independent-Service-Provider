import React from 'react';
import './CustomerReview.css'

const CustomerReview = () => {
    return (
        <div>
            <div className='review-banner flex justify-center items-center mx-auto mb-10'>
                <div>
                    <h1 className='text-5xl text-zinc-200 text-center'>Get Trial Version Of Muscle <br />
                        Building Program</h1>
                    <p className='text-zinc-200 text-2xl py-2'>Get for free my trial version of Muscle Building program! My two-phase program is <br /> designed to build muscle via the right balance of mass-building exercises..</p>
                    <div>
                        <button className='font-bold flex mx-auto  border-2 border-sky-500 text-stone-300 p-3 mt-8 hover:bg-sky-500'>Download For Free</button>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default CustomerReview;