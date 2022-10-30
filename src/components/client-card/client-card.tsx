import React from 'react';
import styles from './client-card.module.css';

type Props = {
    name: string;
    title: string;
    comment: string;
    profileImage: string;
}

export default function ClientCard ({profileImage, name, comment, title}: Props) {
    return (
        <>
            <div className={styles.card}>
                <div className='flex justify-start'>
                    <div>
                        <img src={profileImage} className="rounded" width="100px" height="100px" alt="profile" />
                    </div>
                    <div className='mx-4 mt-6 align-middle'>
                        <h1 className={styles.cardTitle}>{ name }</h1>
                        <p className={styles.cardSubTitle}>{ title }</p>
                    </div>
                </div>
                <div className={styles.cardBody}>{ comment }</div>
            </div>
        </>
    )
}