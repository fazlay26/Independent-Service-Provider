import React from 'react';
import CustomerReview from '../CustomerReview/CustomerReview';
import Footer from '../Footer/Footer';
import FreeTrial from '../FreeTrial/FreeTrial';
import Navbar from '../Navbar/Navbar';
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
                        <p data-aos="fade-right" className='text-stone-300 text-2xl'><small>World is commiting to making particiation in the harrasment
                            <br /> free expereince for everyone regardless</small></p>
                    </div>
                    {/* <p className='text-stone-300'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores illo, dolorum ab molestiae perspiciatis repudiandae neque harum voluptatibus eaque exercitationem ipsam tenetur officia tempore labore adipisci. Quia dicta voluptas facilis!</p> */}

                    <button data-aos="fade-left" className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded ml-2'>Join Classes</button>
                </div>
            </div>

            <div className=' py-6'>
                <Services></Services>
            </div>
            <div>
                {/* <CustomerReview></CustomerReview> */}
                <FreeTrial></FreeTrial>
            </div>

        </div>
    );
};

export default Home;