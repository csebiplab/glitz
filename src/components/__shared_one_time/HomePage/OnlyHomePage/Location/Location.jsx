import React from 'react';

const Location = () => {
    return (
        <div className='custom-container pt-[35px] md:pt-[37px] lg:pt-[40px] xl:pt-[43px] 2xl:pt-[46px] 3xl:pt-[49px] 4xl:pt-[52px] 5xl:pt-[55px]'>
            <iframe className="w-full h-[428px] md:h-[361px]" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3455.447281997168!2d-95.679383325182!3d29.99531067494835!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640d57b61c6fd8d%3A0x2ba2182f0ab40249!2sGlitz%20Floors%20%26%20More!5e0!3m2!1sen!2sbd!4v1732205338949!5m2!1sen!2sbd" width="600" height="450" allowfullscreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
    );
};

export default Location;