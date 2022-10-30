import React from 'react';
import styles from './index.module.css';

const AboutUsComp = () => {
    return (
        <>
            {/* desktop */}
            <div className='my-32 hidden sm:block md:block lg:block xl:block' >
                
                <div className="flex lg:justify-between sm:justify-center">
                    <div className="flex-1 lg:mr-4">
                        <div className={`${styles.backgroundImage1} pt-4 pb-8`}>
                            <img src="/images/group.png" width="500px" height="500px" alt='group-image' />
                        </div>
                    </div>
                    <div className="flex-1 lg:ml-8 ">
                        <div className='relative right-0'>
                            <div className='py-4 text-left'>
                                <div className='text-left'>
                                    <div className={`${styles.divider} relative`}></div>
                                    <p className="text-[#021B79] bg-white my-8 text-2xl absolute -top-6 left-14  px-4">About Us</p>
                                </div>
                            </div>
                            <h1 className='text-4xl text-[#021B79] my-4'>Giving your brand <br /> the taste it deserved </h1>
                            <p className='text-gray-400 my-12'>Blakedesignx is a top notch company in the
                            design world that delivers the best of quality
                            designs to clients, bringing creativity to reality.
                            we also help our clinet to maintain its identity
                            to his audience.</p>
                        </div>

                        <div className='relative right-0'>
                            <div className='relavtive my-4 text-left'>
                                <div className='text-left'>
                                    <div className={`${styles.divider} relative`}></div>
                                <p className="text-[#021B79] bg-white my-8 text-2xl absolute -top-10 left-14  px-4">Our Mission</p>
                                </div>
                            </div>
                            <p className='text-gray-400 my-12'>We aspire to be the number one African innovation
                            and technology brand, emerging from the South East.
                            To connect people and technology, help people to 
                            access the best technology at a click of button and 
                            also delivering business solutions for the web and 
                            mobile world with digital strategies.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="flex lg:justify-between sm:justify-center my-16">
                    <div className="flex-1 lg:ml-4">
                        <div className='w-7/12 pt-6'>
                            <h1 className='text-[#021B79] text-2xl'>Get to know the founder </h1>

                            <p className='text-gray-400 my-4'>Joshua Chinonso is the CEO / Lead  of Blake Designs.
                            He is a Tech Enthusiast, Graphics Designer and a Brand identity
                            Designer. He is very creative and love playing with some design
                            tools. He has worked with different Teams and companies in building
                            products as a digital designer . He has branded and is still branding a 
                            lot of businesses. Contact him via email blakedesignx@gmail.com</p>
                        </div>
                    </div>
                    <div className="flex-1 lg:mr-4" >
                        <div className={`${styles.backgroundImage2} py-10 text-right`}>
                            <img src="/images/blake.png" width="400px" height="400px" alt='blake' />
                        </div>
                    </div>
                </div>
            </div>

            {/* mobile view */}
            <div className='block sm:hidden md:hidden lg:hidden xl:hidden my-12'>
                <div className='container mx-auto'>
                    {/* top view */}
                    <div className="lg:ml-8">
                        <div className='relative right-0'>
                            <div className='py-4 text-center'>
                                <div className='text-center'>
                                    <div className={`${styles.divider} relative left-12`}></div>
                                    <p className="text-[#021B79] bg-white my-8 text-lg absolute -top-6 left-20  px-4">About Us</p>
                                </div>
                            </div>
                            <h1 className='text-xl text-center text-[#021B79] my-4'>Giving your brand the taste <br /> it deserved </h1>
                        </div>

                        <div className="text-center">
                            <div className={`${styles.backgroundImage1} pt-4 pb-8`}>
                                <img src="/images/group.png" width="500px" height="500px" alt='group-image' />
                            </div>
                        </div>

                        <div className='text-justify'>
                            <p className='text-gray-400 my-4'>Blakedesignx is a top notch company in the
                                design world that delivers the best of quality
                                designs to clients, bringing creativity to reality.
                                we also help our clinet to maintain its identity
                                to his audience.
                            </p>
                        </div>

                        <div className='relative right-0'>
                            <div className='relavtive my-4 text-left'>
                                <div className='text-center mt-8 mb-4'>
                                    <div className={`${styles.divider} relative left-8`}></div>
                                    <p className="text-[#021B79] bg-white mt-8 mb-4 text-lg absolute -top-10 left-16 px-4">Our Mission</p>
                                </div>
                            </div>
                            <p className='text-gray-400 my-12'>We aspire to be the number one African innovation
                            and technology brand, emerging from the South East.
                            To connect people and technology, help people to 
                            access the best technology at a click of button and 
                            also delivering business solutions for the web and 
                            mobile world with digital strategies.
                            </p>
                        </div>
                    </div>

                    {/* bottom view */}
                    <div className='text-center'>
                        <div className="mt-8">
                            <h1 className='text-[#021B79] text-xl text-center'>Get to know the founder </h1>

                            <div className={`${styles.backgroundImage2} pt-4 text-right`}>
                                <img src="/images/blake.png" width="400px" height="400px" alt='blake' />
                            </div>
                        </div>

                        <div className="flex-1 lg:ml-4">
                            <div className='pt-6'>
                                <p className='text-gray-400 my-4'>Joshua Chinonso is the CEO / Lead  of Blake Designs.
                                He is a Tech Enthusiast, Graphics Designer and a Brand identity
                                Designer. He is very creative and love playing with some design
                                tools. He has worked with different Teams and companies in building
                                products as a digital designer . He has branded and is still branding a 
                                lot of businesses. Contact him via email blakedesignx@gmail.com</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AboutUsComp;