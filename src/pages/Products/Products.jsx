/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { FaCoffee } from "react-icons/fa";
import { Link } from 'react-router-dom';
import DisplayProduct from '../DisplayProduct/DisplayProduct';

const Products = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch("http://localhost:5000/products")
            .then(res => res.json())
            .then(data => setProducts(data))

    }, [])
    return (
        <div className='w-[85%] mx-auto my-32'>
            <div>
                <p className='text-lg text-center'>--- Sip & Savor ---</p>
                <h1 className='text-4xl text-center font-bold'>Our Popular Products</h1>
                <Link to={'/addProduct'}>  <button className=' mx-auto my-5 flex items-center gap-2 bg-[#E3B577] px-2 py-1 rounded-sm'>
                    <span>Add Coffee</span><FaCoffee /></button></Link>
            </div>
            <div className='  mx-auto  grid grid-cols-2 gap-10'>
                {
                    products && products.map(product => <DisplayProduct key={product._id} coffee={product} products={products} setProducts={setProducts}  ></DisplayProduct>)
                }
            </div>
        </div>
    );
};

export default Products;