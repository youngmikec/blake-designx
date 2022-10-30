import React from 'react';
import { Link } from 'react-router-dom';
import { BsBehance, BsInstagram } from 'react-icons/bs';
import { FaFacebookF } from 'react-icons/fa';
import { TbBrandTwitter } from 'react-icons/tb';
import styles from './top-bar.module.css';

function TopBar () {
    return (
        <>
            <div className={`${styles.topbar}`}>
                <div className='container justify-between hidden sm:flex md:flex lg:flex xl:flex '>
                    <div className='flex-1 text-left pt-4'>
                        <span className="mx-2">
                            <span className={`${styles.icon} mr-1 sm:mr-2 md:mr-2 lg:mr-3 mt-1 `}><i className="fa fa-envelope-o" aria-hidden="true"></i></span>
                            blakedesignx@gmail.com
                        </span>
                        <span className="mx-2">
                            <span className={`${styles.icon} mr-1 sm:mr-2 md:mr-2 lg:mr-3 mt-1 `}><i className="fa fa-phone" aria-hidden="true"></i></span>
                            +234 810 738 9617
                        </span>
                        <span className="mx-2">
                            <span className={`${styles.icon} mr-1 sm:mr-2 md:mr-2 lg:mr-3 mt-1 `}><i className="fa fa-clock-o" aria-hidden="true"></i></span>
                            24hrs Avaliable 
                        </span>

                    </div>

                    <div className='flex-1 text-right py-3'>

                        <span className="mx-2 sm:mx-3 md:mx-4 lg:mx-4 inline-block">
                                <Link to="https://twitter.com/Blake_jrs?s=09">
                                    <a className="text-lg sm:text-xl">
                                        <TbBrandTwitter />
                                    </a>
                                </Link>
                            </span>

                            <span className="mx-2 sm:mx-3 md:mx-4 lg:mx-4 inline-block">
                                <Link to="https://www.instagram.com/blakedesignx">
                                    <a className="text-lg sm:text-xl">
                                        <BsInstagram />
                                    </a>
                                </Link>
                            </span>
                            <span className="mx-2 sm:mx-3 md:mx-4 lg:mx-4 inline-block">
                                <Link to="https://www.behance.net/joshuachinonso">
                                    <a className="text-lg sm:text-xl">
                                        <BsBehance />
                                    </a>                            
                                </Link>
                            </span>
                            <span className="mx-2 sm:mx-3 md:mx-4 lg:mx-4 inline-block">
                                <Link to="https://facebook.com/Blake-Designx-n-Hub-107875180988508/?paipv=1&_rdc=10&_rdr">
                                    <a className="text-lg sm:text-xl">
                                        <FaFacebookF />
                                    </a>                            
                                </Link>
                            </span>

                    </div>
                </div>
            </div>
        </>
    )
}

export default TopBar;