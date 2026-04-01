import React from 'react';

const Cart = ({ cartItems }) => {
    const total = cartItems.reduce((acc, item) => acc + item.price, 0);

    return (
        <div className='mt-10 sm:p-10 space-y-6'>
            <p className='font-bold text-2xl'>Your Cart</p>
            <div>{
                cartItems.map(item => {
                    return (
                        <div className='sm:p-5 flex justify-between items-center'>
                            <div className='flex  items-center gap-4'>
                                <img className='w-16  h-fit' src={item.icon} alt={item.name} />
                                <div className=''>
                                    <p className='text-xl font-semibold '>{item.name}</p>
                                    <p className='font-medium text-gray-500'>${item.price}</p>
                                </div>
                            </div>
                            <button className='text-red-500 font-bold cursor-pointer btn'>Remove</button>
                        </div>
                    )
                })}
            </div>
            <div className='flex items-center justify-between'>
                <p className='Total:'>Total:</p>
                <p className='font-bold text-2xl '>${total.toFixed(2)}</p>
            </div>
            <button className='btn vp-gradient p-4 w-full rounded-full font-bold text-white '>Proceed to Checkout</button>
        </div>
    );
};

export default Cart;