import React from 'react';
import SleekButton from '../sleek-button/sleek-button';
import styles from './price-card.module.css';

export type PricePackage = {
    packageName: string;
    services: string[];
    price: string;
}

export function PriceCard ({packageName, services, price}: PricePackage) {
    return (
        <>
            <div className={` ${styles.wrapper}`}>
                <h1 className='h1'>{ packageName }</h1>
                {
                    services.length > 0 && services.map((service: string, index: number) => <p className='my-10' key={index}>{service}</p>)
                }
                <div className='mt-4 mb-6'>
                    <SleekButton label={price} mode='light' size='md' url="/contact" />
                </div>
            </div>
        </>
    )
}