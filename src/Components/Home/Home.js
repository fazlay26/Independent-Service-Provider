import React from 'react';
import FreeTrial from '../FreeTrial/FreeTrial';
import Services from '../Services/Services';
import './Home.css'

const Home = () => {
    return (
        <div>
            <div className='banner flex justify-center items-center'>

                <div>
                    <div className='p-2'>
                        <h1 data-aos="fade-right" className='text-stone-300 text-6xl'>Healthy Body</h1>
                        <h1 data-aos="fade-left" className='text-stone-300 text-6xl'>Fresh Mind</h1>
                        <h1 className='text-stone-300 text-6xl pb-2'>By Duffer Fitness</h1>
                        <p data-aos="fade-right" className='text-stone-300 text-2xl'><small>World is commiting to making particiation in the harrasment
                            <br /> free expereince for everyone regardlesss</small></p>
                    </div>
                    <button data-aos="fade-left" className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded ml-2'>Join Classes</button>
                </div>
            </div>

            <div className='mr-20 py-6'>
                <Services></Services>
            </div>
            <div>
                <FreeTrial></FreeTrial>
            </div>

        </div>
    );
};

export default Home;