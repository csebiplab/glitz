import Image from "next/image";
import React from "react";

const galleryData = [
    "/assets/glitz/galleryPage/gallery1.png",
    "/assets/glitz/galleryPage/gallery2.png",
    "/assets/glitz/galleryPage/gallery3.png",
    "/assets/glitz/galleryPage/gallery4.png",
    "/assets/glitz/galleryPage/gallery5.png",
    "/assets/glitz/galleryPage/gallery6.png",
    "/assets/glitz/galleryPage/gallery7.png",
    "/assets/glitz/galleryPage/gallery8.png",
    "/assets/glitz/galleryPage/gallery9.png",
    "/assets/glitz/galleryPage/gallery10.png",
    "/assets/glitz/galleryPage/gallery11.png",
    "/assets/glitz/galleryPage/gallery12.png",
    "/assets/glitz/galleryPage/gallery13.png",
    "/assets/glitz/galleryPage/gallery14.png",
    "/assets/glitz/galleryPage/gallery15.png",
    "/assets/glitz/galleryPage/gallery16.png",
    "/assets/glitz/galleryPage/gallery17.png",
    "/assets/glitz/galleryPage/gallery18.png",
]

const OurWork = () => {
  return (
    <>
      <div className="py-[40px] md:py-[44px] lg:py-[48px] xl:py-[52px] 2xl:py-[56px] 3xl:py-[59px] 4xl:py-[62px] 5xl:py-[64px] px-[10px] md:px-[200px] lg:px-[250px] xl:px-[260px] 2xl:px-[360px] 3xl:px-[390px] 4xl:px-[420px] 5xl:px-[448px]">
        <div>
          <h2 className="text-[29px] md:text-[30px] lg:text-[31px] xl:text-[32px] 2xl:text-[33px] 3xl:text-[34px] 4xl:text-[35px] 5xl:text-[36px] font-extrabold text-balck text-center leading-[40px]">
          Our Work
          </h2>
          <p className="text-lg md:text-[20px] font-light leading-[36px] pt-[25px] 5xl:pt-[36px]">
          View stunning photos in our online gallery of projects at Glitz Floors & More, your premier provider of flooring and remodeling services in the area. Check out our display of beautiful floors, kitchens, bathrooms, and painting projects completed by our talented and experienced team. Browse our gallery for inspiration and to see the quality craftsmanship we deliver on every job, big or small.
          </p>
        </div>
        {/* gallery  */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[3px] pt-[20px] md:pt-[25px] 5xl:pt-[31px] pb-[40px] md:pb-[44px] lg:pb-[48px] xl:pb-[52px] 2xl:pb-[56px] 3xl:pb-[59px] 4xl:pb-[62px] 5xl:pb-[64px]">
            {
                galleryData?.map((image, index)=>{
                    return <Image key={index} src={image} alt="gallery image" width={318} height={428}
                    className="w-full md:w-[318px] h-[491px] md:h-[428px]"/>
                })
            }
        </div>
      </div>
    </>
  );
};

export default OurWork;
