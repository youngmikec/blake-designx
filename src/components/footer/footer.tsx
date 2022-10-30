import React from 'react';
import { Link } from 'react-router-dom';
import styles from './footer.module.css';

// react icons
import { FaFacebookF } from 'react-icons/fa';
import { TbBrandTwitter } from 'react-icons/tb';
import { BsInstagram, BsBehance } from 'react-icons/bs';

export default function Footer () {
    return (
        <>
            <div className={`${styles.footerWrapper} mb-0`}>
                <div className={`${styles.overlay} text-center`}>
                    <div className='lg:w-7/12 sm:w-9/12 w-11/12 my-24 mx-auto'>
                        <div className='mx-auto w-11/12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2'>
                            <div className='text-left'>
                                <h1 className='lg:text-3xl text-xl'>
                                    <b>Contact Info</b>
                                </h1>
                                <div className='-ml-1 sm:m-0 md:m-0 lg:m-0'>
                                    <p className={`my-4 ${styles.navButton}`}>
                                        <Link to="/">
                                            <a>
                                                <span className='mr-2 text-sm'><i className="fa fa-envelope-o" aria-hidden="true"></i></span>
                                                blakedesignx@gmail.com
                                            </a>
                                        </Link>
                                    </p>
                                    <p className={`my-4 ${styles.navButton}`}>
                                        <Link to="/">
                                            <a>
                                                <span className='mr-2 text-sm'><i className="fa fa-phone" aria-hidden="true"></i></span>
                                                +234 810 738 9617
                                            </a>                            
                                        </Link>
                                    </p>
                                    <p className={`my-4 ${styles.navButton}`}>
                                        <Link to="/">
                                            <a>
                                                <span className='mr-2 text-sm'><i className="fa fa-clock-o" aria-hidden="true"></i></span>
                                                24hrs Avaliable to deliver
                                            </a>                            
                                        </Link>
                                    </p>
                                </div>
                                <div className='mt-1 text-black pt-4 flex justify-start'>
                                    <span className="mx-2">
                                        <Link to="https://twitter.com/Blake_jrs?s=09">
                                            <a>
                                                <TbBrandTwitter />
                                            </a>
                                        </Link>
                                    </span>

                                    <span className="mx-2">
                                        <Link to="https://www.instagram.com/blakedesignx">
                                            <a>
                                                <BsInstagram />
                                            </a>
                                        </Link>
                                    </span>
                                    <span className="mx-2">
                                        <Link to="https://www.behance.net/joshuachinonso">
                                            <a>
                                                <BsBehance />
                                            </a>                            
                                        </Link>
                                    </span>
                                    <span className="mx-2">
                                        <Link to="https://facebook.com/Blake-Designx-n-Hub-107875180988508/?paipv=1&_rdc=10&_rdr">
                                            <a>
                                                <FaFacebookF />
                                            </a>                            
                                        </Link>
                                    </span>

                                </div>
                            </div>

                            <div className='text-left sm:text-right md:text-right lg:text-right mt-8 sm:mt-0 md:mt-0 lg:mt-0'>
                                <h1 className='lg:text-3xl text-xl'>
                                    <b>Quick links</b>
                                </h1>
                                <div className='ml-1 sm:m-0 md:m-0 lg:m-0'>
                                    <p className={`my-4 ${styles.navButton}`}>
                                        <Link to="/about">
                                            <a className='text-sm'>
                                                About
                                            </a>
                                        </Link>
                                    </p>

                                    <p className={`my-4 ${styles.navButton}`}>
                                        <Link to="/contact">
                                            <a className='text-sm'>
                                                Contact Us
                                            </a>                            
                                        </Link>
                                    </p>
                                    
                                    <p className={`my-4 ${styles.navButton}`}>
                                        <Link to="/portfolio">
                                            <a className='text-sm'>
                                                Our portfolio
                                            </a>                            
                                        </Link>
                                    </p>
                                    
                                    <p className={`my-4 ${styles.navButton}`}>
                                        <Link to="/updates">
                                            <a className='text-sm'>
                                                New Update
                                            </a>                            
                                        </Link>
                                    </p>

                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}