'use client'
import React from 'react'


const About = () => {
    return (
        <div className='grid grid-cols-2'>
            <div>
                <img src='/Img2.JPG' className=' md:grid md:grid-cols-2 gap-8 items-center py-8 p-4 xl:gap sm:py-16 w-[500px] h-[500px]'></img> 
            </div>
            <div>
                <h2 className='text-4xl font-bold text-white mb-4 pt-[60px]'>About me</h2>
                <p className='text--base lg:text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis ea neque nobis, atque laborum earum, repellat at molestias distinctio modi ullam vel fugiat iure ut corporis magnam omnis officiis explicabo.</p>
                <div className=''>
                
                </div>
            </div>
        </div>
    )
}

export default About;   