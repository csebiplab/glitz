import NewHeadingIcon from '@/components/__ui/NewHeadingIcon';
import { headingIconText } from '@/utils/heading-text';
import Image from 'next/image';
import React from 'react';

const BlendsStyle = () => {
    return (
        <div className="full__section_r_p pl-3 md:pl-0 padding__top">
            <div className="grid grid-cols-1 grid-cols-2 gap-[16px] 5xl:gap-[20px]">
                <div className='md:col-span-1'>
                    <Image src="/assets/glitz/vinylFlooringInCypress/blendsStyle.png" alt='blend style' width={836} height={752}/>
                </div>
                <div className='md:col-span-1'>
                    <div>
                    <NewHeadingIcon text={headingIconText.blendsStyleAndDurability__headingIconText}/>
                    </div>
                    <h2 className="common__heading">Vinyl Flooring That Blends Style & Durability</h2>
                    <p className='common__paragraph'>Glitz Floors & More offers vinyl flooring that seamlessly blends style and durability, providing the ideal foundation for any room in your home or business. Our vinyl options are crafted to mimic the elegance of hardwood, stone, or tile, delivering high-end aesthetics with the added benefit of being resistant to wear, moisture, and everyday impacts. Our team is dedicated to making your vision come to life, guiding you through styles, colors, and finishes to find the perfect match for your space. With Glitz Floors & More, you don't have to choose between beauty and practicality—you can have both. Discover vinyl flooring that not only enhances the look of your space but also offers unbeatable durability for years to come.</p>
                    <p className="common__paragraph">Our vinyl flooring solutions are designed to meet the needs of modern living, combining low maintenance with high performance. Unlike traditional flooring options, vinyl is resistant to stains, scratches, and water, making it an excellent choice for families, pet owners, and business spaces where durability is key. That's why we offer a variety of textures, finishes, and patterns that can complement any interior, from sleek and contemporary to warm and rustic. Our expert installation team ensures that each plank or tile is laid with precision, creating a flawless, cohesive look that elevates the ambiance of any room.</p>
                </div>
            </div>

        </div>
    );
};

export default BlendsStyle;