'use client'
import React from 'react';
import { TypeAnimation } from 'react-type-animation';


const HeroSection = () => {
    return (
    <section>
        <div className=' grid grid-cols-1 lg:grid-cols-12'>
            <div className='col-span-7 place-self-center text-center sm:text-left'>
                <h1 className='text-white mb-4 text-4xl lg:text-6xl font-extrabold'>
                   <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400'>
                    Hello, I'm {""}
                    <br></br>
                    </span>
                    <TypeAnimation
                        sequence={[
                            'Otto',
                            1000, 
                            'a web developer',
                            1000,
                            'a programmer',
                            1000,
                            'a software developer',
                            1000,
                        ]}
                        wrapper="span"
                        speed={50}
                        repeat={Infinity}
                        />
                </h1>
                <p className='text-white text-base sm:text-lg mb-6 lg:text-xl'>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam doloremque quis, a, quasi nemo deleniti labore asperiores laudantium dolorum totam eum natus accusamus sed porro ipsum iste ad possimus est?
                </p>
                <div>
                <button className='px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-200 text-white'>
                    Hire me
                </button>
                <button className='px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-800 text-white border mt-3'>
                   <span className='block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2'>
                    Download CV
                    </span>
                </button>
            </div>
        </div>
        <div className='col-span-5 place-self-center mt-4 lg:mt-0'>
                <div>
                     <img src="/img_1767 3.jpg" alt="" className='bg-[#181818] rounded-full object-cover w-[250px] h-[250px] lg:w-[400px] lg:h-[400px]'></img>
                </div>
            </div>
        </div>
    </section>
    );
};
export default HeroSection