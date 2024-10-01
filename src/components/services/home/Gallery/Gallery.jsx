import Image from 'next/image';
import React from 'react';

const galleryData = [
    "/assets/glitz/homePage/gallery1.png",
    "/assets/glitz/homePage/gallery2.png",
    "/assets/glitz/homePage/gallery3.png",
    "/assets/glitz/homePage/gallery4.png",
]

const Gallery = () => {
    return (
        <div>
            <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4'>
                {
                    galleryData?.map((data, index)=>{
                        return <Image key={index} src={data} alt='gallery' width={480} height={450}/>
                    })
                }
            </div>
        </div>
    );
};

export default Gallery;