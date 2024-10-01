import React from 'react';
import Image from "next/image";

const UpperNavbar = () => {
  return (
    <div className='container hidden md:block bg-secondary pt-[9px] pb-[8px]'>
      <div className=' flex justify-between items-center'>
          <div>
            <p className='text-base 5xl:text-lg font-bold text-white leading-normal'>FLOORS NOW, PAY OVER TIME</p>
            <p className='text-xs 5xl:text-sm font-bold text-white leading-normal'>Convenient monthly payments to fit your budget1</p>
          </div>
          <div>
            <p className='flex items-center gap-[10px] text-base font-bold text-white leading-normal'>
            <Image src="/assets/glitz/icons/info.png" alt="info icon" width={23} height={23}/>
              0% Interest Financing Available</p>
            <p className='text-xs 5xl:text-sm font-normal text-white leading-normal pt-[4px] 5xl:pt-[6px]'>Ask About 0% Interest Financing with Synchrony Bank</p>
          </div>
          <div>
            <button className='text-base 5xl:text-lg font-bold text-white leading-normal pt-[17px] pb-[14px] pl-[6px] pr-[5px] border-[2px] border-white rounded-[6px]'>View Financing Option</button>
          </div>
      </div>
    </div>
  );
};

export default UpperNavbar;