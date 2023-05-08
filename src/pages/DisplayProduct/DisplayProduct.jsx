/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import { FaEye, FaRegEdit, FaTrashAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const DisplayProduct = ({ coffee, products, setProducts }) => {
    const { _id, name, quantity, supplier, taste, photo } = coffee;
    const handelDelletProduct = (id) => {
        Swal.fire({
            title: `Are you sure? ${name}`,
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/deleteProducts/${id}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(data => {
                        const remainingProduct = products.filter(product => product._id !== id)
                        setProducts(remainingProduct)
                    })
                Swal.fire(
                    'Deleted!',
                    'Your file has been deleted.',
                    'success'
                )
            }
        })
        console.log(id);
       

    }
    return (
        <div className="card card-side bg-base-100 shadow-xl py-10">
            <figure><img src={photo} alt="Movie" /></figure>
            <div className="flex justify-between w-full pr-4 ml-7 items-center">
                <div>
                    <h2 className="card-title">Name: {name}</h2>
                    <p>Quantity:{quantity}</p>
                    <p>Supplier: {supplier}</p>
                    <p>Taste:{taste}</p>
                </div>
                <div className="card-actions justify-end">
                    <div className="btn-group btn-group-vertical space-y-4">
                        <Link to={`/view/${_id}`}><FaEye className='text-3xl'></FaEye> </Link>  
                        <Link to={`/updateProduct/${_id}`}>
                            <button className=""><FaRegEdit className='text-3xl'></FaRegEdit></button>
                        </Link>
                        <button onClick={() => handelDelletProduct(_id)}
                            className=""><FaTrashAlt className='text-3xl'></FaTrashAlt></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DisplayProduct;