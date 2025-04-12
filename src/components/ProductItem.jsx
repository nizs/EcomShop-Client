import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';

const ProductItem = ({ item }) => {
    const { currency } = useContext(ShopContext);
    const {_id, name, image, price} = item;

    return (
        <Link className='text-gray-700 cursor-pointr' to={`/product/${_id}`}>
            <div className='overflow-hidden'>
                <img className='hover:scale-110 transition ease-in-out' src={image[0]} alt="" />
            </div>
            <p className='pt-3 pb-1 text-sm'>{name}</p>
            <p className='font-medium text-sm'>{currency}{price}</p>
        </Link>
    );
};

export default ProductItem;