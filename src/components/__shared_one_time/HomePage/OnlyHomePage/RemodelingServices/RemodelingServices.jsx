import Image from 'next/image';
import React from 'react';
import "./RemodelingServices.css";

const RemodelingServices = () => {
    return (
        <div className='container padding__top'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-[30px]'>
                <div className='md:col-span-1 flex'>
                    <button className='remodel_btn_bg text-info-100 text-[20px] font-bold leading-[40px]'>Bathroom Remodeling</button>
                    <Image src="/assets/glitz/newHomePage/bathroomRemodel.png" alt='bathroom remodel' width={660} height={442} className="w-full"/>
                </div>
                <div className='md:col-span-1'>
                <Image src="/assets/glitz/newHomePage/kitchenRemodel.png" alt='kitchen remodel' width={660} height={442} className="w-full"/>
                </div>
            </div>
        </div>
    );
};

export default RemodelingServices;