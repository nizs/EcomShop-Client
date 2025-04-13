import React, { useContext, useEffect, useState } from 'react';
import { assets } from '../assets/assets';
import ProductItem from '../components/ProductItem';
import Title from '../components/Title';
import { ShopContext } from '../context/ShopContext';

const Products = () => {
    const { products } = useContext(ShopContext);
    const [showFilter, setShowFilter] = useState(false);
    const [filterProduts, setFilterProducts] = useState([]);

    useEffect(() => {
        setFilterProducts(products)
    }, [])

    return (
        <div className='flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t'>
            {/* Filter */}
            <div className='min-w-60'>
                <p onClick={() => setShowFilter(!showFilter)} className='my-2 text-xl flex items-center cursor-pointer gap-2'>FILTERS
                    <img className={`h-3 sm:hidden ${showFilter ? 'rotate-90' : ''}`} src={assets.dropdown_icon} alt="" />
                </p>
                {/* Filter Category */}
                <div className={`border border-gray-300 pl-5 py-3 mt-6 ${showFilter ? '' : 'hidden'} sm:block`}>
                    <p className='mb-3 text-sm font-medium'>CATEGORIES</p>
                    <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
                        <p className='flex gap-2'>
                            <input className='w-3' type="checkbox" value={'Men'} />Men
                        </p>
                        <p className='flex gap-2'>
                            <input className='w-3' type="checkbox" value={'Women'} />Women
                        </p>
                        <p className='flex gap-2'>
                            <input className='w-3' type="checkbox" value={'Kids'} />Kids
                        </p>
                    </div>
                </div>
                {/* Filter-Sub-Category */}
                <div className={`border border-gray-300 pl-5 py-3 my-5 ${showFilter ? '' : 'hidden'} sm:block`}>
                    <p className='mb-3 text-sm font-medium'>SUB CATEGORIES</p>
                    <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
                        <p className='flex gap-2'>
                            <input className='w-3' type="checkbox" value={'Tops'} />Tops
                        </p>
                        <p className='flex gap-2'>
                            <input className='w-3' type="checkbox" value={'Bottoms'} />Bottoms
                        </p>
                        <p className='flex gap-2'>
                            <input className='w-3' type="checkbox" value={'Accessories'} />Accessories
                        </p>
                    </div>
                </div>
            </div>
            {/*All collections */}
            <div className='flex-1'>
                <div className='flex justify-between text-base sm:text-2xl mb-4'>
                    <Title text1={'ALL'} text2={'PRODUCTS'} />
                    {/* Sorting products */}
                    <select className='border-2 border-gray-300 text-sm px-2'>
                        <option value="relavent">Sort by : Relavent</option>
                        <option value="low-high">Sort by : Low to High</option>
                        <option value="high-low">Sort by : High TO Low</option>
                    </select>
                </div>
                {/* Loading products */}
                <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6'>
                    {
                        filterProduts.map((item, index) => <ProductItem
                            key={index}
                            item={item}
                        />)
                    }
                </div>
            </div>
        </div>
    );
};

export default Products;