import React from 'react';
import userIcon from '../assets/user.png'
import packageIcon from '../assets/package.png'
import rocketIcon from '../assets/rocket.png'

const Steps = () => {
    return (
        <div className='px-5 lg:my-28 container mx-auto'  >
            <h1 className='text-3xl md:text-5xl font-extrabold text-center'>Get Started in 3 Steps</h1>
            <p className='mt-4 text-gray-500 text-center'>Start using premium digital tools in minutes, not hours.</p>
            <div className='mt-10 grid grid-cols-1 lg:grid-cols-3'>
                <div className='p-6 flex flex-col'>
                    <div className='w-10 h-10 vp-gradient rounded-full text-white flex justify-center items-center ml-auto'>01</div>
                    <img src={userIcon} alt="User" className='bg-purple-100 p-5 rounded-full mx-auto ' />
                    <h1 className='text-2xl font-bold mt-4 text-center'>Create Account</h1>
                    <p className='text-gray-500 mt-4 text-center'>Sign up for free in seconds. No credit card required to get started.</p>

                </div>
                <div className='p-6 flex flex-col'>
                    <div className='w-10 h-10 vp-gradient rounded-full text-white flex justify-center items-center ml-auto'>02</div>
                    <img src={packageIcon} alt="Package" className='bg-purple-100 p-5 rounded-full  mx-auto ' />
                    <h1 className='text-2xl font-bold mt-4 text-center'>Choose Products</h1>
                    <p className='text-gray-500 mt-4 text-center'>Browse our catalog and select the tools that fit your needs.</p>

                </div>
                <div className='p-6 flex flex-col'>
                    <div className='w-10 h-10 vp-gradient rounded-full text-white flex justify-center items-center ml-auto'>03</div>
                    <div className='rounded-full bg-purple-100 p-5 mx-auto  '>
                        <img src={rocketIcon} alt="Rocket" className='' />
                    </div>
                    <h1 className='text-2xl font-bold mt-4 text-center'>Start Creating</h1>
                    <p className='text-gray-500 mt-4 text-center'>Download and start using your premium tools immediately.</p>

                </div>

            </div>
        </div>
    );
};

export default Steps;