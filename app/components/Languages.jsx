'use client'
import React, { useEffect } from 'react';
import { IoLogoJavascript } from "react-icons/io5";
import { SiTailwindcss } from 'react-icons/si';
import { FaPhp, FaHtml5, FaCss3Alt, FaReact, FaVuejs } from 'react-icons/fa';
import { FaInstagram } from "react-icons/fa";
import { gsap } from 'gsap';

const Languages = () => {
  useEffect(() => {
    gsap.from('.icon', {
      opacity: 0,
      y: 50,
      stagger: 0.2,
      duration: 1.5,
      ease: 'power4.out',
    });
  }, []);

  return (
    <div className='flex justify-center items-center flex-col'> 
      <h1 className='mx-auto'>Languages</h1>
      <div className="grid grid-cols-3 gap-10 text-5xl">
        <div className=" text-center p-10 ">
          <IoLogoJavascript className='text-yellow-400' />
        </div>
        <div className=" text-center p-10">
          <SiTailwindcss />
        </div>
        <div className=" text-center p-10">
          <FaPhp />
        </div>
        <div className=" text-center p-10">
          <FaHtml5 />
        </div>
        <div className=" text-center p-10">
          <FaCss3Alt />
        </div>
        <div className=" text-center p-10">
          <FaReact />
        </div>
        <div className="col-span-3 md:col-span-1  text-center p-10">
          <FaVuejs />
        </div>
        <div className='text-center p-10'>
        <FaInstagram />
        </div>
      </div>
    </div>
  );
};

export default Languages;
