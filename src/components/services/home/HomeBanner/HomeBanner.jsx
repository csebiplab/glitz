import React from 'react';
import "./HomeBanner.css";

const HomeBanner = () => {
    return (
        <div>
            <div className='home_banner_bg flex flex-col items-center justify-center px-[6px] sm:px-[16px] md:px-0'>
                <h1 className='text-[32px] md:text-[34px] lg:text-[37px] xl:text-[40px] 2xl:text-[42px] 3xl:text-[44px] 4xl:text-[46px] 5xl:text-[48px] font-extrabold text-center text-black'>Refresh Your Home <br className="block md:hidden"/> This Summer</h1>
                <p className='text-lg 5xl:text-[20px] font-light text-balck text-center pt-[9px] md:pt-[16px] pb-[9px]'>Flooring & Remodeling Services in Cypress, TX</p>
                <p className='hidden md:block text-[24px] xl:text-[26px] 5xl:text-[30px] font-extrabold text-black text-center pb-[6px] md:pb-[10px]'>(346) 445-6343</p>
                <button className='btn__bg_banner text-lg font-light text-white text-center px-[17px] py-[19px]'>Contact Us</button>
            </div>
        </div>
    );
};

export default HomeBanner;