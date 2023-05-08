/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';

const Services = () => {
    const [servicesData,setSurvicesData]=useState([])

    useEffect(()=>{
        fetch("http://localhost:5000/services")
        .then(res=>res.json())
        .then(data=>{
            setSurvicesData(data)
        })
    },[])
    
    return (
        <div className='bg-[#ECEAE3]'>
            <div className='md:w-[85%] mx-auto grid grid-cols-2 md:grid-cols-4  gap-10 '>
                {
                    servicesData && servicesData.map(data => <div className='  py-10 border-black px-4 ' key={data.id}>
                        <img src={data.image} alt="" />
                        <div className='my-3'>
                    <h1 className="text-2xl font-bold">{data.name}</h1>
                            <p className='text-sm'>{data.description}</p>
                        </div>
                    </div>)
                }
            </div>
            
        </div>
    );
};

export default Services;