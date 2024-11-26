import NewHeadingIcon from '@/components/__ui/NewHeadingIcon';
import { headingIconText } from '@/utils/heading-text';
import Image from 'next/image';
import React from 'react';

const FloorNow = () => {
    return (
        <div className='custom-container padding__top'>
            <div className="flex justify-center items-center">
            <NewHeadingIcon text={headingIconText.floorNow__headingIconText} />
          </div>
          <div className='grid grid-cols-1 md:grid-cols-11 mt-[10px]'>
            <div className='md:col-span-4'>
                 <Image className='w-full h-full' src="/assets/glitz/newHomePage/floor-now1.png" alt='floor now' width={668} height={152}/>
            </div>
            <div className='md:col-span-3 w-full flex flex-col items-center justify-center bg-secondary-800 py-[20px] md:py-1'>
                 <p className='text-[20px] 3xl:text-[22px] font-normal leading-normal text-white px-[18px] text-center'>Convenient monthly <span className='font-bold'>payments to fit your budget1</span></p>
                 <p className='text-base font-normal leading-normal text-center text-white underline mt-[10px] md:mt-0'>Get Consultant</p>
            </div>
            <div className='md:col-span-4'>
            <Image className='w-full h-full' src="/assets/glitz/newHomePage/floor-now2.png" alt='floor now' width={668} height={152}/>
            </div>
          </div>

        </div>
    );
};

export default FloorNow;