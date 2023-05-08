/* eslint-disable no-unused-vars */
import React from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import { Link, useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';

const UpdateProduct = () => {
    const data = useLoaderData()
    const { _id, name, quantity, supplier, taste, photo, category, details } = data;
    const handelUpdateProduct = (event) => {
        event.preventDefault();
        const form = event.target;

        const name = form.name.value;
        const quantity = form.quantity.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const details = form.details.value;
        const photo = form.photo.value;

        const updatedCoffee = { name, quantity, supplier, taste, category, details, photo }


        fetch(`http://localhost:5000/updateproducts/${_id}`,{
            method:"PUT",
            headers:{
                "content-type":"application/json"
            },
            body: JSON.stringify(updatedCoffee)
        })
        .then(res=>res.json())
        .then(data=>{
            if (data.modifiedCount>0) {
                Swal.fire(
                    'Good job!',
                    'You clicked the button!',
                    'success'
                )
            }
        })
    }
    return (
        <div className='w-[85%] mx-auto'>
            <Link to={"/"}> <span className='flex items-center gap-2 text-2xl my-10'><FaArrowLeft className='text-2xl'></FaArrowLeft> Back To Home</span></Link>
            <div className='my-24'>
                <div className="bg-[#F4F3F0] p-24 ">
                    <h2 className="text-3xl font-extrabold text-center shadow-inherit">Update Existing Coffee Details</h2>
                    <p className='text-center w-[70%]  mx-auto my-10'>It is a long established fact that a reader will be distraceted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.</p>
                    <form onSubmit={handelUpdateProduct}>
                        {/* form name and quantity row */}
                        <div className="md:flex mb-8">
                            <div className="form-control md:w-1/2">
                                <label className="label">
                                    <span className="label-text">Coffee Name</span>
                                </label>
                                <label className="input-group">
                                    <input type="text" name="name" defaultValue={name} placeholder="Coffee Name" className="input input-bordered w-full" />
                                </label>
                            </div>
                            <div className="form-control md:w-1/2 ml-4">
                                <label className="label">
                                    <span className="label-text">Available Quantity</span>
                                </label>
                                <label className="input-group">
                                    <input type="text" name="quantity" defaultValue={quantity} placeholder="Available Quantity" className="input input-bordered w-full" />
                                </label>
                            </div>
                        </div>
                        {/* form supplier row */}
                        <div className="md:flex mb-8">
                            <div className="form-control md:w-1/2">
                                <label className="label">
                                    <span className="label-text">Supplier Name</span>
                                </label>
                                <label className="input-group">
                                    <input type="text" name="supplier" defaultValue={supplier} placeholder="Supplier Name" className="input input-bordered w-full" />
                                </label>
                            </div>
                            <div className="form-control md:w-1/2 ml-4">
                                <label className="label">
                                    <span className="label-text" >Taste</span>
                                </label>
                                <label className="input-group">
                                    <input type="text" name="taste" defaultValue={taste} placeholder="Taste" className="input input-bordered w-full" />
                                </label>
                            </div>
                        </div>
                        {/* form category and details row */}
                        <div className="md:flex mb-8">
                            <div className="form-control md:w-1/2">
                                <label className="label">
                                    <span className="label-text">Category</span>
                                </label>
                                <label className="input-group">
                                    <input type="text" name="category" defaultValue={category} placeholder="Category" className="input input-bordered w-full" />
                                </label>
                            </div>
                            <div className="form-control md:w-1/2 ml-4">
                                <label className="label">
                                    <span className="label-text">Details</span>
                                </label>
                                <label className="input-group">
                                    <input type="text" name="details" defaultValue={details} placeholder="Details" className="input input-bordered w-full" />
                                </label>
                            </div>
                        </div>
                        {/* form Photo url row */}
                        <div className="mb-8">
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <label className="input-group">
                                    <input type="text" name="photo" defaultValue={photo} placeholder="Photo URL" className="input input-bordered w-full" />
                                </label>
                            </div>
                        </div>
                        <input type="submit" value="Add Coffee" className="btn btn-block" />

                    </form>
                </div>
            </div>
        </div>
    );
};

export default UpdateProduct;