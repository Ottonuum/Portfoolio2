'use client'
import React from 'react'
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";

const Footer = () => {
    const iconSize = 25; 
    return (
        <div className="flex flex-col items-center">
            <div className="">
                <h1 className="py-4 mt-16">Otto Nuum</h1>
                <p>A Frontend focused Web Developer building the Frontend of Websites and Web Applications that leads to the success of the overall product</p>
            </div>
            <div className="mt-16 flex flex-col items-center">
                <h1 className="">SOCIALS</h1>
                <div className='flex'>
                    <div className="mr-2">
                        <FaInstagram size={iconSize} />
                    </div>
                    <div className="mr-2">
                        <FaGithub size={iconSize}/>
                    </div>
                    <div className="mr-2">
                        <FaFacebook size={iconSize}/>
                    </div>
                    <div>
                        <FaLinkedin size={iconSize}/>
                    </div>
                </div>
            </div>
            {/* Additional content at the bottom */}
            <div className="mt-4">
                <img src="/Line.png" className='w-3/4 h-auto object-cover mx-auto p-5' alt="Line"/>
                <p className='text-center'>Copyright © 2022 Company name</p>
            </div>
        </div>
    );
};

export default Footer;