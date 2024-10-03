import HeadingIcon from '@/components/__ui/HeadingIcon';
import { headingIconText } from '@/utils/heading-text';
import React from 'react';

const Review = () => {
    return (
        <div>
            <div className='container padding__top'>
                <div className="flex flex-col justify-center items-center">
                <HeadingIcon text={headingIconText.review__headingIconText}/>
                <h2 className='text-[25px] md:text-[26px] lg:text-[29px] xl:text-[32px] 2xl:text-[35px] 3xl:text-[38px] 4xl:text-[41px]  5xl:text-[44px] font-bold text-secondary leading-normal pt-[10px] pb-[5px] text-center'>Reviews for Our Flooring Installation</h2>
                </div>
            </div>
        </div>
    );
};

export default Review;