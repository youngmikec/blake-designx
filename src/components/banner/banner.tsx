import React from "react";
import SleekButton from "../sleek-button/sleek-button";
import styles from './banner.module.css';

type Props = {
    bannerText: string;
    bannerImage: string;
    applyOverlay: boolean;
    backgroundColor: string;
}

export default function Banner ({bannerText, bannerImage, applyOverlay, backgroundColor }: Props) {
    return (
        <>
            <div className={styles.banner} style={{backgroundImage: `url(${bannerImage})`}}>
                {/* <Image src={bannerImage} width="100%" height="100%" alt='banner' /> */}
                <div className={ styles.overlay } style={{ background: applyOverlay ? backgroundColor : 'transparent' }}>
                    <div className={styles.skewLeft}></div>
                    <div className={styles.skewRight}></div>
                    <div className={styles.content}>
                        <p className={styles.bannerText}>
                            {
                                bannerText
                            }
                        </p>

                        <div style={{verticalAlign: 'middle'}}>
                            <SleekButton label='Book Now' mode='light' size="lg" url="/booknow" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}