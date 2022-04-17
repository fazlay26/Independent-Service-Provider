import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';

const Services = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div>
            <h1 className='text-5xl text-center underline underline-offset-1 text-gray-900'>My Services {services.length}</h1>
            <div className=' py-10 flex justify-center mx-8 '>
                <div className=' z-0 md:grid grid-cols-3 gap-5 w-fit'>
                    {
                        services.map(service => <Service
                            key={service.id}
                            service={service}
                        >

                        </Service>)
                    }
                </div>
            </div>


        </div>
    );
};

export default Services;