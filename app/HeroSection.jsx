import React from 'react'

const HeroSection = () => {
    return (
    <section>
        <div className=' grid grid-cols-1 lg:grid-cols-12'>
            <div className='col-span-7 place-self-center text-center sm:text-left'>
                <h1 className='text-white mb-4 text-4xl lg:text-6xl font-extrabold'>
                    Hello, I'm Otto
                </h1>
                <p className='text-white text-base sm:text-lg mb-6 lg:text-xl'>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam doloremque quis, a, quasi nemo deleniti labore asperiores laudantium dolorum totam eum natus accusamus sed porro ipsum iste ad possimus est?
                </p>
                <div>
                <button className='px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradent-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-200 text-white'>
                    Hire me
                </button>
                <button className='px-p py-3 w-full sm:w-fit rounded-full bg-transparent hover:bg-slate-800 text-white border border-white mt-3'>
                    Download CV
                </button>
            </div>
        </div>
        <div className='col-span-5 place-self-center mt-4 lg:mt-0'>
                <div className='rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px]'>
                </div>
            </div>
        </div>
        </div>
    </section>
    );
};