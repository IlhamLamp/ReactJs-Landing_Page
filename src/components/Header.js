import React, { useState } from 'react';
import Logo from '../helpers/data';
import Nav from './Nav';
import NavMobile from './NavMobile';

// import icons
import { FaBars } from 'react-icons/fa';

const Header = () => {
    const [expandNavMobile, setExpandNavMobile] = useState(false);
    return (
        <header
            className='mb-12 lg:mb-0 z-20 relative px-4 lg:px-0'
            data-aos='fade-down'
            data-aos-delay='1200'
            data-aos-duration='1000'
        >
            <div className='container mx-auto'>
                <div className='flex items-center justify-between'>
                    <div className='flex items-center xl:gap-x-[740px] gap-x-[240px]'>
                        {/* Logo */}
                        <a href='#_'>
                            <img src={Logo} alt='' />
                        </a>

                        {/* Nav: only oh large screen */}
                        <div className='hidden lg:flex'>
                            <Nav />
                        </div>

                        {/* NavMobile: only on mobile screen */}
                        <div
                            className={`
                                ${expandNavMobile ? 'max-h-52' : 'max-h-0'}
                                lg:hidden absolute top-24 bg-accent-secondary w-full left-0 right-0 font-bold rounded transition-all overflow-hidden
                            `}
                        >
                            <NavMobile />
                        </div>

                        {/* Nav: mobile button */}
                        <div
                            onClick={() => setExpandNavMobile(!expandNavMobile)}
                            className='lg:hidden text-2xl text-primary cursor-pointer'
                        >
                            <FaBars />
                        </div>
                    </div>
                </div>
            </div>
        </header >
    );
};

export default Header;