import React from 'react';

const ExtraSection = () => {
    return (
        <div className='vp-gradient p-10 md:p-32 flex flex-col justify-center items-center '>
            <h2 className='text-white text-4xl font-extrabold'>Ready to Transform Your Workflow?</h2>
            <p className='text-white mt-4'>Join thousands of professionals who are already using Digitools to work smarter.Start your free trial today.</p>
            <div className='flex gap-4 mt-10 items-center'>
                <button className=' bg-white px-6 py-3 rounded-full font-semibold'><span className='vp-gradient text-transparent bg-clip-text '>Explore Products</span></button>
                <button className='border border-white text-white px-6 py-3 rounded-full font-semibold'>View Pricing</button>
            </div>
            <p className='text-white mt-4'>14-day free trial • No credit card required • Cancel anytime</p>
        </div>
    );
};

export default ExtraSection;