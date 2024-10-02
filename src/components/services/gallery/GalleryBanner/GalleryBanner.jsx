import React from 'react';
import "./GalleryBanner.css";

const GalleryBanner = () => {
    return (
        <div>
            <div className='gallery_banner_bg flex flex-col items-center justify-center px-[6px] sm:px-[16px] md:px-0'>
                <h1 className='text-[32px] md:text-[34px] lg:text-[37px] xl:text-[40px] 2xl:text-[42px] 3xl:text-[44px] 4xl:text-[46px] 5xl:text-[48px] font-extrabold text-center text-black pb-[4px]'>Gallery</h1>
                <button className='btn__bg_banner text-lg font-light text-white text-center px-[17px] py-[19px]'>Contact Us</button>
            </div>
        </div>
    );
};

export default GalleryBanner;