import React from 'react';
import Header from './Header';

// import hero data
import { heroData } from '../helpers/data';


const Hero = () => {
    // destructure hero
    const { title, subtitle, btnText, image } = heroData;
    return (
        <section className='lg:h-[900px] py-12'>
            <Header />
            <div className='container mx-auto h-full relative'>
                <div className='flex flex-col xl:flex-row items-center h-full'>
                    {/* content */}
                    <div className='text-center xl:text-left xl:absolute'>
                        {/* title */}
                        <h1
                            className='h1 xl:max-w-[800px] mb-6 xl:mb-12'
                            data-aos='fade-down'
                            data-aos-delay='400'
                        >
                            {title} <span className='bg-accent-primary text-zinc-50 py-0.5 px-2 rounded-lg'>Memorest.</span>
                        </h1>
                        {/* subtitle */}
                        <p
                            className='lead xl:max-w-[380px] mb-6 lg:mb-12'
                            data-aos='fade-down'
                            data-aos-delay='500'
                        >
                            <i>{subtitle}</i>
                        </p>
                        {/* button */}
                        <a
                            href="#_"
                            className='btn-a group cursor-pointer'
                            data-aos='fade-down'
                            data-aos-delay='600'
                        >
                            <span className='btn-a-hover1' />
                            <span className='btn-a-hover2' />
                            <span className="relative text-white group-hover:text-white">{btnText}</span>
                        </a>
                    </div>
                    {/* image */}
                    <div
                        className='xl:absolute xl:-right-12 xl:bottom-16'
                        data-aos='fade-up'
                        data-aos-delay='700'
                    >
                        <img src={image} alt='coffeetronik' />
                    </div>
                </div>
            </div>
        </section >
    );
};
export default Hero;