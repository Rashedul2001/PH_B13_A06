import React from 'react';
import { IoCheckmarkSharp } from 'react-icons/io5';

const PricingSection = () => {
    return (
        <div className='px-5 py-14 md:py-32 container mx-auto'>
            <h1 className='text-center text-2xl md:text-5xl font-extrabold mb-2'>Simple, Transparent Pricing</h1>
            <p className='text-center text-gray-500 mb-10'>Choose the plan that fits your needs. Upgrade or downgrade anytime.</p>

            
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-10/12 mx-auto '>
                <div className='space-y-6 flex-1 p-6'>
                    <div>
                        <h4 className='text-2xl font-bold'>Starter</h4>
                        <p className='text-gray-500'>Perfect for getting started</p>
                    </div>
                    <p><span className='text-4xl font-bold'>$0</span><span className='text-2xl text-gray-500'>/month</span></p>
                    <div>
                        <li className="flex gap-1 items-center"><IoCheckmarkSharp className="text-green-400" /> <span className="text-gray-500 font-medium">Access to 10 free tools</span></li>
                        <li className="flex gap-1 items-center"><IoCheckmarkSharp className="text-green-400" /> <span className="text-gray-500 font-medium">Basic templates</span></li>
                        <li className="flex gap-1 items-center"><IoCheckmarkSharp className="text-green-400" /> <span className="text-gray-500 font-medium">Community support</span></li>
                        <li className="flex gap-1 items-center"><IoCheckmarkSharp className="text-green-400" /> <span className="text-gray-500 font-medium">1 project per month</span></li>
                    </div>
                    <button className="text-white vp-gradient w-full py-2 rounded-full font-bold">Get Started Free</button>
                </div>
                <div className='space-y-6 flex-1 p-6 vp-gradient rounded-2xl'>
                    <div>
                        <h4 className='text-2xl font-bold text-white'>Pro</h4>
                        <p className='text-white'>Best for professionals</p>
                    </div>
                    <p><span className='text-4xl font-bold text-white'>$29</span><span className='text-2xl text-white'>/month</span></p>
                    <div>
                        <li className="flex gap-1 items-center"><IoCheckmarkSharp className="text-white" /> <span className="text-white font-medium">Access to all premium tools</span></li>
                        <li className="flex gap-1 items-center"><IoCheckmarkSharp className="text-white" /> <span className="text-white font-medium">Unlimited templates</span></li>
                        <li className="flex gap-1 items-center"><IoCheckmarkSharp className="text-white" /> <span className="text-white font-medium">Priority support</span></li>
                        <li className="flex gap-1 items-center"><IoCheckmarkSharp className="text-white" /> <span className="text-white font-medium">Unlimited projects</span></li>
                        <li className="flex gap-1 items-center"><IoCheckmarkSharp className="text-white" /> <span className="text-white font-medium">Cloud sync</span></li>
                        <li className="flex gap-1 items-center"><IoCheckmarkSharp className="text-white" /> <span className="text-white font-medium">Advanced analytics</span></li>
                    </div>
                    <button className=" bg-white w-full py-2 rounded-full font-bold"><span className='vp-gradient text-transparent bg-clip-text '>Get Started Free</span></button >
                </div>
                <div className='space-y-6 flex-1 p-6'>
                    <div>
                        <h4 className='text-2xl font-bold'>Enterprise</h4>
                        <p className='text-gray-500'>For teams and businesses</p>
                    </div>
                    <p><span className='text-4xl font-bold'>$99</span><span className='text-2xl text-gray-500'>/month</span></p>
                    <div>
                        <li className="flex gap-1 items-center"><IoCheckmarkSharp className="text-green-400" /> <span className="text-gray-500 font-medium">Everything in Pro</span></li>
                        <li className="flex gap-1 items-center"><IoCheckmarkSharp className="text-green-400" /> <span className="text-gray-500 font-medium">Team collaboration</span></li>
                        <li className="flex gap-1 items-center"><IoCheckmarkSharp className="text-green-400" /> <span className="text-gray-500 font-medium">Custom integrations</span></li>
                        <li className="flex gap-1 items-center"><IoCheckmarkSharp className="text-green-400" /> <span className="text-gray-500 font-medium">Dedicated support</span></li>
                        <li className="flex gap-1 items-center"><IoCheckmarkSharp className="text-green-400" /> <span className="text-gray-500 font-medium">SLA guarantee</span></li>
                        <li className="flex gap-1 items-center"><IoCheckmarkSharp className="text-green-400" /> <span className="text-gray-500 font-medium">Custom branding</span></li>
                    </div>
                    <button className="text-white vp-gradient w-full py-2 rounded-full font-bold">Get Started Free</button>
                </div>

            </div>

        </div>
    );
};

export default PricingSection;