import React from 'react';
import { assets } from '../assets/assets';
const OurPolicy = () => {
    return (
        <div className='flex flex-col sm:flex-row justify-around gap-12 sm:gap-2 text-center py-20 text-xs sm:text-sm md:text-base text-gray-700'>
            <div>
            <img className='w-12 m-auto mb-5' src={assets.support_img} alt="" />
            <p className='font-semibold'>Customer Support</p>
            <p className='text-gray-400'>We Have Our Best customer support</p>
            </div>
            <div>
            <img className='w-12 m-auto mb-5' src={assets.exchange_icon} alt="" />
            <p className='font-semibold'>Policy Of Exchange</p>
            <p className='text-gray-400'>Our Exchange Policy is always available </p>
            </div>
            <div>
            <img className='w-12 m-auto mb-5' src={assets.quality_icon} alt="" />
            <p className='font-semibold'>Quality Assurance</p>
            <p className='text-gray-400'>We Provide Best Quality Product</p>
            </div>
        </div>
    );
};

export default OurPolicy;