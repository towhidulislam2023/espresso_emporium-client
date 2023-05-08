/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';

const InstagramView = () => {
    const [imgData,setimg]=useState([])
    useEffect(()=>{
        fetch("http://localhost:5000/images")
        .then(res=>res.json())
        .then(data=>setimg(data))
    },[])
    return (
        <div className='w-[85%] mx-auto'>
            <p className='text-center'>Follow Us Now</p>
            <h1 className="text-3xl text-center font-bold">Follow on Instagram</h1>
            
            <div className='grid grid-cols-4 gap-10 my-12 '>
                {
                    imgData && imgData.map(img => <img key={img.id} src={img.image} alt="" />)
                }
            </div>
        </div>
    );
};

export default InstagramView;