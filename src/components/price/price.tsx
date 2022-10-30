import React from 'react';

// Swiper
import { A11y, Navigation, Pagination, Scrollbar } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
// import { Autoplay } from 'swiper';


// swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import { PriceCard, PricePackage } from "../price-card/price-card";
import styles from './price.module.css';

type Props = {
    background?: string;
    title: string;
}

const packages: PricePackage[] = [
    {
        packageName: 'Silver',
        price: "$25",
        services: ["Logo", "Business Card", "Letter Head"]
    },
    {
        packageName: 'Gold',
        price: "$125",
        services: ["Logo", "Business Card", "Letter Head", "Banner guide", "UI/UX design"]
    },
    {
        packageName: 'Diamond',
        price: "$800",
        services: ["Logo", "Business Card", "Letter Head", "Banner guide", "UI/UX design", "Web Development"]
    },
]

const Price = ({background, title}: Props) => {
    return (
        <>
            <div
                className={styles.priceWrapper}
                style={{
                backgroundColor: background ? background : '#ffffff',
                position: 'relative'
            }}>
                <div className='container text-center pt-8 hidden sm:block md:block lg:block xl:block'>
                    <div className={styles.divider} style={{color: "#021B79"}}></div>
                    <h1 className="text-[#021B79] text-3xl md:text-4xl py-4">{ title }</h1>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 container ">

                        { 
                            packages.map((item: PricePackage, index: number) => {
                                
                                return <div className="container" key={index}>
                                    <PriceCard packageName={item.packageName} price={item.price} services={item.services} />
                                </div>
                            })
                        }
                    </div>
                </div>

                <div style={{width: '100%', display: 'inline',  overflow: 'scroll'}} className="block sm:hidden md:hidden lg:hidden xl:hidden">
                    <Swiper
                        modules={[Navigation, Pagination, Scrollbar, A11y]}
                        spaceBetween={10}
                        slidesPerView={1}
                        navigation
                        pagination={{ clickable: true }}
                        scrollbar={{ draggable: true }}
                        onSwiper={(swiper) => console.log(swiper)}
                        onSlideChange={() => console.log('slide change')}
                    >
                        {
                            packages.map((item: PricePackage, index: number) => {
                                return <SwiperSlide key={index}>
                                    <div className='container'>
                                        <PriceCard packageName={item.packageName} price={item.price} services={item.services} />
                                    </div>
                                </SwiperSlide>
                            })
                        }
                        
                    </Swiper>
                </div>
            </div>
        </>
    )
}

export default Price;