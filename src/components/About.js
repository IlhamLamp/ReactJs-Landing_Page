import React from 'react';
import { aboutData } from '../helpers/data';

const About = () => {
    const { image, title, subtitle } = aboutData;

    return (
        <section className='my-[30px] xl:mt-[100px]'>
            <div className='container mx-auto'>
                <div className='px-12 pb-12 flex flex-col text-center xl:flex-row xl:items-center xl:text-left  xl:gap-x-[60px] xl:pb-0 sm:my-10'>
                    {/* Image Section */}
                    <div
                        className='xl:h-60 sm:h-60 rounded-tr-full rounded-tl-full bg-accent-primary_hover bg-opacity-70 flex-l'
                        data-aos='zoom-out-left'
                        data-aos-delay='200'
                    >
                        <img src={image} alt="Puzzletronik" />
                    </div>
                    {/* Text */}
                    <div className='flex-l xl:pr-12'>
                        <h2
                            className='h2 mb-5 max-w-[474px]'
                            data-aos='fade-up'
                            data-aos-delay='300'
                        >
                            {title}
                        </h2>
                        <p
                            className='max-w-[800px] mx-auto xl:mx-0 subtitle-text'
                            data-aos='fade-up'
                            data-aos-delay='400'
                        >
                            {subtitle}
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About;