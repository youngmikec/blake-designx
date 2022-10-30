import React from 'react';
import Banner from "../components/banner/banner";
import FormComp from "../components/form-section";

export default function Contact () {
    return (
        <>
            <div style={{width: '100%'}}>
                <Banner 
                backgroundColor='rgba(5, 117, 230, 0.55)'
                bannerImage='/images/contact-image.png' 
                bannerText={`
                    Contact Us Now
                `} 
                applyOverlay={true} />
            </div>

            <div className="my-8">
                <div className="divider"></div>
                <h1 className="h5 md:h1 mt-0 text-[#021B79] text-2xl sm:text-2xl md:text-3xl lg:text-3xl">How may we help you?</h1>
            </div>

            <FormComp />

        </>
    )
}