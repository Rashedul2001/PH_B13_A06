import React, { Suspense } from 'react';
import Products from './Products';
const fetchProducts = async () => {
    const response = await fetch('/data/products.json');
    return await response.json();
};

const ProductContainer = () => {
    return (
        <div className="px-5 py-32 container mx-auto ">
            <div className='space-y-4 text-center'>
                <h1 className='text-3xl md:text-5xl font-extrabold'>Premium Digital Tools</h1>
                <p className='text-gray-500'>Choose from our curated collection of premium digital products designed <br /> to boost your productivity and creativity. </p>
                <div className='flex items-center justify-center'>
                <button className='btn vp-gradient font-bold p-2 rounded-full '>Products</button>
                <button className='btn font-medium py-2 px-4 rounded-full'>cart</button></div>
            </div>
            <Suspense fallback={<span className="mt-5 absolute left-1/2 loading loading-spinner loading-xl"></span>}>
                <Products productPromise={fetchProducts()} />
            </Suspense>
        </div>
    );
};

export default ProductContainer;