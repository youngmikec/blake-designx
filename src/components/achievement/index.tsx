import React, { useState, useEffect } from "react";
import { BsDropletHalf } from "react-icons/bs";

import styles from './achievement.module.css';
import laptop from '../../assets/images/Vectorlaptop.png';
import Vectorsmiley from '../../assets/images/Vectorsmiley.png';
import Vectorwheel from '../../assets/images/Vectorwheel.png';

const Achievement = () => {
    const [projectsCount, setProjectsCount] = useState<number>(0);
    const [clientsCount, setClientsCount] = useState<number>(0);
    const [supportCount, setSupportCount] = useState<number>(0);
    const [experienceCount, setExperienceCount] = useState<number>(0);
    
    const countDown = () => {
        let count = 0;
        const intervalId = setInterval(() => {
            count += 2;
            if(count <= 10){
                setExperienceCount(count);
            }
            if(count <= 500){
                setSupportCount(count);
            }
            if(count <= 800){
                setClientsCount(count);
            }
            setProjectsCount(count);
            if(count === 1000){
                clearInterval(intervalId);
            }
        }, 40)
    }
   
    useEffect(() => {
        countDown();
    }, [])

    return (
        <>
            <div className={`text-center py-10 ${styles.achievements}`}>
                <div>
                    <div className={styles.divider} style={{color: "#ffffff"}}></div>
                    <h1 className="h1 text-light">What we acheived</h1>
                </div>

                <div className='grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 mt-20'>
                <div className='text-center'>
                    <div className="flex justify-center">
                        <img src={laptop} height="60px" width="60px" alt="achievement icon" />
                    </div>
                    <h1 className='h1'>{projectsCount}</h1>
                    <p>Completed Projects</p>
                </div>

                <div className={`text-center`}>
                    <div className="flex justify-center">
                        <img src={Vectorsmiley} height="60px" width="60px" alt="achievement icon" />
                    </div>
                    <h1 className='h1'>{clientsCount}</h1>
                    <p>Happy Clients</p>
                </div>

                <div className='text-center'>
                    <div className="flex justify-center">
                        <img src={Vectorwheel} height="60px" width="60px" alt="achievement icon" />
                    </div>
                    <h1 className='h1'>{supportCount}</h1>
                    <p>Client Support</p>
                </div>

                <div className='text-center'>
                    <div className="flex justify-center mx-auto w-4/12">
                        <BsDropletHalf style={{fontSize: '60px'}} />
                    </div>
                    {/* <Image src={'/images/Vectordrop.png'} height="60px" width="60px" alt="achievement icon" /> */}
                    <h1 className='h1'>{experienceCount}</h1>
                    <p>Years Of Experience</p>
                </div>

                </div>
            </div>
        </>
    )
}

export default Achievement;