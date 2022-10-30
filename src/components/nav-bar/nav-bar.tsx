import React, {useState, useEffect} from 'react';
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
// react icons
import { FiMenu } from 'react-icons/fi';
import { FaTimes, FaFacebookF } from 'react-icons/fa';
import { TbBrandTwitter } from 'react-icons/tb';
import { BsInstagram, BsBehance } from 'react-icons/bs';

//component style
import styles from './nav-bar.module.css';

//logo
import logo from '../../assets/images/official-logo-1.png';

export default function NavBar () {
    const routerObject = useLocation();
    const [showSideBar, setShowSidebar] = useState<boolean>(false);
    const [stickyClass, setStickyClass] = useState<string>('relative');
    const [headPadding, setHeadPadding] = useState<string>('pt-0');

    const openSidebar = () => {
        setShowSidebar(true);
        console.log(showSideBar);
    }
    const closeSidebar = () => setShowSidebar(false);

    const customeStyle = {
        sidebar: {zIndex: 60, left: '-1rem', paddingRight: '1rem', height: '100vh'}
    }

    const stickyNavbar = () => {
        if(window !== undefined){
            let windowHeight = window.scrollY;
            if(windowHeight > 300) {
                setStickyClass('fixed top-0 left-0 right-0 w-full z-50');
                setHeadPadding('pt-4')
            }else{
                setStickyClass('relative');
                setHeadPadding('pt-0');
            };
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', stickyNavbar);

        return () => {
            window.removeEventListener('scroll', stickyNavbar);
        }
    }, [])

    return (
        <>
            <div className={`${styles.navbar} mt-0 ${stickyClass}`}>
                {/* desktop view */}
                <div className={`container hidden sm:flex md:flex lg:flex xl:flex justify-between ${headPadding}`}>
                    <div className='flex-1 text-left pt-1'>
                        <span className="mr-2 ml-0 relative">
                            {/* <span className={`${styles.icon} mr-2 mt-1`}><i className="fa fa-envelope-o" aria-hidden="true"></i></span> */}
                            <img src={logo} alt="official logo" width={'65px'} height={'38px'}/>
                            <span className={`${styles.logoText} absolute bottom-3`}>Blakedesignx</span>
                        </span>
                    </div>

                    <div className='flex-2 text-right pt-2'>
                        <span className={`mx-1 text-xl p-2 ${styles.navButton} ${routerObject.pathname === '/' ? styles.active : ''}`}>
                            <Link to="/">
                                <a className='text-lg'>
                                    Home
                                </a>
                            </Link>
                        </span>

                        <span className={`mx-1 text-xl p-2 ${styles.navButton} ${routerObject.pathname === '/about' ? styles.active : ''}`}>
                            <Link to="/about">
                                <a className='text-lg'>
                                    About
                                </a>
                            </Link>
                        </span>
                        <span className={`mx-1 text-xl p-2 ${styles.navButton} ${routerObject.pathname === '/services' ? styles.active : ''}`}>
                            <Link to="/services">
                                <a className='text-lg'>
                                    Services
                                </a>                            
                            </Link>
                        </span>
                        <span className={`mx-1 text-xl p-2 ${styles.navButton} ${routerObject.pathname === '/portfolio' ? styles.active : ''}`}>
                            <Link to="/portfolio">
                                <a className='text-lg'>
                                    Our portfolio
                                </a>                            
                            </Link>
                        </span>
                        <span className={`mx-1 text-xl p-2 ${styles.navButton} ${routerObject.pathname === '/contact' ? styles.active : ''}`}>
                            <Link to="/contact">
                                <a className='text-lg'>
                                    Contact
                                </a>                            
                            </Link>
                        </span>

                    </div>
                </div>

                {/* mobile view */}
                <div className={`container flex justify-start sm:hidden md:hidden lg:hidden xl:hidden ${headPadding}`}>
                    <div className="mr-4" onClick={() => openSidebar()}>
                        <button className="text-black text-3xl"  >
                            <FiMenu />
                        </button>
                    </div>
                    <div className="ml-8 text-center">
                        <span className="mr-2 ml-0 relative">
                            <img src={logo} alt="official logo" width={'30px'} height={'28px'}/>
                            <span className={`${styles.logoText} absolute bottom-3`}>Blakedesignx</span>
                        </span>
                    </div>
                </div>

                <div className={`
                    absolute left-0 top-0 bottom-0 h-full
                 bg-white text-left w-8/12 px-8 py-4 z-100
                    ${showSideBar ? 'block' : 'hidden'}
                 `} style={customeStyle.sidebar}>
                    <div className='bg-white'>
                        <div className="container text-right">
                            <button className="text-black text-xl" onClick={() => closeSidebar()} >
                                <FaTimes />
                            </button>

                            <ul className="list-none">
                                <li className="py-4 text-lg hover:bg-gray-50" onClick={() => closeSidebar()}>
                                    <Link to="/">
                                        <a>
                                            Home
                                        </a>
                                    </Link>
                                </li>
                                <li className="py-4 text-lg hover:bg-gray-50" onClick={() => closeSidebar()}>
                                    <Link to="/about">
                                        <a>
                                            About
                                        </a>
                                    </Link>
                                </li>
                                <li className="py-4 text-lg hover:bg-gray-50" onClick={() => closeSidebar()}>
                                    <Link to="/services">
                                        <a>
                                            Services
                                        </a>                            
                                    </Link>
                                </li>
                                <li className="py-4 text-lg hover:bg-gray-50" onClick={() => closeSidebar()}>
                                    <Link to="/portfolio">
                                        <a>
                                            Our portfolio
                                        </a>                            
                                    </Link>
                                </li>
                                <li className="py-4 text-lg hover:bg-gray-50" onClick={() => closeSidebar()}>
                                    <Link to="/contact">
                                        <a>
                                            Contact
                                        </a>                            
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        <div className="text-center">
                            <div className='flext justify-between pt-8 text-[#021B79]'>
                                <span className="mx-2 inline-block">
                                    <Link to="https://twitter.com/Blake_jrs?s=09">
                                        <a className="text-lg sm:text-xl">
                                            <TbBrandTwitter />
                                        </a>
                                    </Link>
                                </span>

                                <span className="mx-2 inline-block">
                                    <Link to="https://www.instagram.com/blakedesignx">
                                        <a className="text-lg sm:text-xl">
                                            <BsInstagram />
                                        </a>
                                    </Link>
                                </span>
                                <span className="mx-2 inline-block">
                                    <Link to="https://www.behance.net/joshuachinonso">
                                        <a className="text-lg sm:text-xl">
                                            <BsBehance />
                                        </a>                            
                                    </Link>
                                </span>
                                <span className="mx-2 inline-block">
                                    <Link to="https://facebook.com/Blake-Designx-n-Hub-107875180988508/?paipv=1&_rdc=10&_rdr">
                                        <a className="text-lg sm:text-xl">
                                            <FaFacebookF />
                                        </a>                            
                                    </Link>
                                </span>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}