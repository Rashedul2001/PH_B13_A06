import React, { Suspense, useState } from 'react';
import Products from './Products';
import Cart from './Cart'




const fetchProducts = async () => {
    const response = await fetch('/data/products.json');
    return await response.json();
};

const ProductContainer = ({ cartItems, setCartItems }) => {
    const [selectedTab, setSelectedTab] = useState("Products")
    const selectedStyle = 'vp-gradient text-white font-bold';


    return (
        <div className="px-5 py-32 container mx-auto ">
            <div className='space-y-4 text-center'>
                <h1 className='text-3xl md:text-5xl font-extrabold'>Premium Digital Tools</h1>
                <p className='text-gray-500'>Choose from our curated collection of premium digital products designed <br /> to boost your productivity and creativity. </p>
                <div className='flex items-center justify-center'>
                    <button className={`btn p-2 rounded-full ${selectedTab === "Products" ? selectedStyle : "font-medium"} `} onClick={() => setSelectedTab("Products")}>Products</button>
                    <button className={`btn py-2 px-4 rounded-full ${selectedTab === "Cart" ? selectedStyle : "font-medium"}`} onClick={() => setSelectedTab("Cart")}>cart{cartItems.length > 0 && `(${cartItems.length})`}</button></div>
            </div>
            {
                selectedTab === "Products" ? (
                    <Suspense fallback={<span className="mt-5 absolute left-1/2 loading loading-spinner loading-xl"></span>}>
                        <Products productPromise={fetchProducts()} />
                    </Suspense>
                ) :
                    (
                        <Cart cartItems={cartItems} />
                    )

            }
        </div>
    );
};

export default ProductContainer;
