import React from 'react';
import { A11y, Navigation, Pagination, Scrollbar } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

// Components
import CustomCard from "../components/custom-card/custom-card";
import Price from "../components/price/price";
import styles from '../styles/booknow.module.css';

export default function BookNow () {
    return (
        <>
            <div className='container'>
                <div style={{width: '100%', display: 'inline',  overflow: 'scroll'}}>
                    <Swiper
                        modules={[Navigation, Pagination, Scrollbar, A11y]}
                        spaceBetween={10}
                        slidesPerView={2}
                        navigation
                        pagination={{ clickable: true }}
                        scrollbar={{ draggable: true }}
                        onSwiper={(swiper) => console.log(swiper)}
                        onSlideChange={() => console.log('slide change')}
                        >
                        <SwiperSlide>
                            <img src='/images/mobile_apps.png' alt="display images" width="600px" height="500px" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src='/images/youth.png' alt="display images" width="600px" height="500px" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src='/images/frame.png' alt="display images" width="600px" height="500px" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src='/images/phones.png' alt="display images" width="600px" height="500px" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src='/images/contact-image.png' alt="display images" width="600px" height="500px" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src='/images/app.png' alt="display images" width="600px" height="500px" />
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>

            <div className='my-12'>
                <div className="divider"></div>
                <h1 className="h1 text-[#021B79] text-2xl sm:text-2xl md:text-3xl lg:text-3xl">How may we help you?</h1>
            </div>

            <div className={`grid grid-cols-1 space-x-2 container lg:space-x-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 mb-16`}>
                <div>
                    <CustomCard 
                    title="Brand Identity & Graphics Designs"
                    body='We sketch, create, design professional 
                    logos and brand identity guidelines for 
                    clients. Our delivery time is quick and 
                    our output is your desire.'
                    icon='/images/Vectorpen.png'
                    />
                </div>
                <div>
                    <CustomCard 
                    title="UI/UX Design & Development"
                    body='Our iterative design process & focus 
                    on validation ensures you avoid 
                    unnecessary features and costs, 
                    ending with a beautiful app built to 
                    satisfy users.'
                    icon='/images/carbon_application-webtv.png'
                    />
                </div>
                <div>
                    <CustomCard 
                    title="Web Design &
                    Development "
                    body='We are a creative team of designers,
                    developers, and strategists, building 
                    elevated websites in the heart of 
                    Silicon Valley.'
                    icon='/images/carbon_application-webtv.png'
                    />
                </div>
                <div>
                    <CustomCard 
                    title="Training & Guide"
                    body='Our iterative design process & focus 
                    on validation ensures you avoid 
                    unnecessary features and costs, 
                    ending with a beautiful app built to 
                    satisfy users.'
                    icon='/images/techPerson.png'
                    />
                </div>
            </div>

            <br />
            <br />
            <br />
            
            <Price title='Choose Your Perfect Package' />

        </>
    )
}