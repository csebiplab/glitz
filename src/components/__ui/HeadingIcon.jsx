import Image from 'next/image';
import React from 'react';

const HeadingIcon = ({text="empty text"}) => {
    return (
        <div className='flex gap-2 items-center'>
            <Image  className='w-[17px]' src="/assets/glitz/icons/left_line.png" width={17} height={1} alt='heading right icon'/>
            <p className="text-base font-bold text-primary">{text}</p>
            <Image className='w-[17px]' src="/assets/glitz/icons/right_line.png" width={17} height={1} alt='heading left icon'/>
        </div>
    );
};

export default HeadingIcon;