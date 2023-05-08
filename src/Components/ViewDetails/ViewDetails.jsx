/* eslint-disable no-unused-vars */
import React from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import { Link, useLoaderData } from 'react-router-dom';

const ViewDetails = () => {
    const data = useLoaderData()
    console.log(data);
    const { _id, name, quantity, supplier, taste, photo, category, details } = data;
    return (
        <div className='w-[85%] mx-auto'>
            <Link to={"/"}> <span className='flex items-center gap-2 text-2xl my-10'><FaArrowLeft className='text-2xl'></FaArrowLeft> Back To Home</span></Link>
            <div className='my-24 w-[50%]  mx-auto '>
                <div className="card card-side bg-[#F4F3F0] shadow-xl rounded-none">
                    <figure className=''><img  src={photo} alt="Movie" /></figure>
                    <div className="card-body  mx-auto">
                        <h2 className="card-title">{name}</h2>
                        <p>Name: {name}</p>
                        <p>Supplier: {supplier}</p>
                        <p>Taste: {taste}</p>
                        <p>Category: {category}</p>
                        {/* <p>Details: {details}</p> */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ViewDetails;