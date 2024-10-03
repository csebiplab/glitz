import React from 'react';
<<<<<<< HEAD

const UpperNavbar = () => {
  return (
    <div className='container hidden md:block bg-secondary pt-[9px] pb-[8px]'>
      <div className=' flex justify-between items-center'>
          <div>
            <p className='text-base 5xl:text-lg font-bold text-white leading-normal'>FLOORS NOW, PAY OVER TIME</p>
            <p className='text-xs 5xl:text-sm font-bold text-white leading-normal'>Convenient monthly payments to fit your budget1</p>
          </div>
          <div>
            <p className='text-base font-bold text-white leading-normal'>0% Interest Financing Available</p>
            <p className='text-xs 5xl:text-sm font-normal text-white leading-normal pt-[4px] 5xl:pt-[6px]'>Ask About 0% Interest Financing with Synchrony Bank</p>
          </div>
          <div>
            <button className='text-base 5xl:text-lg font-bold text-white leading-normal pt-[17px] pb-[14px] pl-[6px] pr-[5px] border-[2px] border-white rounded-[6px]'>View Financing Option</button>
=======
import Image from "next/image";

const UpperNavbar = () => {
  return (
    <div className='container hidden md:block bg-secondary py-[6px]'>
      <div className=' flex justify-between items-center'>
          <div>
            <p className='text-sm 5xl:text-base font-bold text-white leading-normal'>FLOORS NOW, PAY OVER TIME</p>
            <p className='text-xs 5xl:text-sm font-bold text-white leading-normal'>Convenient monthly payments to fit your budget1</p>
          </div>
          <div>
            <p className='flex items-center gap-[6px] text-sm 5xl:text-base font-bold text-white leading-normal'>
            <Image src="/assets/glitz/icons/info.png" alt="info icon" width={18} height={18}/>
              0% Interest Financing Available</p>
            <p className='text-xs 5xl:text-sm font-normal text-white leading-normal pt-[4px] 5xl:pt-[6px]'>Ask About 0% Interest Financing with Synchrony Bank</p>
          </div>
          <div>
            <button className='text-sm 5xl:text-base font-bold text-white leading-normal py-[8px] px-[12px] border-[2px] border-white rounded-[4px]'>View Financing Option</button>
>>>>>>> 499c20827ee17fe29b85527025d4082a85ced69e
          </div>
      </div>
    </div>
  );
};

export default UpperNavbar;