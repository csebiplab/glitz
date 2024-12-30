import NewHeadingIcon from '@/components/__ui/NewHeadingIcon';
import { headingIconText } from '@/utils/heading-text';
import Image from 'next/image';
import React from 'react';

const Repair = () => {
    return (
        <div className="full__section_r_p pl-3 md:pl-0 padding__top">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-[16px] 5xl:gap-[20px]">
                <div className='md:col-span-1'>
                    <Image src="/assets/glitz/vinylFlooringInCypress/repair.png" alt='repair' width={836} height={632} className="w-full h-[570px] 5xl:h-[600px]"/>
                </div>
                <div className='md:col-span-1'>
                    <div className="flex items-center justify-center md:justify-start">
                    <NewHeadingIcon text={headingIconText.repair__headingIconText}/>
                    </div>
                    <h2 className="text-[25px] md:text-[27px] lg:text-[30px] xl:text-[33px] 2xl:text-[35px] 3xl:text-[38px] 4xl:text-[40px] 5xl:tex-[42px] font-bold text-black leading-tight 5xl:leading-normal mb-[10px] text-center md:text-left">Vinyl Floor Repair in Cypress</h2>
                    <p className='text-base 5xl:text-lg text-black font-normal text-center md:text-left leading-[26px] lg:leading-[26px] xl:leading-[28px] 2xl:leading-[30px] 3xl:leading-[32px] 4xl:leading-[34px] 5xl:leading-[36px]'>Glitz Floors & More offers expert vinyl floor repair services in Cypress, restoring the beauty and durability of your flooring. From scratches and scuffs to peeling edges and discoloration, our team tackles all types of damage with precision and care. Our vinyl floor repair services provide a cost-effective solution for Cypress homeowners and businesses looking to extend the life of their floors without the need for a complete replacement.
                    At Glitz Floors & More, customer satisfaction is our top priority. We work closely with clients from the initial design and selection process to the final installation, ensuring transparency and precision at every step. Our team's dedication to excellence has made us a go-to choice for floor repair services in Cypress, TX, and beyond. We specialize in seamlessly blending repairs to match your existing vinyl, so imperfections like scratches, dents, and peeling edges disappear, leaving your floors flawless and polished. Our experienced team uses advanced techniques to ensure repairs are durable and long-lasting, giving you peace of mind and enhancing the look of your space. For vinyl floor repair that combines quality with affordability, choose Glitz Floors & More and experience exceptional service and results. Contact us today for reliable vinyl floor repairs that bring life back to your space!</p>
                </div>
            </div>

        </div>
    );
};

export default Repair;