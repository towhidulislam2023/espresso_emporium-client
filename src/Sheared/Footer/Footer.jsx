/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (

        <div className='bg-base-200'>
            <footer className="footer p-10  text-base-content mt-10 w-[85%] mx-auto">
                <div>
                    <img className='h-16' src="https://i.ibb.co/DVb4R1L/logo1.png" alt="logo1" />
                     <h1 className='text-3xl text-orange-950 font-bold'>Espresso Emporium</h1>
         
                </div>
                <div>
                    <span className="footer-title">Products</span>
                    <Link className="link link-hover">Coffee Beans</Link>
                    <Link className="link link-hover">Ground Coffee</Link>
                    <Link className="link link-hover">Coffee Pods</Link>
                    <Link className="link link-hover">Accessories</Link>
                </div>
                <div>
                    <span className="footer-title">Company</span>
                    <Link className="link link-hover">About us</Link>
                    <Link className="link link-hover">Contact</Link>
                    <Link className="link link-hover">Jobs</Link>
                    <Link className="link link-hover">Press kit</Link>
                </div>
                <div>
                    <span className="footer-title">Legal</span>
                    <Link className="link link-hover">Terms of use</Link>
                    <Link className="link link-hover">Privacy policy</Link>
                    <Link className="link link-hover">Cookie policy</Link>
                </div>
                <div>
                    <span className="footer-title">Newsletter</span>
                    <div className="form-control w-80">
                        <label className="label">
                            <span className="label-text">Enter your email address</span>
                        </label>
                        <div className="relative">
                            <input type="text" placeholder="username@site.com" className="input input-bordered w-full pr-16" />
                            <button className="btn btn-primary absolute top-0 right-0 rounded-l-none">Subscribe</button>
                        </div>
                    </div>
                </div>
            </footer>
      </div>
    );
};

export default Footer;