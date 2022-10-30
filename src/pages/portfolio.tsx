import React from "react";
import Banner from "../components/banner/banner";


export default function Portfolio () {
    return (
        <>
            <div style={{width: '100%'}}>
                <Banner 
                backgroundColor='rgba(5, 117, 230, 0.55)'
                bannerImage='/images/contact-image.png' 
                bannerText={`
                    Our Portfolio
                `} 
                applyOverlay={true} />
            </div>

            <div className="my-12">
                <div className="divider"></div>
                <h1 className="h1 mt4 text-[#021B79] text-xl sm:text-2xl md:text-3xl lg:text-3xl">What we love doing</h1>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
                <div className="mx-8 my-4">
                    <img src='/images/talent_hunt.png' height="400px" width="400px" alt="previous works"/>
                </div>
                <div className="mx-8 my-4">
                    <img src='/images/tech-display.png' height="400px" width="400px" alt="previous works"/>
                </div>
                <div className="mx-8 my-4">
                    <img src='/images/app.png' height="400px" width="400px" alt="previous works"/>
                </div>
                <div className="mx-8 my-4">
                    <img src='/images/flyer.png' height="400px" width="400px" alt="previous works"/>
                </div>
                <div className="mx-8 my-4">
                    <img src='/images/frame.png' height="400px" width="400px" alt="previous works"/>
                </div>
                <div className="mx-8 my-4">
                    <img src='/images/youth.png' height="400px" width="400px" alt="previous works"/>
                </div>
                <div className="mx-8 my-4">
                    <img src='/images/praise.png' height="400px" width="400px" alt="previous works"/>
                </div>
                <div className="mx-8 my-4">
                    <img src='/images/jotter.png' height="400px" width="400px" alt="previous works"/>
                </div>
                <div className="mx-8 my-4">
                    <img src='/images/poster.png' height="400px" width="400px" alt="previous works"/>
                </div>
            </div>
        </>
    )
}