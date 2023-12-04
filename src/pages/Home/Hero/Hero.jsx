import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './styles.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const Hero = () => {

   const progressCircle = useRef(null);
   const progressContent = useRef(null);
   const onAutoplayTimeLeft = (s, time, progress) => {
      progressCircle.current.style.setProperty('--progress', 1 - progress);
      progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
   };

   return (
      <div className='bg-white  flex gap-4'>
         <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
               delay: 3500,
               disableOnInteraction: false,
            }}
            pagination={{
               clickable: true,
            }}
            // navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            onAutoplayTimeLeft={onAutoplayTimeLeft}
            className="mySwiper"
         >
            <SwiperSlide>
               <img className='rounded-lg' src="https://i.ibb.co/6n55x1D/GOODNESS-WEB-1280x.webp" alt="" />
            </SwiperSlide>
            <SwiperSlide>
               <img className='rounded-lg' src="https://i.ibb.co/mHZLGB7/2-627ee5b6-fca7-400c-b043-b3a824686756-1280x.webp" alt="" />
            </SwiperSlide>
            <SwiperSlide>
               <img src="https://i.ibb.co/Yp7Zh66/1-86790f4f-133a-4041-9f28-0ba0674566dc-1280x.webp" alt="" />
            </SwiperSlide>

            <div className="autoplay-progress" slot="container-end">
               <svg viewBox="0 0 48 48" ref={progressCircle}>
                  <circle cx="24" cy="24" r="20"></circle>
               </svg>
               <span ref={progressContent}></span>
            </div>
         </Swiper>
         <div className='w-[36%]'>
            <img className='cursor-pointer rounded-lg' src="https://i.ibb.co/5FkhsGD/Orange-Pink-Purple-Soft-Gradients-Gloss-Tech-business-Podcast-Cover-2.png" alt="" />
         </div>
      </div>
   );
};

export default Hero;