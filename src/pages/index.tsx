import React from 'react';

// Swiper
import { A11y, Navigation, Pagination, Scrollbar } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper';


// swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

// Components
import Banner from '../components/banner/banner';
import ClientCard from '../components/client-card/client-card';
import CustomCard from "../components/custom-card/custom-card";
import Price from '../components/price/price';
import SleekButton from '../components/sleek-button/sleek-button';
import '../styles/Home.module.css';
import Achievement from '../components/achievement';

import vectorPen from '../assets/images/Vectorpen.png';
import banner from '../assets/images/banner1.png';
import webTv from '../assets/images/carbon_application-webtv.png';
import techPerson from '../assets/images/techPerson.png';
import book from '../assets/images/book.png';
import customImage from '../assets/images/customImage.png';
import monitor from '../assets/images/monitor.png';
import jotter from '../assets/images/jotter.png';
import flyer from '../assets/images/flyer.png';
import techDisplay from '../assets/images/tech-display.png';
import princess from '../assets/images/princess.png';
import stanley from '../assets/images/stanley.png';
import johnson from '../assets/images/johnson.png';
import arith from '../assets/images/arith.png';

const Home = () => {
  
  return (
    <div style={{width: '100%'}}>
      {/* Heros section */}
      <div>
        <Banner 
        backgroundColor='rgba(5, 117, 230, 0.55)'
        bannerImage={banner}
        bannerText={`
        Let’s Help You 
        Beautify Your Brand
        `} 
        applyOverlay={true} />
      </div>

      {/* Services */}
      <div className="container -mt-24 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
        <div>
          <CustomCard 
            title="Brand Identity & Graphics Designs"
            body='We sketch, create, design professional 
            logos and brand identity guidelines for 
            clients. Our delivery time is quick and 
            our output is your desire.'
            icon={vectorPen}
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
            icon={webTv}
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
            icon={webTv}
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
            icon={techPerson}
          />
        </div>
      </div>

      {/* About us */}.
      <div className='w-full grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2' style={{background: "#E6EDFC"}}>
        <div className='w-full mx-auto'>
          <div className="customImage relative border-8 border-[#021B79] rounded-full text-center w-max mx-auto sm:mx-0 md:mx-0 lg:mx-0">
            <img src={customImage} width="350px" height="350px" className="rounded absolute top-1 -right-5" alt="customImage" />
          </div>
        </div>
        <div className='w-5/6 md:w-5/6 lg:w-5/6 mx-auto md:mx-8'>
          <div className='mt-20 text-justify'>
            <div className='divider' style={{color: "#ffffff", lineHeight: "1rem"}}></div>
            <h3 className={`h5 text-primary text-center`}>About us</h3>
            <h1 className={`h4 lg:h1 text-primary text-center`}>Giving your Brand the taste it deserved </h1>
          </div>
          
          <div className='text-justify md:text-left lg:text-left my-4'>
            <p>Blakedesignx is a top notch company in the
            design world that delivers the best of quality 
            designs to clients, bringing creativity to reality
            </p>

            <div className='mt-8 text-center'>
              <SleekButton size='xlg' label='Learn More' mode='dark' url="/about" />
            </div>
          </div>
        </div>
      </div>

      {/* Recent works */}
      <div className='mb-16 h-max'>
        <div className='text-center py-10'>
            <div className="divider" style={{color: "#ffffff"}}></div>
            <h1 className="text-[#021B79] text-2xl sm:text-2xl md:text-3xl lg:text-3xl">Our Recent Works</h1>
        </div>
        <div>
          <div className='container'>
            <div style={{width: '100%', display: 'inline',  overflow: 'scroll'}}>
              <Swiper
                  modules={[Autoplay, Navigation, Pagination, Scrollbar, A11y]}
                  spaceBetween={10}
                  loop={true}
                  autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                  }}
                  slidesPerView={3}
                  navigation
                  pagination={{ clickable: true }}
                  scrollbar={{ draggable: true }}
                  onSwiper={(swiper: any) => console.log(swiper)}
                  onSlideChange={() => console.log('slide change')}
                  >
                  <SwiperSlide>
                    <div className='rounded-lg'>
                      <img src={book} alt="display images" width="300px" height="300px" />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className='rounded-lg'>
                      <img src={monitor} className='rounded-lg' alt="display images" width="300px" height="300px" />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className='rounded-lg'>
                      <img src={jotter} className='rounded-lg' alt="display images" width="300px" height="300px" />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className='rounded-lg'>
                      <img src={flyer} className='rounded-lg' alt="display images" width="300px" height="300px" />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className='rounded-lg'>
                      <img src={techDisplay} alt="display images" width="300px" height="300px" />
                    </div>
                  </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </div>

      {/* Price packages */}
      <div className='mb-20 pt-10'>
        <Price title='Choose Your Perfect Package' background='#E6EDFC' />
      </div>

      {/* Acheivements */}
      <Achievement />

      {/* Clients Feedback */}
      <div className='container py-6 -mt-8'>
        <div className='text-center my-8'>
            <div className="divider" style={{color: "#ffffff"}}></div>
            <h1 className="text-[#021B79] text-2xl sm:text-2xl md:text-3xl lg:text-3xl">Our Clients Feedback</h1>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
          <div className='sm:mx-4'>
            <ClientCard 
            profileImage={princess} 
            name='Obiamaka Princess' 
            title='MD Hibiscus Design' 
            comment='Blake designs has been really amazing,
            filled with lots of inspirations and motivations
            His designs has turned my business around 
            for good..'  />
          </div>
          <div className='sm:mx-4'>
            <ClientCard 
            profileImage={stanley} 
            name='Eze Stanley' 
            title='MD Stan Digitals' 
            comment='Blake designs has been really amazing,
            filled with lots of inspirations and motivations
            His designs has turned my business around 
            for good..'  />
          </div>
          <div className='sm:mx-4'>
            <ClientCard 
            profileImage={johnson}
            name='Ugwu Johnson' 
            title='MD Jmoney' 
            comment='Blake designs has been really amazing,
            filled with lots of inspirations and motivations
            His designs has turned my business around 
            for good..'  />
          </div>
          <div className='sm:mx-4'>
            <ClientCard 
            profileImage={arith} 
            name='Elezuo Arith' 
            title='Ast Hibiscus Design' 
            comment='Blake designs has been really amazing,
            filled with lots of inspirations and motivations
            His designs has turned my business around 
            for good..'  />
          </div>
        </div>
      </div>

   
    </div>
  )
}

export default Home;
