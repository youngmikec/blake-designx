import React from "react";
import Banner from "../components/banner/banner";
import CustomCard from "../components/custom-card/custom-card";
import styles from '../styles/Home.module.css';

function Services () {
    return (
        <>
            <div style={{width: '100%'}}>
                <Banner 
                backgroundColor='transparent'
                bannerImage='/images/contact-image.png' 
                bannerText={`
                    SERVICES
                `} 
                applyOverlay={true} />
            </div>

            <div className="mt-12">
                <div className="divider"></div>
                <h1 className="h1 text-[#021B79] text-2xl sm:text-2xl md:text-3xl lg:text-3xl">How may we help you?</h1>
            </div>
            
            <div className={`${styles.servicesPage} mb-32`}>
                <CustomCard 
                title="Brand Identity & Graphics Designs"
                body='We sketch, create, design professional 
                logos and brand identity guidelines for 
                clients. Our delivery time is quick and 
                our output is your desire.'
                icon='/images/Vectorpen.png'
                />
                <CustomCard 
                title="UI/UX Design & Development"
                body='Our iterative design process & focus 
                on validation ensures you avoid 
                unnecessary features and costs, 
                ending with a beautiful app built to 
                satisfy users.'
                icon='/images/carbon_application-webtv.png'
                />
                <CustomCard 
                title="Web Design &
                Development "
                body='We are a creative team of designers,
                developers, and strategists, building 
                elevated websites in the heart of 
                Silicon Valley.'
                icon='/images/carbon_application-webtv.png'
                />
                <CustomCard 
                title="Training & Guide"
                body='Our iterative design process & focus 
                on validation ensures you avoid 
                unnecessary features and costs, 
                ending with a beautiful app built to 
                satisfy users.'
                icon='/images/techPerson.png'
                />
            </div>
        </>
    )
}

export default Services;