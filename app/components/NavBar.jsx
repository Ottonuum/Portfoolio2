import Link from 'next/link';
import React from 'react';

const NavBar = () => {
    return (
      <nav>
        <div className='flex flex-wrap items-center justify-between mx-auto p-8'>
            <Link href={'/'} className='text-5xl text-white font-semibold'>
                LOGO
            </Link>
            <div className='menu hidden md:block md:w-auto' id='navbar'>
                <ul className='flex'>
                    <li className='mr-4'>
                    <Link href='#about' className='block py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-xl rounded p-0 hover:text-white'>
                        About
                    </Link>
                    </li>
                    <li className='mr-4'>
                    <Link href='#Projects' className='block py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-xl rounded p-0 hover:text-white'>
                        Projects
                    </Link>
                    </li>
                    <li className='mr-4'>
                    <Link href='#Contact' className='block py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-xl rounded p-0 hover:text-white'>
                        Contact
                    </Link>
                    </li>
                </ul>
            </div>
        </div>
      </nav>
    );
};

export default NavBar;