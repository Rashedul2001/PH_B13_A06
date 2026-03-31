import React, { Component, useState } from 'react';
import "../styles/NavBar.css";
import cartIcon from "../assets/shopping-cart.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";




const NavBar = () => {

    const [mobileMenuStatus, setMobileMenuStatus] = useState(true);



    return (
        <nav className='p-5 flex justify-between items-center h-12 container mx-auto '>
            <div className='flex items-center gap-2'>
                <span onClick={() => setMobileMenuStatus(!mobileMenuStatus)}>
                    {
                        mobileMenuStatus ? <GiHamburgerMenu className="lg:hidden" /> : <IoMdClose className='lg:hidden' />
                    }
                </span>
                <a className="font-extrabold  cursor-pointer text-3xl blue-to-purple-linear bg-clip-text text-transparent">DigiTools</a>
                <ul className={` absolute duration-1000 lg:hidden  ${mobileMenuStatus ? " -top-40" : "top-12"} `}>
                    <li><a>Products</a></li>
                    <li><a>Features</a></li>
                    <li><a>Pricing</a></li>
                    <li><a>Testimonials</a></li>
                    <li><a>FAQ</a></li>
                </ul>
            </div>
            <div>
                <ul className='lg:flex items-center hidden '>
                    <li><a>Products</a></li>
                    <li><a>Features</a></li>
                    <li><a>Pricing</a></li>
                    <li><a>Testimonials</a></li>
                    <li><a>FAQ</a></li>
                </ul>
            </div>
            <div className='space-x-4 flex items-center'>
                <a className=''><img src={cartIcon} alt="shopping cart" /></a>
                <a className='font-semibold'>Login</a>
                <button className="blue-to-purple-linear py-2 px-3  rounded-full font-semibold whitespace-nowrap text-white cursor-pointer" >Get Started</button>
            </div>

        </nav>
    );
}

export default NavBar;