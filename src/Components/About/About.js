import React from 'react';

const About = () => {
    return (
        <section className='px-4 py-32 mx-auto max-w-7xl'>
            <div className='grid items-center w-full grid-cols-1 gap-10 mx-auto md:w-4/5 lg:grid-cols-2 xl:gap-32'>
                <div className='order-2 md:order-1'>
                    <h1 className='font-semibold text-2xl'>My name is Fazle Rabbi. I am a student of CSE department. I used to watch a lot of videos on YouTube about web development, but I couldn't keep up. Then I started this course. Alhamdulillah: I have learned a lot from this course which I could never have done if I had tried it alone.My Goal is, I will finish this course well and try to find a job and try to do something for my father and mother. This course has taught me how to work hard to learn something</h1>
                </div>
                <div className='order-1 md:order-2'>
                    <div className='md:w-full h-full bg-gray-200 rounded-lg'>
                        <img
                            src='https://cdn-icons.flaticon.com/png/512/4202/premium/4202831.png?token=exp=1650218940~hmac=e70bf54b94265341fee93254ce60ac18'
                            alt=''
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;