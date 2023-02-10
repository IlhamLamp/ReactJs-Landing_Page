import React from 'react';

// import testimonials data
import { testimonialsData } from '../helpers/data';

// import swiper react components
import { Swiper, SwiperSlide } from 'swiper/react';

// import swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import '../slider.css';

// import required modules
import { Pagination } from 'swiper';

const TestimonialSlider = () => {
    return (
        <Swiper
            slidesPerView={'auto'}
            centeredSlides={true}
            spaceBetween={20}
            pagination={{
                clickable: true,
            }}
            modules={[Pagination]}
            className='mySwiper'
        >
            {testimonialsData.map((slide, index) => {
                // destructure slide
                const { message, name, web } = slide;
                return (
                    // slide
                    <SwiperSlide
                        key={index}
                        className='bg-white rounded-[20px] border border-accent-primary max-w-[400px] max-h-[330px] pt-[60px] px-[35px] xl:px-[70px] pb-[50px] flex items-start gap-x-[30px] shadow-2xl shadow-gray-400/50'
                    >
                        {/* avatar image */}
                        <div className="relative w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
                            <svg className="absolute w-12 h-12 text-gray-400 -left-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"></path></svg>
                        </div>
                        {/* text */}
                        <div>
                            <div className='text-lg text-primary font-bold'>{name}</div>
                            <div className='mb-4 font-semibold text-accent-primary'>
                                {web}
                            </div>
                            <p className='max-w-[240px]'>{message}</p>
                        </div>
                    </SwiperSlide>
                );
            })}
        </Swiper>
    );
};

export default TestimonialSlider;