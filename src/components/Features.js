import React from 'react';

// import features data 
import { featuresData } from '../helpers/data';

const Features = () => {
    // destructure features data
    const { title, subtitle, list } = featuresData;
    return (
        <section className='my-[70px] xl:my-[150px]'>
            <div className='container mx-auto'>
                {/* Text */}
                <div className='text-center'>
                    <h2
                        className='h2 mb-6 xl:mb-12'
                        data-aos='fade-down'
                        data-aos-delay='100'
                    >
                        {title}
                    </h2>
                    <p
                        className='lead max-w-[585px] mx-auto mb-16 xl:mb-24'
                        data-aos='fade-down'
                        data-aos-delay='200'
                    >
                        {subtitle}
                    </p>
                </div>
                {/* features list */}
                <div className='grid grid-cols-1 gap-[50px] xl:grid-cols-2'>
                    {list.map((feature, index) => {
                        // features structure
                        const { image, title, description, linkText, delay } = feature;
                        return (
                            <div
                                key={index}
                                data-aos='zoom-in'
                                data-aos-offset='100'
                                data-aos-delay={delay}
                            >
                                {/* card and hover */}
                                <div className='w-full max-w-[530] h-[360px] relative flex flex-col items-center justify-center xl:flex-row xl:justify-start mx-auto p-10 features-card'>
                                    {/* images */}
                                    <div className='max-w-[200px] xl:mr-7 xl:max-w-[300px]'>
                                        <img src={image} alt='' />
                                    </div>
                                    {/* Text */}
                                    <div className='max-w-[220px]'>
                                        <h3 className='h3 mb-4'>{title}</h3>
                                        <p className='font-light italic mb-4'>{description}</p>
                                        {/* Learn More */}
                                        <div className='flex items-center gap-x-2 group'>
                                            <a href="#_" className="relative inline-flex items-center justify-start py-3 pl-4 pr-12 overflow-hidden font-semibold text-white transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6 bg-accent-primary_hover group">
                                                <span className="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-accent-primary group-hover:h-full"></span>
                                                <span className="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
                                                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                                                </span>
                                                <span className="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
                                                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                                                </span>
                                                <span className="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-white">{linkText}</span>
                                            </a>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        )
                    })}
                </div>
            </div>
        </section >
    )
}

export default Features;