import NewHeadingIcon from '@/components/__ui/NewHeadingIcon';
import { headingIconText } from '@/utils/heading-text';
import Image from 'next/image';
import React from 'react';

const Cleaner = () => {
    return (
        <div className="full__section_l_p pr-3 md:pr-0 padding__top">
            <div className="grid grid-cols-1 grid-cols-2 gap-[16px] 5xl:gap-[20px]">
                <div className='order-2 md:col-span-1'>
                    <Image src="/assets/glitz/vinylFlooringInCypress/cleaner.png" alt='cleaner' width={813} height={632}/>
                </div>
                <div className='order-1 md:col-span-1'>
                    <div>
                    <NewHeadingIcon text={headingIconText.cleaner__headingIconText}/>
                    </div>
                    <h2 className="common__heading">Best Vinyl Floor Cleaner in Cypress</h2>
                    <p className='common__paragraph'>Keeping your vinyl floors clean and looking their best requires the right products and techniques. Glitz Floors & More recommends using specialized vinyl floor cleaners that are safe, effective, and gentle on your floors. Our cleaners are designed to remove dirt, grime, and stains without causing damage or leaving behind residue. Whether you have Luxury Vinyl Plank (LVP) or Vinyl Composition Tile (VCT), we have high-quality cleaners for regular maintenance and deep cleaning. For those in Cypress, Glitz Floors & More offers the best products and methods to keep your vinyl floors spotless, beautiful, and durable for years.
                    With the right cleaner and routine care, your vinyl floors in Cypress will remain bright and beautiful. At Glitz Floors & More, we help you protect your investment with trusted cleaning services tailored to your flooring type. Contact us to learn more about our top vinyl floor cleaner. Choosing vinyl floor cleaner with Glitz Floors & More means investing in quality and craftsmanship you can rely on. We're committed to delivering a seamless experience, from selection to installation, so you can enjoy beautiful, durable floors that make an impact. Let us help you create a space that's not only visually appealing but also built to endure everyday life.</p>
                </div>
            </div>

        </div>
    );
};

export default Cleaner;