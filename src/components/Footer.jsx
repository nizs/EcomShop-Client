import React from 'react';
import { Link } from 'react-router-dom';
import { assets } from '../assets/assets';
Link

const Footer = () => {
    return (
        <div>
            <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
                <div>
                    <img className='mb-5 w-32' src={assets.logo} alt="" />
                    <p className='w-full md:w-2/3 text-gray-600'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum officia fuga culpa! Explicabo, ullam incidunt. Esse consequatur voluptatem error veniam deleniti soluta harum vero perferendis quis quidem, distinctio quisquam quia!</p>
                </div>
                <div>
                    <p className='text-xl font-medium mb-5'>COMPANY</p>
                    <ul className='flex flex-col gap-2 text-gray-600'>
                        <Link className='cursor-pointer hover:text-gray-800' to='/'><li>Home</li></Link>
                        <Link className='cursor-pointer hover:text-gray-800' to='/'><li>About Us</li></Link>
                        <Link className='cursor-pointer hover:text-gray-800' to='/'><li>Privacy Policy</li></Link>
                        <Link className='cursor-pointer hover:text-gray-800' to='/'><li>Term & Condition</li></Link>
                    </ul>
                </div>
                <div>
                    <p className='text-xl font-medium mb-5'>CONTAC US</p>
                    <ul className='flex flex-col gap-1 text-gray-600'>
                        <li>+1-234-574-3738</li>
                        <li>Contact@Ecom.com</li>
                    </ul>
                </div>
            </div>
            <div>
                <hr />
                <p className='py-5 text-sm text-center'>Copyright © 2024 EcomShop -
                    All Rights Reserved</p>
            </div>
        </div>
    );
};

export default Footer;